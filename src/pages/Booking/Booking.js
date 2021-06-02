import React, {useState, useEffect} from 'react';
import useStyles from './styles.js';
import Input from '../../components/Input/Input'
import Customer from './Customer/Customer'
import Service from './Service/Service'
import Time from './Time/Time'
import Staff from './Staff/Staff'
import Aux from '../../hoc/Auxulliary';
import {Box, Typography} from '@material-ui/core';
import {postBook, editBook} from '../../actions/book';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
//The component that allows admin to create new booking 

const Booking = (props) => {
    const classes = useStyles();
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
    const [formIsValid, setFormIsValid] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        let formIsValid = true;
        for(let el in bookInfo){
            formIsValid = bookInfo[el] && formIsValid;
            setFormIsValid(formIsValid);
        }
    },[bookInfo])
    useEffect(()=>{
        if(props.chosenBook){
            setBookInfo(props.chosenBook);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const submitHandler=(e)=>{
        e.preventDefault();
        let endTime = null;
        endTime = new Date(bookInfo.start);
        endTime.setMinutes(endTime.getMinutes() + parseInt(bookInfo.duration));
        endTime = endTime.toString()
        let formData = {};
        for(let i in bookInfo){
            formData[i] = {value:bookInfo[i]};
        }
        formData["end"] = {value:endTime};
        formData['status']={value:'Coming'};
        if(props.currentId){
            dispatch(editBook(props.currentId,formData,'book',props.notification,props.setShowForm))
        }else{
            // console.log(formData);
            dispatch(postBook(formData,'book',props.notification,props.setShowForm))
        }
    }
    const cancelHandler= (e)=>{
        e.preventDefault();
        props.setShowForm(false);
    }
    let display = (
        <Box  className={classes.root}>
            <form className={classes.Form} >
                <Box textAlign="center">
                    <Typography variant="h4">Tạo lịch hẹn</Typography>
                </Box>
                <Customer bookInfo={bookInfo} setInfo = {setBookInfo} />
                <hr/>
                <Service bookInfo={bookInfo} setInfo = {setBookInfo}/>
                <hr/>
                <Time bookInfo={bookInfo} setInfo={setBookInfo}/>
                <hr/>
                <Staff bookInfo={bookInfo} setInfo={setBookInfo}/>
                <Input disabled = {!formIsValid} clicked = {(e)=>submitHandler(e)} elementType="button">
                    {props.currentId ? 'Edit Booking': 'Add Booking'}
                </Input>
                <Input clicked = {(e)=>cancelHandler(e)} elementType="button">Cancel Booking</Input>
            </form>
        </Box>
    );

    return (
        <Aux>
            {display}
        </Aux>
    )
}

Booking.propTypes={
    currentId: PropTypes.string,
    chosenBook: PropTypes.object,
    setShowForm: PropTypes.func,
    notification: PropTypes.object,
}
export default Booking
