import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import SuccessReg from './component/SuccessReg';
import Customer from './component/Customer/CustomerForm';
import NotFound from './component/NotFound';

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

const mapStateToProps = ({loginInfo})=>{

  const isLog =  loginInfo.logState || (localStorage.getItem('is_log') ==='true');
  return {isLog: isLog};
}

export default connect(mapStateToProps)(App);
