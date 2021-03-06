import React from 'react'
import Recaptcha  from 'react-recaptcha';

const ReCaptcha = ({setVerified})=> {

    const verifyCallback = (response) => {
      if(response) setVerified(true)
    }

   const expiredCallback = ()=>{
    setVerified(false)
   }

     
    return (
      <>
        <Recaptcha
          sitekey="6LfxN10aAAAAAIJjjf87ZLgpO2mpP1T-Rzp_6mab"
          expiredCallback={expiredCallback}
          verifyCallback={verifyCallback}
          hl="ar"
          
        />
        </>
    );
}

export default ReCaptcha;



