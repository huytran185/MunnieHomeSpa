import {AUTH_START, 
    AUTH_SUCCESS, 
    AUTH_FAIL,
    SIGN_START,
    SIGN_SUCCESS,
    SIGN_FAIL,
    LOGOUT_SUCCESS,
    } 
    from '../constants/auth';

const initializeState={
    userEmail: null,
    token: null,
    loading: false,
    error: null,
}
const authReducer = (state = initializeState, action)=>{
    switch(action.type){
        case AUTH_START:{
            return{...state, loading:true}
        }
        case AUTH_SUCCESS:{
            return{...state, 
                userEmail:action.userEmail,
                token: action.token,
                loading:false}
        }
        case AUTH_FAIL:{
            return{...state, error:action.payload,loading:false}
        }
        case SIGN_START:{
            return{...state, loading: true}
        }
        case SIGN_SUCCESS:{
            return{...state, 
                userEmail:action.userEmail,
                token: action.token,
                loading:false}
        }
        case SIGN_FAIL:{
            return{...state, error: action.payload, loading:false}
        }
        // case CHECK_START:{
        //     return{...state, loading:true}
        // }
        // case CHECK_SUCCESS:{
        //     return{...state, userEmail:action.payload, loading:false}
        // }
        // case CHECK_FAIL:{
        //     return{...state,error:action.payload, loading:false}
        // }
        case LOGOUT_SUCCESS:{
            return{...state,
                userEmail:null,
                token:null, 
                loading:false}
        }
    default: return state;
    }
}
export default authReducer;