import {GET_CUSTOMER_REQUEST, 
    GET_CUSTOMER_SUCCESS, 
    GET_CUSTOMER_FAIL,
    POST_CUSTOMER_REQUEST,
    POST_CUSTOMER_SUCCESS,
    POST_CUSTOMER_FAIL,
    EDIT_CUSTOMER_REQUEST,
    EDIT_CUSTOMER_SUCCESS,
    EDIT_CUSTOMER_FAIL,
    DELETE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_FAIL
} from '../constants/customer';

const initializeState={
    list: [],
    loading: false,
    error: null,
}

const serviceReducer = (state= initializeState, action)=>{
    switch(action.type){
        case GET_CUSTOMER_REQUEST:{
            return {...state, loading: true};
        }
        case GET_CUSTOMER_SUCCESS:{
            return {...state, list: action.payload, loading: false};
        }
        case GET_CUSTOMER_FAIL:{
            return {...state,error:action.payload, loading: false};
        }
        case POST_CUSTOMER_REQUEST:{
            return {...state, loading:true}
        }
        case POST_CUSTOMER_SUCCESS:{
            const newList = {...state.list};
            newList[action.id] = action.payload; 
            return {...state, list: newList, loading:false}
        }
        case POST_CUSTOMER_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        case EDIT_CUSTOMER_REQUEST:{
            return{...state,loading:true}
        }
        case EDIT_CUSTOMER_SUCCESS:{
            const newList = {...state.list};
            newList[action.id] = action.payload;
            return {...state,list: newList, loading:false}
        }
        case EDIT_CUSTOMER_FAIL:{
            return{...state, error:action.payload, loading:false}
        }
        case DELETE_CUSTOMER_REQUEST:{
            return {...state, loading:true}
        }
        case DELETE_CUSTOMER_SUCCESS:{
            const newList = {...state.list}
            delete newList[action.payload];
            return {...state, list: newList, loading:false}
        }
        case DELETE_CUSTOMER_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        default: return state;
    }
}

export default serviceReducer;