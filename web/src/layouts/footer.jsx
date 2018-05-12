import React, { Component } from 'react';
import { Logo } from '../components/common/assets';

export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div style={{ textAlign: 'center' }}>
          <Logo width="70px" height="30px" fill="#999" /><br />
          우리는 홍콩으로 갑니다
          <small style={{ display: "block", marginTop: "1em" }}>
            신난당!
          </small>
        </div>
      </footer>
    )
  }
}