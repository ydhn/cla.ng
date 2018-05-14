import React, { Component } from 'react';
import { mainTheme } from '../../index';

export class Logo extends Component {
  render() {
    const { width, height, fill = "#fff" } = this.props;

    return (
      <div style={{ display: "inline-block", width: width, height: height, marginTop: '10px' }}>
        <svg preserveAspectRatio="none" viewBox="0 0 1304.83 485.25">
          <path d="M203.69,487.06a194.93,194.93,0,0,1,51.84,6.73q24.46,6.73,37.93,15.72,9,5.84,12.57,14.13A35.73,35.73,0,0,1,309,540.7a40.79,40.79,0,0,1-5.17,16.83,37.67,37.67,0,0,1-11.67,13,33.14,33.14,0,0,1-16.83,5.61q-9.66.68-20.42-4.71a109.72,109.72,0,0,0-21.55-8.08,90.3,90.3,0,0,0-23.79-3.59,107.19,107.19,0,0,0-33.66,5.16,70.19,70.19,0,0,0-27.61,16.83q-11.9,11.68-18.63,30.53t-6.73,46.23q0,28.72,6.73,49.37T148.48,742a73,73,0,0,0,28.72,19.75,101.92,101.92,0,0,0,36.36,6.28,112.65,112.65,0,0,0,27.38-3.59,95.22,95.22,0,0,0,25.14-9.88Q280,747,293,751.89a38.76,38.76,0,0,1,20,16.39q6.94,11.44,5.38,26T302,820.57a89.08,89.08,0,0,1-14.81,8.53,150.59,150.59,0,0,1-21.55,8.08,236.24,236.24,0,0,1-26.26,6.06,165.94,165.94,0,0,1-28.5,2.46q-40,0-72.27-11.89t-55-35.46Q60.94,774.79,48.83,740T36.71,659q0-45.79,13.69-78.55T87,527a143.49,143.49,0,0,1,53.19-30.3A208.14,208.14,0,0,1,203.69,487.06Z" transform="translate(-36.71 -464.62)"
            style={{ fill }} />
          <path d="M367.52,499.18a30.61,30.61,0,0,1,3.59-15,35.11,35.11,0,0,1,9.42-11A37.69,37.69,0,0,1,394,466.64a59.26,59.26,0,0,1,15.26-2,56.78,56.78,0,0,1,15,2,40.28,40.28,0,0,1,13.47,6.51,34.2,34.2,0,0,1,9.65,11,30.72,30.72,0,0,1,3.59,15V812a32.93,32.93,0,0,1-3.59,15.71,31.37,31.37,0,0,1-9.65,11,47.24,47.24,0,0,1-13.47,6.51,51.58,51.58,0,0,1-30.07,0A44.15,44.15,0,0,1,381,838.75a34.43,34.43,0,0,1-9.65-11A31.35,31.35,0,0,1,367.52,812Z" transform="translate(-36.71 -464.62)"
            style={{ fill }} />
          <path d="M621.57,574.59A169.54,169.54,0,0,1,664,579.75a99.66,99.66,0,0,1,34.79,16.16A79.76,79.76,0,0,1,722.34,624q8.76,17.06,8.76,40.84V810.69q0,18.85-12.12,28.06a44.82,44.82,0,0,1-27.83,9.2q-17.07,0-28.73-8.53t-11.67-23.79a60.41,60.41,0,0,1-15.94,12.79,110.67,110.67,0,0,1-19.3,8.53,122.66,122.66,0,0,1-20.42,4.94,127.26,127.26,0,0,1-18.85,1.57,99.7,99.7,0,0,1-30.3-4.49,66.94,66.94,0,0,1-24.69-13.91,64.88,64.88,0,0,1-16.61-24.24q-6.06-14.82-6.06-35.46,0-25.59,10.55-42.64a85.51,85.51,0,0,1,27.16-27.61,114.24,114.24,0,0,1,37.25-15,194.73,194.73,0,0,1,41.3-4.49q9,0,20,.68t15,1.12v-3.59q0-27.82-42.64-27.83a78.8,78.8,0,0,0-20,2.92,127.88,127.88,0,0,0-19.07,6.51,80.56,80.56,0,0,1-15.26,5.16,57.1,57.1,0,0,1-11.67,1.57A28,28,0,0,1,527.76,659a33.53,33.53,0,0,1-10.1-8.31A37,37,0,0,1,511.15,639a38.92,38.92,0,0,1-2.24-12.79q0-11.22,4.26-19.3t14.14-13Q563.67,574.6,621.57,574.59ZM605.41,778.38q19.3,0,32.1-10.1t12.79-24.47V733.49a101.65,101.65,0,0,0-10.55-1.8,112,112,0,0,0-14.14-.9q-19.3,0-31.87,6.29t-12.56,20.65q0,11.67,8.07,16.16A33.08,33.08,0,0,0,605.41,778.38Z" transform="translate(-36.71 -464.62)"
            style={{ fill }} />
          <path d="M951,690.85q0-17.05-8.75-28.51T912.44,650.9q-14.38,0-26.26,9.87T869.34,691.3V812a32.82,32.82,0,0,1-3.59,15.71,32.31,32.31,0,0,1-9.42,11,44.32,44.32,0,0,1-13.24,6.51,51.61,51.61,0,0,1-30.08,0,47.18,47.18,0,0,1-13.46-6.51,33.36,33.36,0,0,1-9.88-11A31.25,31.25,0,0,1,785.86,812V611.4a29.14,29.14,0,0,1,3.81-15,36.73,36.73,0,0,1,9.88-11A40.43,40.43,0,0,1,813,578.85a57.19,57.19,0,0,1,15-2,50.82,50.82,0,0,1,14.14,2,44.42,44.42,0,0,1,12.57,5.84,32.72,32.72,0,0,1,14.14,24q14.36-18.39,33.89-24.91a121.07,121.07,0,0,1,38.37-6.51,111.61,111.61,0,0,1,36.36,5.84,81,81,0,0,1,29.85,18,83.05,83.05,0,0,1,20,30.3q7.19,18.18,7.19,42.87V812a31.35,31.35,0,0,1-3.82,15.71,33.33,33.33,0,0,1-9.87,11,46.78,46.78,0,0,1-13.69,6.51,54.18,54.18,0,0,1-15.27,2.24,51.74,51.74,0,0,1-15-2.24,41.22,41.22,0,0,1-13-6.51A32.58,32.58,0,0,1,951,812Z" transform="translate(-36.71 -464.62)"
            style={{ fill }} />
          <path d="M1258.05,802.17a60.58,60.58,0,0,1-14.13,15.93,76.39,76.39,0,0,1-17.29,10.32,82,82,0,0,1-18.17,5.39,101.56,101.56,0,0,1-16.84,1.57,134.59,134.59,0,0,1-44.44-7.18,97.51,97.51,0,0,1-36.35-22.44q-15.72-15.25-24.69-39.28t-9-57.23q0-32.32,9.88-56.56t25.58-40.39A105.33,105.33,0,0,1,1188,580a130.31,130.31,0,0,1,37.71,5.83,67.22,67.22,0,0,1,32.31,21.1q2.25-15.7,14.59-23.12a51,51,0,0,1,26.71-7.4,59.32,59.32,0,0,1,15.26,2,40,40,0,0,1,13.69,6.5,34.22,34.22,0,0,1,9.65,11,30.69,30.69,0,0,1,3.59,15V814.73q0,34.56-9.65,59.93t-27.6,42a113.74,113.74,0,0,1-43.09,24.69q-25.15,8.09-56.11,8.53a164.54,164.54,0,0,1-51.62-7.18q-24.69-7.63-40.4-20.2a37.45,37.45,0,0,1-14.36-35,43.41,43.41,0,0,1,6.28-16.83,33.86,33.86,0,0,1,30.3-16.16q9.64.21,20,7A113.32,113.32,0,0,0,1178.38,872q12.8,4.26,23.12,4.27,31,0,43.76-14.37t12.79-44.43ZM1213.62,769a45.89,45.89,0,0,0,14.59-2.47,37.51,37.51,0,0,0,13.69-8.3,46.94,46.94,0,0,0,10.54-15.26q4.26-9.43,5.61-23.35V690.4q-1.33-12.12-6.5-20.43a50.07,50.07,0,0,0-11.9-13.46,40.5,40.5,0,0,0-14.36-7.18,54.69,54.69,0,0,0-13.92-2q-22,0-35.68,15.71T1162,707q0,28.28,12.12,45.11T1213.62,769Z" transform="translate(-36.71 -464.62)"
            style={{ fill }} />
        </svg>
      </div>
    );
  }
}

