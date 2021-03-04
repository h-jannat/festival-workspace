import React from 'react'
import logo from '../../image/logo.png';
import Footer from '../Footer';
import './style.css';

const SuccessReg = ({match}) => {

     
    return (
      
        <div className="ui container centered grid log-container" > 
        <div className="ui form segment log-form" >
        
        <img className="ui centered medium image" alt="logo" src={logo}/>
        {/* --------- customer and store successful registeration  ------------ */}
        <div className="ui form segment success" >
        <h3>لقد تم التسجيل بنجاح</h3>
        {match.params.StoreCode?<h2 className="code">رقم الكود الخاص بك هو :{`${match.params.StoreCode}`}</h2>:<></>}
        </div>
        <div className="ui section divider"></div>
        <div className="field"> 
        {match.params.StoreCode?<a href="https://misratafestival.ly/"><button className="ui button text"  type="submit">الرجوع إلى الرئيسية</button></a>:<></>}
        </div>
        <Footer/>
        </div>
       
        </div>
        
       
    )
}

export default SuccessReg;