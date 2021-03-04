import {log} from '../../api';

export const login = (loginInput) => async (dispatch) => {
  try {
    const {data} = await log(loginInput);
   dispatch({ type: 'LOGIN_INFO', payload: data});
   dispatch({ type: 'CHANGE_LOG_STATE', payload: true});
   localStorage.setItem("access_token", data.access_token);
     localStorage.setItem("refresh_token", data.refresh_token);
     localStorage.setItem("is_log", true);
 
   

  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', payload: true});
    dispatch({ type: 'CHANGE_LOG_STATE', payload: false});
  }
};

export const logout = () => async(dispatch) =>{
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.setItem('is_log', false);
  dispatch({ type: 'CHANGE_LOG_STATE', payload: false});
}