import axios from 'axios';

const URL = 'https://api.misratafestival.ly';

const    getHeaders = (isAuth) => { return {
    'Authorization': isAuth? `Bearer ${localStorage.getItem('access_token')}`:null,
    'Content-Type': "application/x-www-form-urlencoded" 
    };
};

//--------------------------Dashboard--------------------------//

export const log = (logData) =>{
    const config = { headers: getHeaders(false) };
    const logFormData = new FormData();
    for ( var key in logData ) {
    logFormData.append(key, logData[key]);
    } 
    return axios.post(`${URL}/login`, logFormData, config);
}

export const refreshAccessToken = () => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('refresh_token')}`,
        }
      };
    return axios.get(`${URL}/refresh`, config);
}

export const filterStores  = (term, page, perPage) =>{ 
    const config = {
             params: {
            term: term,
            page: page,
            per_page: perPage
            }
      };
    config['headers'] = getHeaders(true);
    return axios.get(`${URL}/markets/search`, config);
}

export const ChangeStoreState = (code, state) => {
    const config = {
        params: {
            code: code,
            state: state
            }
        };
    config['headers'] = getHeaders(true);
    return axios.patch(`${URL}/market/edit/state`, {}, config)
}

//-------------------------Stores Form---------------------// 
export const addStore = (newStore) => {
    const config = { headers: getHeaders(false) };
    const form_data = new FormData();
    for ( var key in newStore ) {
    form_data.append(key, newStore[key]);
    } 
    return axios.post(`${URL}/markets`, form_data, config)
}

export const getStore = (code) =>{
    const config = {
        headers: getHeaders(false),
        params: {
           market_code: code,}
        };
         
    return axios.get(`${URL}/get_market`, config);
} 

export const checkIfLocationUsed = (postcode, building_number) =>{
    const config = {
            headers: getHeaders(false),
            params: {
            postcode: postcode,
            building_number: building_number
            }
        };
    return axios.get(`${URL}/check_market_location`, config);
}

export const getLocationInfo = (location)=>{
    return axios.get(`${URL}/location_info/${location}`);
}