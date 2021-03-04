import React from 'react';
import { useSelector } from 'react-redux';

import {filterStores} from '../../redux/Actions/stores';

const PageButtons = (props) => {
    const dispatch = props.dispatch;
    const pageNumber = useSelector((state) => state.stores.pageNumber);
    const totalPages = useSelector((state) => state.stores.totalPages);
    const filterTerm = useSelector((state) => state.stores.filterTerm);
    const increase = () => {
            dispatch(filterStores(filterTerm, pageNumber+1, 10));
    }
    const decrease = () => {
  
        dispatch(filterStores(filterTerm, pageNumber-1, 10));
    }
    const buttonStyle = {
        backgroundColor: '',
        color: 'white',
        fontFamily : 'inherit'
    }
    return(
        <div className ="container">
            <div className="ui center aligned ten column grid">
                <div className="row">
                    <button disabled={pageNumber===totalPages} className="ui column right labeled icon button" onClick={increase} style={buttonStyle}>
                        التالي
                        <i className="right chevron icon"></i>
                    </button>

                    <div className="ui center aligned column">
                        {pageNumber}/{totalPages}
                    </div>

                    <button disabled={pageNumber===1} className="ui column labeled icon button " onClick={decrease} style={buttonStyle}>
                        <i className="left chevron icon"></i>
                       رجوع
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PageButtons;