import * as api from '../../api';

export const addStore = (store) => async (dispatch) => {
  try {
    const  data  = await api.addStore(store);
    dispatch({ type: 'REG_STORE', payload: data , isDone:true });   
    if(data.status === 201)
    {
      dispatch(clearInfo);
      window.location.replace(`/Success/${store.code}`);
    } 
  } catch (error) {
    
    if(error.response.status===422 )
      {
        dispatch({ type:'SET_IS_ERROR', payload:true });
        alert("رقم الهاتف المحل موجود مسبقا  ")
      }
      else
    {
      alert("لقد حدث خطأ ! الرجاء التأكد من صحة البيانات المدخلة"+error)
      dispatch({ type: 'SET_IS_Error', payload:true });
    }
  }
};

const refresh = async(reRun) => {
  try{
    const newAccessToken = await (await api.refreshAccessToken()).data.access_token;
    localStorage.setItem("access_token", newAccessToken);
    await  reRun();
  }
  catch(e) {
    alert(`حدث خطأ ${e}`)
  }
}
export const filterStores = (keySearch,pageNumber , perPage) => async (dispatch) => {

  const getStores = async() =>  {
      dispatch({type: 'SET_IS_LOADING', payload: true});
      const response = await api.filterStores(keySearch, pageNumber, perPage);
      dispatch({type: 'SET_IS_LOADING', payload: false});
      if(response.status ===200 || response.status ===201) {
        const totalPages =  response.data.total_pages;
        dispatch({ type:'FETCH_STORES' , payload: response.data.markets });
        dispatch({ type:'CHANGE_TOTAL_PAGES' , payload: totalPages===0?1:totalPages });
        dispatch({type: 'CHANGE_TOTAL_STORES', payload: response.data.total_markets});
        dispatch({type:'CHANGE_TOTAL_ACCEPTED_STORES', payload: response.data.accepted_markets});
        dispatch({ type:'CHANGE_PAGE' , payload: pageNumber});
        dispatch({ type:'CHANGE_FILTER_TERM' , payload: keySearch});
    }
  }
  try {
   await getStores();
    }
  catch (error) {
    
    if(error.response.data.status===401 && error.response.data.sub_status===42){
     await refresh(getStores);   
  }
    else alert(`حدث خطأ ${error}`)
  }
};

export const checkAddress = (address) => async (dispatch) => {
  try {
    let isExisit = false;
    const {data} = await api.getLocationInfo(address);
    if(data.status === 'valid') {
      try{
        isExisit = await api.checkIfLocationUsed(...address.split('+'));
        if(isExisit.data.is_exist){
        alert('العنوان موجود مسبقًا')
        }
        else
        dispatch({ type: 'ADDRESS', payload: data, isInValid:false })
  }
    catch(e){
      alert(`${e} لقد حدث خطأ!`)
    } 
      } 
    else
    dispatch({ type: 'ADDRESS', payload: data, isInValid:true });
  } catch (error) {
    dispatch({ type: 'INVALID_ADDRESS', payload: true });
  }
};

export const changeState= (storeCode, state) => async (dispatch, useState) => {
  const stores = useState().stores;
  const change = async()=>{
    await api.ChangeStoreState(storeCode, state);
    const storeList = [...stores.storeList].map(store => store.code ===storeCode? {...store, state:state}: store);
    dispatch({ type:'FETCH_STORES' , payload: storeList });
  }
  try {

    await change();

  } catch (error) { 
    if(error.response.data.status===401 && error.response.data.sub_status===42){
     await refresh(change);   
  }
    else alert(`حدث خطأ ${error}`)
  }
}; 

export const getStoreInfo = (storeCode) => async (dispatch) => {
  try{
    const {data} = await api.getStore(storeCode);
    dispatch({type:'SET_STORE_INFO', payload: data.market_info});
  }
  catch(e){
    window.location.replace('/NotFound');
  }
}

export const clearInfo = () => async (dispatch) => {
  try {
    dispatch({type:'ADDRESS', payload: {} , isInValid:false});
  } catch (error) {
    
    dispatch({ type:'SET_IS_ERROR', payload:true });
  }
};

export const clearAddress = () => async (dispatch) => {
  try {
    dispatch({type:'INVALID_ADDRESS', isInValid:false});
    dispatch({type:'IS_ERROR', isError:false});
  } catch (error) {
    
    dispatch({ type:'IS_ERROR', payload:true });
  }
};

