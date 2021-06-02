import {getData,deleteData, postData, editData} from '../api/api';
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

//Getting Customer information from Firebase Server

export const getCustomer = ()=> async dispatch=>{
    dispatch({type: GET_CUSTOMER_REQUEST});
    try{
        const list = await getData('customer');
        dispatch({
            type: GET_CUSTOMER_SUCCESS,
            payload:list
        })
    }catch (error){
        dispatch({
            type: GET_CUSTOMER_FAIL,
            payload: error.message
        })
    }
}

//Creating new Customer

export const postCustomer =(form, type, notification,cancel)=> async dispatch=>{
    dispatch({type:POST_CUSTOMER_REQUEST});
    const res = await postData(form,type);
    if(res[0] === 'Success'){
        notification.current.createNotification('success', 'Thêm thông tin thành công')
        cancel('list');
        dispatch({
            type:POST_CUSTOMER_SUCCESS,
            id: res[1],
            payload:res[2]
        });
    }
    else{
        notification.current.createNotification('error', 'Không thể thêm thông tin')
        dispatch({
            type:POST_CUSTOMER_FAIL,
            payload: res
        });
        
    }
}

//Edit Customer Information

export const editCustomer = (id, form,type,notification,cancel)=>async dispatch=>{
    dispatch({type:EDIT_CUSTOMER_REQUEST});
    const res = await editData(id,form,type);
    if(res[0] === 'Success'){
        notification.current.createNotification('success', 'Thay đổi thông tin thành công')
        cancel('list');
        dispatch({
            type:EDIT_CUSTOMER_SUCCESS,
            id: id,
            payload:res[1]
        });
    }
    else{
        notification.current.createNotification('error', 'Không thể thay đổi thông tin')
        dispatch({
            type:EDIT_CUSTOMER_FAIL,
            payload: res
        });
        
    }
}

//Delete Customer 

export const deleteCustomer = (id,type,notificationRef)=>async dispatch=>{
    dispatch({type: DELETE_CUSTOMER_REQUEST})
    const res = await deleteData(id, type);
    if(res === 'Success'){
        notificationRef.current.createNotification('success', 'Xoá thông tin thành công')
        dispatch({
            type:DELETE_CUSTOMER_SUCCESS,
            payload:id
        });
    }else{
        notificationRef.current.createNotification('error', 'Không thể xoá thông tin')
        dispatch({
            type:DELETE_CUSTOMER_FAIL,
            payload: res
        });
    }
}
