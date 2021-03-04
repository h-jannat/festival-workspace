import React from 'react'
import Input from '../login/components/InputField'

const Filter = (props) =>{
    const handleInput =(e)=> {   
        props.setSearchInput(e.target.value)
      }
    return (
        <>
            <Input onChange={handleInput}/>
        </>
    )
}

export default Filter