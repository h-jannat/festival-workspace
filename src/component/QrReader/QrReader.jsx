import React , {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import QrReader from 'react-qr-reader';
import { clearInfo } from '../../redux/Actions/customer';


import './QrReader.css';
import { Redirect } from 'react-router-dom';


const QrScanner = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

    useEffect(() => {
        dispatch(clearInfo());
    },[dispatch]);
  const handleScan = code => {

    if(code) { 
      setData(code);
    }
  }
  const handleError = err => {
    alert(err)
  }
  
    return (
      <div className="center aligned reader" >
       
      {data != null?
       <Redirect to={`/Customer/${data.split('/').slice(-1)}`}  />:
        <div className="content" >
          <div className="border"> </div>
          <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%', height: '100%', postion: 'relative',
          borderRadius: '25px'}}
        />
        </div>   
      }
      </div>
    )
}

export default QrScanner;