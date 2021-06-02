import {AUTH_START, 
    AUTH_SUCCESS, 
    AUTH_FAIL,
    SIGN_START,
    SIGN_SUCCESS,
    SIGN_FAIL,
    LOGOUT_SUCCESS,
    } 
    from '../constants/auth';

import {register,
    signIn, 
    logOut,
    getToken,
    checkLogin
    } from '../api/api';

//Creating new Account for Admin function

export const registerAccount = (form)=>async dispatch=>{
    dispatch({type:AUTH_START});
    const res =  await register(form);
    if(res[0] === 'Success'){
        setLocal(res[1],res[2]);
        dispatch({
            type: AUTH_SUCCESS,
            userEmail: res[1],
            token: res[2],
        })
    }else{
        dispatch({
            type:AUTH_FAIL,
            payload: res[1]
        })
    }
}

//Sign In Account function

export const signInAccount = (form)=> async dispatch=>{
    dispatch({type:SIGN_START});
    const res = await signIn(form);
    if(res[0] === 'Success'){
        setLocal(res[1],res[2]);
        dispatch(checkTimeOut())
        dispatch({
            type: SIGN_SUCCESS,
            userEmail: res[1],
            token: res[2],
        })
        
    }else{
        dispatch({
            type:SIGN_FAIL,
            payload: res[1]
        })
    }
}

//Logout function

export const logOutAccount = ()=> async dispatch=>{
    logOut();
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('expireTime')
    dispatch({
        type:LOGOUT_SUCCESS,
    })
}

//check Token timeOut and logOut after 1 hour

export const checkTimeOut = ()=> async dispatch=>{
    setTimeout(()=>{
        dispatch(logOutAccount())
    },3600*1000)
}

//set Account information to localStorage

const setLocal = (user,token)=>{
    localStorage.setItem('token', token.token);
    localStorage.setItem('userEmail', user);
    localStorage.setItem('expireTime', token.expirationTime);
}

//Check if user is authorized to access Dashboard

export const authCheckState = ()=>async dispatch=>{
    const isLogin = await checkLogin();
    if(isLogin){
        const token = await getToken();
        let tokenLocal = localStorage.getItem('token');
        let expireTime = new Date(localStorage.getItem('expireTime'));
        let userEmail = localStorage.getItem('userEmail');
        const localTime = new Date().toUTCString();
        if(token.expirationTime <= localTime || expireTime <= localTime){
            dispatch(logOutAccount());
        }else{
            if(!tokenLocal|| !expireTime || !userEmail){
                setLocal(isLogin.email, token);
                dispatch({
                        type: SIGN_SUCCESS,
                        userEmail: isLogin.login,
                        token: token,
                    })
            }else{
                dispatch({
                    type: SIGN_SUCCESS,
                    userEmail: userEmail,
                    token: tokenLocal,
                })
            }
        }
    }
    else{
        dispatch(logOutAccount());
    }
}