import {GET_SERVICE_REQUEST, 
    GET_SERVICE_SUCCESS, 
    GET_SERVICE_FAIL,
    POST_SERVICE_REQUEST,
    POST_SERVICE_SUCCESS,
    POST_SERVICE_FAIL,
    EDIT_SERVICE_REQUEST,
    EDIT_SERVICE_SUCCESS,
    EDIT_SERVICE_FAIL,
    DELETE_SERVICE_REQUEST,
    DELETE_SERVICE_SUCCESS,
    DELETE_SERVICE_FAIL
} from '../constants/service';

const initializeState={
    list: [],
    loading: false,
    error: null,
}

const serviceReducer = (state= initializeState, action)=>{
    switch(action.type){
        case GET_SERVICE_REQUEST:{
            return {...state, loading: true};
        }
        case GET_SERVICE_SUCCESS:{
            return {...state, list: action.payload, loading: false};
        }
        case GET_SERVICE_FAIL:{
            return {...state,error:action.payload, loading: false};
        }
        case POST_SERVICE_REQUEST:{
            return {...state, loading:true}
        }
        case POST_SERVICE_SUCCESS:{
            const newList = {...state.list};
            newList[action.id] = action.payload; 
            return {...state, list: newList, loading:false}
        }
        case POST_SERVICE_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        case EDIT_SERVICE_REQUEST:{
            return{...state,loading:true}
        }
        case EDIT_SERVICE_SUCCESS:{
            const newList = {...state.list};
            newList[action.id] = action.payload;
            return {...state,list: newList, loading:false}
        }
        case EDIT_SERVICE_FAIL:{
            return{...state, error:action.payload, loading:false}
        }
        case DELETE_SERVICE_REQUEST:{
            return {...state, loading:true}
        }
        case DELETE_SERVICE_SUCCESS:{
            const newList = {...state.list}
            delete newList[action.payload];
            return {...state, list: newList, loading:false}
        }
        case DELETE_SERVICE_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        default: return state;
    }
}

export default serviceReducer;