import {getData,deleteData, postData, editData} from '../api/api';
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

//Getting Service from Firebase Server

export const getService = ()=> async dispatch=>{
    dispatch({type: GET_SERVICE_REQUEST});
    try{
        const list = await getData('service');
        dispatch({
            type: GET_SERVICE_SUCCESS,
            payload:list
        })
    }catch (error){
        dispatch({
            type: GET_SERVICE_FAIL,
            payload: error.message
        })
    }
}

//Creating new Service

export const postService =(form, type, notification,cancel)=> async dispatch=>{
    dispatch({type:POST_SERVICE_REQUEST,});
    const res = await postData(form,type);
    if(res[0] === 'Success'){
        notification.current.createNotification('success', 'Thêm thông tin thành công')
        cancel('list');
        dispatch({
            type:POST_SERVICE_SUCCESS,
            id: res[1],
            payload:res[2]
        })
    }
    else{
        notification.current.createNotification('error', 'Không thể thêm thông tin')
        dispatch({
            type:POST_SERVICE_FAIL,
            payload: res
        });
        
    }
}

//Edit Service Information

export const editService = (id, form,type,notification,cancel)=>async dispatch=>{
    dispatch({type:EDIT_SERVICE_REQUEST,});
    const res = await editData(id,form,type);
    if(res[0] === 'Success'){
        notification.current.createNotification('success', 'Thay đổi thông tin thành công')
        cancel('list');
        dispatch({
            type:EDIT_SERVICE_SUCCESS,
            id: id,
            payload:res[1]
        });
    }
    else{
        notification.current.createNotification('error', 'Không thể thay đổi thông tin')
        dispatch({
            type:EDIT_SERVICE_FAIL,
            payload: res,
        });
        
    }
}

//Delete Service

export const deleteService = (id,type,notificationRef)=>async dispatch=>{
    dispatch({type: DELETE_SERVICE_REQUEST})
    const res = await deleteData(id, type);
    if(res === 'Success'){
        notificationRef.current.createNotification('success', 'Xoá thông tin thành công')
        dispatch({
            type:DELETE_SERVICE_SUCCESS,
            payload:id
        });
    }else{
        notificationRef.current.createNotification('error', 'Không thể xoá thông tin')
        dispatch({
            type:DELETE_SERVICE_FAIL,
            payload: res
        });
    }
}
