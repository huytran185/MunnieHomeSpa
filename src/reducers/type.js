import {GET_TYPE_REQUEST, 
    GET_TYPE_SUCCESS, 
    GET_TYPE_FAIL,
    POST_TYPE_REQUEST,
    POST_TYPE_SUCCESS,
    POST_TYPE_FAIL,
    EDIT_TYPE_REQUEST,
    EDIT_TYPE_SUCCESS,
    EDIT_TYPE_FAIL,
    DELETE_TYPE_REQUEST,
    DELETE_TYPE_SUCCESS,
    DELETE_TYPE_FAIL, 
    SELECT_TYPE} from '../constants/type';

const initializeState = {
    list: [],
    loading: false,
    error: null
}

const typeReducer = (state = initializeState, action)=>{
    switch(action.type){
        case GET_TYPE_REQUEST:{
            return {...state, loading: true};
        }
        case GET_TYPE_SUCCESS:{
            return{...state, list: action.payload, loading: false};
        }
        case GET_TYPE_FAIL:{
            return {...state,error:action.payload, loading: false};
        }
        case POST_TYPE_REQUEST:{
            return {...state, loading:true}
        }
        case POST_TYPE_SUCCESS:{
            const newList = {...state.list};
            newList[action.id] = action.payload; 
            return {...state, list: newList, loading:false}
        }
        case POST_TYPE_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        case EDIT_TYPE_REQUEST:{
            return{...state,loading:true}
        }
        case EDIT_TYPE_SUCCESS:{
            const newList = {...state.list};
            newList[action.id] = action.payload;
            return {...state,list: newList, loading:false}
        }
        case EDIT_TYPE_FAIL:{
            return{...state, error:action.payload, loading:false}
        }
        case DELETE_TYPE_REQUEST:{
            return {...state, loading:true}
        }
        case DELETE_TYPE_SUCCESS:{
            const newList = {...state.list}
            delete newList[action.payload];
            return {...state, list: newList, loading:false}
        }
        case DELETE_TYPE_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        case SELECT_TYPE:{
            return{...state, list:action.payload, loading:false};
        }
        default: return state;
    }
}
export default typeReducer;