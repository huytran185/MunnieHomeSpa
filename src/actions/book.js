import {postData, getData} from '../api/api'
import {GET_BOOK_REQUEST, 
    GET_BOOK_SUCCESS, 
    GET_BOOK_FAIL,
    POST_BOOK_REQUEST,
    POST_BOOK_SUCCESS,
    POST_BOOK_FAIL
} from '../constants/book';

export const getBook = ()=> async dispatch=>{
    dispatch({type: GET_BOOK_REQUEST,});
    try{
        const list = await getData('book');
        dispatch({
            type: GET_BOOK_SUCCESS,
            payload:list
        })
    }catch (error){
        dispatch({
            type: GET_BOOK_FAIL,
            payload: error.message
        })
    }
}

export const postBook =(form, type, notification,cancel)=> async dispatch=>{
    dispatch({type:POST_BOOK_REQUEST});
    const res = await postData(form,type);
    if(res[0] === 'Success'){
        cancel(false);
        notification.current.createNotification('success', 'Thêm booking thành công')
        dispatch({
            type:POST_BOOK_SUCCESS,
            id: res[1],
            payload:res[2]
        });
    }
    else{
        notification.current.createNotification('error', 'Không thể thêm booking')
        dispatch({
            type:POST_BOOK_FAIL,
            payload: res
        });
        
    }
}