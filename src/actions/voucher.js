import {getData,deleteData, postData, editData} from '../api/api';
import {GET_VOUCHER_REQUEST, 
    GET_VOUCHER_SUCCESS, 
    GET_VOUCHER_FAIL,
    POST_VOUCHER_REQUEST,
    POST_VOUCHER_SUCCESS,
    POST_VOUCHER_FAIL,
    EDIT_VOUCHER_REQUEST,
    EDIT_VOUCHER_SUCCESS,
    EDIT_VOUCHER_FAIL,
    DELETE_VOUCHER_REQUEST,
    DELETE_VOUCHER_SUCCESS,
    DELETE_VOUCHER_FAIL} from '../constants/voucher';

//Getting Voucher Information from Firebase Server

export const getVoucher = ()=> async dispatch=>{
    dispatch({type: GET_VOUCHER_REQUEST});
    try{
        const list = await getData('voucher');
        dispatch({
            type: GET_VOUCHER_SUCCESS,
            payload:list
        })
    }catch (error){
        dispatch({
            type: GET_VOUCHER_FAIL,
            error: error.message
        })
    }
}

//Creating new Voucher

export const postVoucher =(form, type, notification,cancel)=> async dispatch=>{
    dispatch({type:POST_VOUCHER_REQUEST});
    const res = await postData(form,type);
    if(res[0] === 'Success'){
        notification.current.createNotification('success', 'Thêm thông tin thành công')
        cancel('list');
        dispatch({
            type:POST_VOUCHER_SUCCESS,
            id: res[1],
            payload:res[2]
        });
    }
    else{
        notification.current.createNotification('error', 'Không thể thêm thông tin')
        dispatch({
            type:POST_VOUCHER_FAIL,
            payload: res
        });
        
    }
}

//Edit Voucher Information

export const editVoucher = (id, form,type,notification,cancel)=>async dispatch=>{
    dispatch({type:EDIT_VOUCHER_REQUEST});
    const res = await editData(id,form,type);
    if(res[0] === 'Success'){
        notification.current.createNotification('success', 'Thay đổi thông tin thành công')
        cancel('list');
        dispatch({
            type:EDIT_VOUCHER_SUCCESS,
            id: id,
            payload:res[1]
        });
    }
    else{
        notification.current.createNotification('error', 'Không thể thay đổi thông tin')
        dispatch({
            type:EDIT_VOUCHER_FAIL,
            payload: res
        });
        
    }
}

//Delete Voucher

export const deleteVoucher = (id,type,notificationRef)=>async dispatch=>{
    dispatch({type: DELETE_VOUCHER_REQUEST})
    const res = await deleteData(id, type);
    if(res === 'Success'){
        notificationRef.current.createNotification('success', 'Xoá thông tin thành công')
        dispatch({
            type:DELETE_VOUCHER_SUCCESS,
            payload:id
        });
    }else{
        notificationRef.current.createNotification('error', 'Không thể xoá thông tin')
        dispatch({
            type:DELETE_VOUCHER_FAIL,
            payload: res
        });
    }
}
