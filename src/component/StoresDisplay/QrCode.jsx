import React, {Component} from 'react';


import { QRCode } from "react-qr-svg";

 

class QrCode extends Component {

  render(){
    const size =  600;
  
        return (
          <>
          <center>
            <div className="ui center-all large image " >
            <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{marginTop:0, width: size }}
                value= {`https:${window.location.hostname}/Customer/${this.props.code}`}
            />
            
            </div>
           
            
            </center>
            
            </>

        );
        
    }
}

export default QrCode;
