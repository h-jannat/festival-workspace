const regCustomer = (customer = {isError: false, isDone: false}, action)=>{
    switch (action.type){

        case 'SET_IS_ERROR':
            return {...customer, isError: action.payload}
            case 'SET_IS_DONE':
                return {...customer, isDone: action.payload}
        default:
            return  customer 
    }
}

export default regCustomer