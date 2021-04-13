import {GET_VOUCHER_REQUEST, 
    GET_VOUCHER_SUCCESS, 
    GET_VOUCHER_FAIL,
    POST_VOUCHER_REQUEST,
    POST_VOUCHER_SUCCESS,
    POST_VOUCHER_FAIL,
    EDIT_VOUCHER_REQUEST,
    EDIT_VOUCHER_SUCCESS,
    EDIT_VOUCHER_FAIL,
    DELETE_VOUCHER_REQUEST,
    DELETE_VOUCHER_SUCCESS,
    DELETE_VOUCHER_FAIL
} from '../constants/voucher';

const initializeState = {
    list: [],
    loading: false,
    error: null
}

const voucherReducer = (state = initializeState, action)=>{
    switch(action.type){
        case GET_VOUCHER_REQUEST:{
            return {...state, loading: true};
        }
        case GET_VOUCHER_SUCCESS:{
            return{...state, list: action.payload, loading: false};
        }
        case GET_VOUCHER_FAIL:{
            return {...state,error:action.payload, loading: false};
        }
        case POST_VOUCHER_REQUEST:{
            return {...state, loading:true}
        }
        case POST_VOUCHER_SUCCESS:{
            const newList = {...state.list};
            newList[action.id] = action.payload; 
            return {...state, list: newList, loading:false}
        }
        case POST_VOUCHER_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        case EDIT_VOUCHER_REQUEST:{
            return{...state,loading:true}
        }
        case EDIT_VOUCHER_SUCCESS:{
            const newList = {...state.list};
            newList[action.id] = action.payload;
            return {...state,list: newList, loading:false}
        }
        case EDIT_VOUCHER_FAIL:{
            return{...state, error:action.payload, loading:false}
        }
        case DELETE_VOUCHER_REQUEST:{
            return {...state, loading:true}
        }
        case DELETE_VOUCHER_SUCCESS:{
            const newList = {...state.list}
            delete newList[action.payload];
            return {...state, list: newList, loading:false}
        }
        case DELETE_VOUCHER_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        default: return state;
    }
}
export default voucherReducer;