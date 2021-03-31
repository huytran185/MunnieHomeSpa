import React, {useState, useRef} from 'react';
import classes from './Book.module.css';
import Input from '../../../components/UI/Input/Input'
import Customer from './Customer/Customer'
import Service from './Service/Service'
import Time from './Time/Time'
import Staff from './Staff/Staff'
import firebase from '../../../components/Firebase/firebaseConfig';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Aux from '../../../hoc/Auxulliary';
import Notifications from '../../../components/UI/Notifications/Notifications'

const Booking = (props) => {
    const [bookInfo, setBookInfo] = useState({
        customerId: '',
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        serviceId:'',
        serviceName:'',
        duration:'',
        price:'',
        start: '',
        staffId: '',
        staffName:'',
    })
    const [loading, setLoading]= useState(false);
    const notificationRef = useRef();
    const submitHandler=(e)=>{
        setLoading(true);
        let endTime = null;
        e.preventDefault();
        endTime = new Date(bookInfo.start);
        endTime.setMinutes(endTime.getMinutes() + parseInt(bookInfo.duration));
        endTime = endTime.toString()
        let formData = {};
        let key = ["customerId", "serviceId","price", "start", "staffId"];
        for(let i in key){
            formData[key[i]] = bookInfo[key[i]];
        }
        formData["end"] = endTime;
        console.log(formData)
        firebase.database().ref().child("book").push(
            formData,(error)=>{
                if(error){
                    console.log("Fail");
                    setLoading(false);
                    notificationRef.current.createNotification('error','Không thể tạo booking')
                }else{
                    console.log("Success");
                    setLoading(false)
                    notificationRef.current.createNotification('success','Tạo booking thành công')
                }
            }
        )
    }
    const cancelHandler= (e)=>{
        e.preventDefault();
        props.setShowForm(false);
    }
    let display = (
        <div  className={classes.Book}>
            <form className={classes.Form} >
                <Customer bookInfo={bookInfo} setInfo = {setBookInfo} />
                <hr/>
                <Service bookInfo={bookInfo} setInfo = {setBookInfo}/>
                <hr/>
                <Time bookInfo={bookInfo} setInfo={setBookInfo}/>
                <hr/>
                <Staff bookInfo={bookInfo} setInfo={setBookInfo}/>
                <Input clicked = {(e)=>submitHandler(e)} elementType="button">Add Booking</Input>
                <Input clicked = {(e)=>cancelHandler(e)} elementType="button">Cancel Booking</Input>
            </form>
        </div>
    );
    if(loading){
        display = <Spinner/>
    }
    return (
        <Aux>
            {display}
            <Notifications ref={notificationRef}/>
        </Aux>
    )
}

export default Booking
