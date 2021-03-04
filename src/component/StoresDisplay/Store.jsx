import React from 'react';
import {useHistory} from 'react-router-dom';

import ChangeStoreState from './ChangeStoreState';
import './Store.css';

const Store = ({store,index})=> {

    const history = useHistory();
    
    return (
          <tr>
            <td className="center aligned">{index}</td>
            <td className="center aligned"> {store.name} </td>
            <td className="center aligned">{store.postcode} </td>
            <td className="center aligned">{store.building_number} </td>

            <td className="center aligned">{store.owner_name} </td>
            <td className="center aligned"> {store.owner_phone} </td>
            <td className="center aligned">{store.market_phone} </td>

            <td className="center aligned">{store.email} </td>
            <td className="center aligned">{store.category} </td>
            <td className="center aligned">{store.code} </td> 

            <td className="center aligned">{store.state ===0? 'معلق':
                 'مقبول'} </td>
            <td className="center aligned">{store.datetime} </td>
            

            <td className="center aligned">
                <div className="ui center aligned ten column grid">
                    <div className="row">
                    
                    <button className="ui basic grey  icon button qr-button" disabled={store.state ===0} onClick={()=>history.push(`/fs-com-e/QrCode/${store.code}`)}>
                        <i className="qrcode icon"></i> 
                    </button>
                   
                    <ChangeStoreState storeCode = {store.code} storeState = {store.state} />
                </div>
             </div>
            </td>
            </tr> 

    )
}

export default Store