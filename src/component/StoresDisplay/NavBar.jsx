
import React from 'react';
import { useDispatch } from 'react-redux';

import {logout} from '../../redux/Actions/login';

import './NavBar.css';

const NavBar = (props) => {
    const dispatch = useDispatch();

    const onClickSignOut = () => {
        dispatch(logout())
    }
    return(
        <div className="ui large menu nav">
            <a href="/fs-com-e/StoreList" className="item">
                الرئيسية
            </a>
            <div className="item" onClick={onClickSignOut} style={{cursor: 'pointer'}}>
                تسجيل الخروج
            </div>
            <div className="left item">
                {props.children}
            </div>  
        </div>
    )
}

export default NavBar;