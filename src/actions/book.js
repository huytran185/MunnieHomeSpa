import {postData, getData, editData, deleteData} from '../api/api'
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


//Getting Booking information from Firebase Server
export const getBook = ()=> async dispatch=>{
    dispatch({type: GET_BOOK_REQUEST});
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

//Creating new Booking for the customer

export const postBook =(form, type, notification,cancel)=> async dispatch=>{
    dispatch({type:POST_BOOK_REQUEST});
    const res = await postData(form,type);
    if(res[0] === 'Success'){
        cancel(false);
        // eslint-disable-next-line no-undef
        Email.send({
        Host: "smtp.gmail.com",
        Username: 'auto59817@gmail.com',
        Password: 'vadshxpvcwgjarvv',
        To: res[2]['customerEmail'],
        From: 'auto59817@gmail.com',
        Subject: `Your Booking Receipt`,
        Body: `
            <h2>Thông tin booking</h2> <br/>
            <b>Tên khách hàng:</b> ${res[2]['customerName']} <br/>
            <b>Dịch vụ:</b> ${res[2]['serviceName']} <br/>
            <b>Thời gian:</b> ${res[2]['duration']} <br/>
            <b>Thời gian bắt đầu:</b> ${res[2]['start']} <br/>
            <b>Nhân viên phục vụ:</b> ${res[2]['staffName']} <br/>
            <b>Tổng giá:</b> ${res[2]['price']}.000 VNĐ<br/>
            <h3>Cảm ơn đã sư dụng dịch vụ của Munnie HomeSpa</h3>
        `,
    }).then((message)=>notification.current.createNotification('success', 'Thông tin booking đã gữi đến email của bạn'))
        notification.current.createNotification('success', 'Thêm booking thành công')
        console.log(res[2]);
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

//Edit Booking information

export const editBook = (id, form,type, notification,cancel)=>async dispatch=>{
    dispatch({type:EDIT_BOOK_REQUEST});
    const res = await editData(id, form, type);
    if(res[0] === 'Success'){
        notification.current.createNotification('success', 'Thay đổi thông tin thành công')
        if(cancel){
            cancel(false);
        }
        dispatch({
            type:EDIT_BOOK_SUCCESS,
            id: id,
            payload:res[1]
        });
    }
    else{
        notification.current.createNotification('error', 'Không thể thay đổi thông tin')
        dispatch({
            type:EDIT_BOOK_FAIL,
            payload: res
        });
        
    }
}

//Removing Booking 

export const deleteBook = (id, type, notificationRef)=>async dispatch=>{
    dispatch({type: DELETE_BOOK_REQUEST})
    const res = await deleteData(id, type);
    if(res === 'Success'){
        notificationRef.current.createNotification('success', 'Xoá thông tin thành công')
        dispatch({
            type:DELETE_BOOK_SUCCESS,
            payload:id
        });
    }else{
         notificationRef.current.createNotification('error', 'Không thể xoá thông tin')
        dispatch({
            type:DELETE_BOOK_FAIL,
            payload: res
        });
    }
}