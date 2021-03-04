import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SuccessReg from './component/SuccessReg';
import Customer from './component/Customer/CustomerForm';

const App = (props)=> {

  return (    
    <Router>
      <Switch>
         <Route path="/"  exact component={Customer} />   {/* Customer Regiteration Form */}
          <Route path="/Success" exact component={SuccessReg}/> {/* Success Customer Regiteration Page */}
      </Switch>
    </Router>
  );
}



export default App;
