import React from 'react';
import './InputField.css';


const InputField = ({title, type, name, placeholder, onChange, icon, color, borderColor, onIconClick, width}) => {
    return(
        <div className="field">
                <label>{title}</label>
                <div className="ui input">
                    <div className="icon-btn" onClick={onIconClick}><i className={icon} ></i></div>    
                    <input className="input-field" type={type} name={name} placeholder={placeholder} onChange={onChange} 
                     style={{backgroundColor: color, border: `1px solid ${borderColor}`, width: width }} />
                      
                </div>
               
        </div>
    )
}
//eye slash
export default InputField;