import React from 'react';
import ReactToPrint from 'react-to-print';
import QrCode from './QrCode';
import NavBar from './NavBar';

class Print extends React.PureComponent {
  render() {
    return (
     
      <div>
        <NavBar>
          <ReactToPrint
            trigger={() => {
              return  <a href="#print">
                <button className="ui huge basic icon button" style={{width: '50px'}}>
                <i className="print icon"></i> 
                </button>
              </a>;
            }}
            content={() => this.componentRef}
          />
        </NavBar> 
       
        <QrCode code={this.props.match.params.code} ref={el => (this.componentRef = el)} />
        
      </div>
     
       
    );
  }
}

export default Print;