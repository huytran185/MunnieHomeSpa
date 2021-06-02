import {getData,deleteData, postData, editData} from '../api/api';
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

//Getting Staff information from Firebase Server

export const getStaff = ()=> async dispatch=>{
    dispatch({type: GET_STAFF_REQUEST});
    try{
        const list = await getData('staff');
        dispatch({
            type: GET_STAFF_SUCCESS,
            payload:list
        })
    }catch (error){
        dispatch({
            type: GET_STAFF_FAIL,
            payload: error.message
        })
    }
}

//Creating new Staff

export const postStaff =(form, type, notification,cancel)=> async dispatch=>{
    dispatch({type:POST_STAFF_REQUEST});
    const res = await postData(form,type);
    if(res[0] === 'Success'){
        notification.current.createNotification('success', 'Thêm thông tin thành công')
        cancel('list');
        dispatch({
            type:POST_STAFF_SUCCESS,
            id: res[1],
            payload:res[2]
        });
    }
    else{
        notification.current.createNotification('error', 'Không thể thêm thông tin')
        dispatch({
            type:POST_STAFF_FAIL,
            payload: res
        });
        
    }
}

//Edit Staff Information

export const editStaff = (id, form,type,notification,cancel)=>async dispatch=>{
    dispatch({type:EDIT_STAFF_REQUEST});
    const res = await editData(id,form,type);
    if(res[0] === 'Success'){
        notification.current.createNotification('success', 'Thay đổi thông tin thành công')
        cancel('list');
        dispatch({
            type:EDIT_STAFF_SUCCESS,
            id: id,
            payload:res[1]
        });
    }
    else{
        notification.current.createNotification('error', 'Không thể thay đổi thông tin')
        dispatch({
            type:EDIT_STAFF_FAIL,
            payload: res
        });
        
    }
}

//Delete Staff 

export const deleteStaff = (id,type,notificationRef)=>async dispatch=>{
    dispatch({type: DELETE_STAFF_REQUEST})
    const res = await deleteData(id, type);
    if(res === 'Success'){
        notificationRef.current.createNotification('success', 'Xoá thông tin thành công')
        dispatch({
            type:DELETE_STAFF_SUCCESS,
            payload:id
        });
    }else{
        notificationRef.current.createNotification('error', 'Không thể xoá thông tin')
        dispatch({
            type:DELETE_STAFF_FAIL,
            payload: res
        });
    }
}
