import * as api from '../../apiCustomer';

export const addCustomer = (customer) => async (dispatch) => {
    try {
      console.log(customer);
       const data = await api.addCustomer(customer)
      console.log(data);
      if(data.status === 200)
      {
        dispatch({ type:'SET_IS_DONE', payload:true , data:data});
        dispatch({type:'SET_STORE_INFO', payload: null});
        window.location.replace(`/Success`);
      } 
      else
      dispatch({ type:'SET_IS_ERROR', payload:true });
     
    } catch (error) {
      if(error?.response?.status === 400){
        dispatch({ type:'SET_IS_ERROR', payload:true });
    }
    }
  };

  // export const clearInfo = () => async (dispatch) => {
  //     try {
  //       dispatch({type:'SET_STORE_INFO', payload: null});
  //       dispatch({type:'SET_IS_DONE', payload: false});
  //       dispatch({type:'SET_IS_ERROR', payload: false});
        
  //     } catch (error) {
  //       dispatch({ type:'SET_IS_ERROR', payload:true });
  //     }
  //   };

  
