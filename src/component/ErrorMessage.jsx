import React from 'react';

const ErrorMessage = (props)=>{
    return(
        <div className="ui negative message">
        <div className="header">
        {props.head}
        </div>
        <p>{props.content}
        </p></div>
    );
}

export default ErrorMessage;