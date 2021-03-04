import { useState, useEffect } from 'react';

import {filterStores} from '../../redux/Actions/stores';
import Input from '../login/components/InputField';

const SearchBox = (props) => {

    const dispatch = props.dispatch;
    const [term, setTerm] = useState(null);

    useEffect(() => {
       const timer = setTimeout(() => {
        if(term !==null) dispatch (filterStores(term, 1, 10));
       }, 1000);

        return () => clearTimeout(timer);
      }, [term, dispatch]);

    const handleInput= (e) =>{
        setTerm(e.target.value);
    } 
    
    return( 
                <Input onChange={handleInput} type="text" placeholder="بحث"  icon="search icon" color="#fef9e7" borderColor="#e5e7e9" width='500px' />
            );

}


export default SearchBox;