export class GlyphLogo extends Component {
  render() {
    const { width, height } = this.props;
    return (
      <div style={{ display: "inline-block", width: width, height: height }}>
        <svg preserveAspectRatio="none" viewBox="0 0 1328.4 1074.89">
          <path d="M472.59,189.18" transform="translate(-55.31 -149.32)" style="fill:none;stroke:#f79f8b;stroke-miterlimit:10;stroke-width:35px"/>
          <path d="M535.49,470.29" transform="translate(-55.31 -149.32)" style="fill:none;stroke:#f79f8b;stroke-miterlimit:10;stroke-width:35px"/>
          <ellipse cx="664.2" cy="833.02" rx="664.2" ry="241.88" style="fill:#acd7a2"/>
          <g style="opacity:0.57">
            <polygon points="664.2 131.95 675.05 499.71 990.24 664.48 990.24 320.56 664.2 131.95" style="fill:#fbcbc5"/>
          </g>
          <polygon points="328.01 314.39 328.01 703.72 665.18 898.38 1002.35 703.72 1002.35 314.39 665.18 119.73 328.01 314.39" style="fill:#f7eeed"/>
          <path d="M720.49,1077.77l-363.2-209.7V448.68L720.49,239l363.2,209.69V868.07ZM409.36,838l311.13,179.63L1031.62,838V478.75L720.49,299.12,409.36,478.75Z" transform="translate(-55.31 -149.32)" style="fill:#fac4bc"/>
          <polyline points="691.35 509.05 976.26 675.23 976.26 329.37 685.48 160.02" style="fill:#fcddd9"/>
          <rect x="530.81" y="333.63" width="52.07" height="445.49" transform="translate(-251.54 636.18) rotate(-61.9)" style="fill:#fac4bc"/>
          <polygon points="675.05 499.71 679.03 879.6 981.85 668.97 675.05 499.71" style="fill:#fabeb7"/>
          <path d="M720.49,649" transform="translate(-55.31 -149.32)" style="fill:none;stroke:#f79f8b;stroke-miterlimit:10;stroke-width:35px"/>
          <path d="M551.91,449.84" transform="translate(-55.31 -149.32)" style="fill:none;stroke:#f79f8b;stroke-miterlimit:10;stroke-width:35px"/>
          <path d="M1083.51,893.8l.2-108.74-255,145.2-.63-780.94L720.49,211.2,327.32,422V876L720.5,1102.69h0M439.33,811.36V486.7L720.49,324.38V973.69Z" transform="translate(-55.31 -149.32)" style="fill:#f79f8b"/>
          <polyline points="773.38 775.04 772.57 5.09 664.7 470.87" style="fill:#f79f8b"/>
        </svg>
      </div>
    );
  }
}

