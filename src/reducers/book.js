import {GET_BOOK_REQUEST, 
    GET_BOOK_SUCCESS, 
    GET_BOOK_FAIL,
    POST_BOOK_REQUEST,
    POST_BOOK_SUCCESS,
    POST_BOOK_FAIL,
    EDIT_BOOK_REQUEST,
    EDIT_BOOK_SUCCESS,
    EDIT_BOOK_FAIL,
    DELETE_BOOK_REQUEST,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_FAIL
} from '../constants/book';

const initializeState={
    list: [],
    loading: false,
    error: null,
}
const bookReducer = (state = initializeState, action)=>{
    switch(action.type){
        case GET_BOOK_REQUEST:{
            return {...state, loading: true};
        }
        case GET_BOOK_SUCCESS:{
            return {...state, list: action.payload, loading: false};
        }
        case GET_BOOK_FAIL:{
            return {...state,error:action.payload, loading: false};
        }
        case POST_BOOK_REQUEST:{
            return {...state, loading:true}
        }
        case POST_BOOK_SUCCESS:{
            const newList = {...state.list};
            newList[action.id] = action.payload; 
            return {...state, list: newList, loading:false}
        }
        case POST_BOOK_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        case EDIT_BOOK_REQUEST:{
            return {...state, loading:true}
        }
        case EDIT_BOOK_SUCCESS:{
            const newList = {...state.list};
            newList[action.id] = action.payload; 
            return {...state, list: newList, loading:false}
        }
        case EDIT_BOOK_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        case DELETE_BOOK_REQUEST:{
            return {...state, loading:true}
        }
        case DELETE_BOOK_SUCCESS:{
            const newList = {...state.list}
            delete newList[action.payload];
            return {...state, list: newList, loading:false}
        }
        case DELETE_BOOK_FAIL:{
            return {...state, error: action.payload, loading:false}
        }
        default:return state;
    }
}
export default bookReducer;