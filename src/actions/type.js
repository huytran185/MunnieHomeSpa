import {getData,deleteData, postData, editData} from '../api/api';
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

// Select Type 
export const selectType = (data)=>({
    type: SELECT_TYPE,
    payload:data
})
//Get Type data from firebase
export const getType = ()=> async dispatch=>{
    dispatch({type: GET_TYPE_REQUEST});
    try{
        const list = await getData('type');
        dispatch({
            type: GET_TYPE_SUCCESS,
            payload:list
        })
    }catch(error){
        dispatch({
            type: GET_TYPE_FAIL,
            error: error.message
        })
    }
}

//Creating new Type

export const postType =(form, type, notification,cancel)=> async dispatch=>{
    dispatch({type:POST_TYPE_REQUEST});
    const res = await postData(form,type);
    if(res[0] === 'Success'){
        notification.current.createNotification('success', 'Thêm thông tin thành công')
        cancel('list');
        dispatch({
            type:POST_TYPE_SUCCESS,
            id: res[1],
            payload:res[2]
        });
    }
    else{
        notification.current.createNotification('error', 'Không thể thêm thông tin')
        dispatch({
            type:POST_TYPE_FAIL,
            payload: res
        });
        
    }
}

//Edit Type Information

export const editType = (id, form,type,notification,cancel)=>async dispatch=>{
    dispatch({type:EDIT_TYPE_REQUEST});
    const res = await editData(id,form,type);
    if(res[0] === 'Success'){
        notification.current.createNotification('success', 'Thay đổi thông tin thành công')
        cancel('list');
        dispatch({
            type:EDIT_TYPE_SUCCESS,
            id: id,
            payload:res[1]
        });
    }
    else{
        notification.current.createNotification('error', 'Không thể thay đổi thông tin')
        dispatch({
            type:EDIT_TYPE_FAIL,
            payload: res
        });
        
    }
}

//Delete Type

export const deleteType = (id,type,notificationRef)=>async dispatch=>{
    dispatch({type: DELETE_TYPE_REQUEST})
    const res = await deleteData(id, type);
    if(res === 'Success'){
        notificationRef.current.createNotification('success', 'Xoá thông tin thành công')
        dispatch({
            type:DELETE_TYPE_SUCCESS,
            payload:id
        });
    }else{
        notificationRef.current.createNotification('error', 'Không thể xoá thông tin')
        dispatch({
            type:DELETE_TYPE_FAIL,
            payload: res
        });
    }
}
