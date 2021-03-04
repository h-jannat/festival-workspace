import {combineReducers} from 'redux';

import storeReducer from './storeReducer';
import loginReducer from './loginReducer';
import customerReducer from './customerReducer';

export default combineReducers({
    stores: storeReducer,
    loginInfo: loginReducer,
    customer : customerReducer

})