export class WhiteLogo extends Component {
  render() { 
    const { width, height } = this.props;
    return (
      <div style={{ display: "inline-block", width: width, height: height }}>
        <svg preserveAspectRatio="none" viewBox="0 0 1374.74 1123.48">
          <ellipse cx="687.37" cy="873.17" rx="687.37" ry="250.31" style={{fill:'#abd6a1'}}/>
          <g style={{opacity: 0.57}}>
            <polygon points="686.35 136.23 697.55 515.9 1022.95 686.02 1022.95 330.96 686.35 136.23" 
            style={{fill: "#facac4"}}/>
          </g>
          <polygon points="339.26 324.58 339.26 726.53 687.36 927.5 1035.45 726.53 1035.45 324.58 687.36 123.61 339.26 324.58" style={{fill:"#ffdcdf"}} />
          <path d="M768,1145.69,393,929.2v-433L768,279.73l375,216.49v433ZM446.77,898.16,768,1083.62,1089.2,898.16V527.26L768,341.8,446.77,527.26Z" transform="translate(-80.63 -187.16)" style={{fill:"#ffdcdf"}} />
          <polygon points="397.08 348.32 397.08 683.49 687.37 851.09 687.37 180.73 397.08 348.32" style={{fill:"#f7b1a6"}} />
          <polyline points="714.37 525.55 1008.52 697.12 1008.52 340.05 708.32 165.21" style={{fill:"#ffbeb3"}} />
          <g style={{opacity: 0.55}}><rect x="572.16" y="377.43" width="53.76" height="459.93" transform="translate(-299.56 662.56) rotate(-61.9)" style={{fill:"#fff"}}/></g>
          <polygon points="697.55 515.9 701.66 908.11 1014.3 690.65 697.55 515.9" style={{fill:"#f69e8a"}}/>
          <path d="M768,703.06" transform="translate(-80.63 -187.16)" style={{fill:"none",stroke:"#f69e8a",strokeMiterlimit:"10",strokeWidth:"35px"}} />
          <path d="M593.94,497.41" transform="translate(-80.63 -187.16)" style={{fill:"none",stroke:"#f69e8a",strokeMiterlimit:"10",strokeWidth:"35px"}} />
          <path d="M1142.77,955.76,1143,843.5,879.72,993.41l-.65-806.25L768,251,362.07,468.7V937.42l405.93,234h0M477.72,870.65V535.47L768,367.88v670.36Z" transform="translate(-80.63 -187.16)" style={{fill:"#fff"}} />
          <polyline points="799.07 800.17 798.23 5.26 686.86 486.13" style={{fill:"#fff"}} />
        </svg>
      </div>
    )
  }
}

export class SpeechBubble extends Component {
  render() {
    return (
      <div style={{ display: "inline-block", width: "40px", height: "32px" }}>  
        <div style={{
          position: "absolute",
          width: "40px", height: "20px", marginTop: "0.2rem", fontSize: "1rem", textAlign: 'center',
          color: mainTheme.palette.primary.main
        }}>
          {this.props.children}  
        </div>
        <svg preserveAspectRatio="none" viewBox="-10 -10 264.98 207.68">
          <path d="M141.73,42.57c-67.37,0-122,40.79-122,91.1,0,21.15,9.66,40.62,25.85,56.08l-21.85,39,50-19.47c19.44,9.77,42.85,15.48,68,15.48,67.37,0,122-40.79,122-91.11S209.1,42.57,141.73,42.57Z" transform="translate(-19.24 -42.07)"
            style={{ fill: "#fff", stroke: "#d5d6d5", strokeWidth: 4 }} />
        </svg>
      </div>
    )
  }
}