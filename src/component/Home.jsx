import React from 'react';
import logo from '../image/logo.png';
import Footer from './Footer';

const Home = () => {

return (
    <div>
        <div style={{height:'100px'}}></div> 
            <div className="ui container centered grid reg-container" > 
                <div className="ui form segment reg-form" >
                
                <img className="ui centered large image" alt="logo" src={logo}/>
                <div className="ui section divider"></div>
                <h2 style={{textAlign:'center', fontFamily: 'inherit'}}> مهرجان مصراتة للتسوق 2021 </h2>
                <Footer/>
                </div>
            </div>
            
        <div style={{height:'80px'}}></div> 
    </div>
)
}
export default Home;