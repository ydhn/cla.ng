import { stringify as qstringify } from 'query-string';
import { API_URL } from './constants';
import moment from 'moment'
import 'moment/locale/ko'

moment.locale('ko')

const DEFAULT_HEADERS = {
  'X-Requested-With': 'XMLHttpRequest',
  Accept: 'application/json, text/html, *.*'
};

const DEFAULT_OPTIONS = {
  method: 'GET',
  mode: 'cors',
  credentials: 'include'
};

const jsonize = response => {
  if (response.ok || response.status < 300) {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') < 0) {
      return response.text();
    }
  } else {
    return response.json().then(e => {
      throw e;
    });
  }
  return response.json();
};

const buildBodyToFetch = data => {
  if (data instanceof FormData || typeof (data) === 'string') {
    return data
  } else if (data instanceof Array) {
    // in case of using `$(form).serializeArray()`
    return data.map(e => `${e.name}=${e.value}`).join('&')
  } else if (data instanceof HTMLFormElement) {
    return new FormData(data)
  } else {
    return qstringify(data)
  }
}

export const fetchAPI = (path, options = {}) => {
  const url = new window.URL(API_URL);
  const headers = new Headers({ ...DEFAULT_HEADERS, ...options.headers });
  if (!headers.has('content-type') && typeof options.body === 'string') {
    headers.set(
      'content-type',
      'application/x-www-form-urlencoded; charset=utf-8'
    );
  }
  const request = new Request(`${url.origin}${path}`, {
    ...DEFAULT_OPTIONS,
    ...options,
    headers
  });
  return fetch(request).then(jsonize);
};

// ---- Object To Form Data
function isObject(value) {
  return value === Object(value)
}

function isArray(value) {
  return Array.isArray(value)
}

function isFile(value) {
  return value instanceof File
}

function makeArrayKey(key) {
  if (key.length > 2 && key.lastIndexOf('[]') === key.length - 2) {
    return key
  } else {
    return key + '[]'
  }
}

export function objectToFormData(obj, fd = null, pre = null) {
  fd = fd || {}

  Object.keys(obj).forEach((prop) => {
    var key = pre ? (pre + '[' + prop + ']') : prop

    if (isObject(obj[prop]) && !isArray(obj[prop]) && !isFile(obj[prop])) {
      objectToFormData(obj[prop], fd, key)
    } else if (isArray(obj[prop])) {
      obj[prop].forEach((value) => {
        var arrayKey = makeArrayKey(key)
        if (!(value !== null && value !== undefined && value !== false)) return
        if (isObject(value) && !isFile(value)) {
          objectToFormData(value, fd, arrayKey)
        } else {
          fd[arrayKey] = value
        }
      })
    } else {
      const value = obj[prop]
      if (!(value !== null && value !== undefined && value !== false)) return
      fd[key] = value
    }
  })

  return buildBodyToFetch(fd)
}
// -----