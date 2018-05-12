/* eslint no-console: 0 */

const fs = require('fs');
const AWS = require('aws-sdk');
const moment = require('moment');
const exec = require('child_process').exec;
//require('es6-promise').polyfill();
require('isomorphic-fetch');
const config = require('./webpack.config');

const appName = 'backoffice-auth';
const BUCKET_NAME = 'miso-web-assets';
const DEFAULT_PARAMS = {
  Bucket: BUCKET_NAME,
  ACL: "public-read"
};
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
const s3 = new AWS.S3();

const VERSION_SUFFIX = moment().format('YYYYMMDDHHmmss');
const BUNDLE_NAME = `${appName}-${process.env.NODE_ENV || "staging"}-bundle`;
const DISCARD_SINCE = new Date().getTime() - (86400 * 1000 * 50);

Array.from(['css', 'js']).forEach((ext) => {
  const bundle = Object.assign({}, DEFAULT_PARAMS, {
    Key: `webpack/${appName}/${BUNDLE_NAME}.${ext}`,
    Body: fs.readFileSync(`${config.output.path}/${appName}-bundle.${ext}`, 'utf-8')
  });
  const versionedKey = `${bundle.Key}-${VERSION_SUFFIX}`;
  s3.putObject(Object.assign({}, bundle, { Key: versionedKey }), (error) => {
    if (error) {
      console.error(versionedKey + ':', error);
    } else {
      console.log(versionedKey + ':', 'Uploaded.');

      s3.waitFor('objectExists', { Bucket: bundle.Bucket, Key: versionedKey }, (err) => {
        if (err) {
          console.error(err);
        } else {
          const params = Object.assign({}, DEFAULT_PARAMS, {
            Key: bundle.Key, CopySource: `${bundle.Bucket}/${versionedKey}`
          });
          s3.copyObject(params, (error) => {
            console.log(params.Key + ':', error || 'Copied.');
          });
        }
      });
    }
  });
});

console.log("Discard old bundles...");
s3.listObjectsV2({ Bucket: BUCKET_NAME, Prefix: `webpack/${appName}/${appName}` }, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const itemsToDelete = data.Contents.filter(e =>
      DISCARD_SINCE > Date.parse(e.LastModified)
    ).map(e =>
      Object.assign({ Key: e.Key })
    );
    if (itemsToDelete.length > 0) {
      s3.deleteObjects({ Bucket: BUCKET_NAME, Delete: { Objects: itemsToDelete, Quiet: true } }, (err, data) => {
        console.log(err, data);
      })
    }
  }
});

exec("cat .git/$(cat .git/HEAD | awk '{print $2}')", (error, stdout) => {
  if (stdout) {
    fs.appendFileSync(`${config.output.path}/${appName}-bundle.js`, `\nGIT_HASH="${stdout.replace(/\s+/, '')}";`);
  }
});
