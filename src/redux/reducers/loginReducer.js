
const loginReducer = (state={logData: {}, logState:false, logError: false} , action)=>{
   
    switch (action.type){
        case 'LOGIN_INFO':
            return {...state, logData: action.payload};
        case 'CHANGE_LOG_STATE':
            return {...state, logState: action.payload};
        case 'LOGIN_ERROR':
            return {...state, logError: action.payload};      
        default:
             return state;     
       
    }
}

export default loginReducer;