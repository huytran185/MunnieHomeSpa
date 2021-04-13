import {GET_STAFF_REQUEST, 
    GET_STAFF_SUCCESS, 
    GET_STAFF_FAIL,
    POST_STAFF_REQUEST,
    POST_STAFF_SUCCESS,
    POST_STAFF_FAIL,
    EDIT_STAFF_REQUEST,
    EDIT_STAFF_SUCCESS,
    EDIT_STAFF_FAIL,
    DELETE_STAFF_REQUEST,
    DELETE_STAFF_SUCCESS,
    DELETE_STAFF_FAIL
} from '../constants/staff';

const initializeState={
    list: [],
    loading: false,
    error: null,
}

const serviceReducer = (state= initializeState, action)=>{
    switch(action.type){
        case GET_STAFF_REQUEST:{
            return {...state, loading: true};
        }
        case GET_STAFF_SUCCESS:{
            return {...state, list: action.payload, loading: false};
        }
        case GET_STAFF_FAIL:{
            return {...state,error:action.payload, loading: false};
        }
        case POST_STAFF_REQUEST:{
            return {...state, loading:true}
        }
        case POST_STAFF_SUCCESS:{
            const newList = {...state.list};
            newList[action.id] = action.payload; 
            return {...state, list: newList, loading:false}
        }
        case POST_STAFF_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        case EDIT_STAFF_REQUEST:{
            return{...state,loading:true}
        }
        case EDIT_STAFF_SUCCESS:{
            const newList = {...state.list};
            newList[action.id] = action.payload;
            return {...state,list: newList, loading:false}
        }
        case EDIT_STAFF_FAIL:{
            return{...state, error:action.payload, loading:false}
        }
        case DELETE_STAFF_REQUEST:{
            return {...state, loading:true}
        }
        case DELETE_STAFF_SUCCESS:{
            const newList = {...state.list}
            delete newList[action.payload];
            return {...state, list: newList, loading:false}
        }
        case DELETE_STAFF_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        default: return state;
    }
}

export default serviceReducer;