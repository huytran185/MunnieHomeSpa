import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 220,
  },
}));

const Time = (props) => {
    const classes = useStyles();
    // const [time,setTime] = useState();
    const selectTimeHandler = (time)=>{
      props.setInfo({
        customerId: props.bookInfo.customerId,
        customerName: props.bookInfo.customerName,
        customerPhone: props.bookInfo.customerPhone,
        customerEmail: props.bookInfo.customerEmail,
        serviceId: props.bookInfo.serviceId,
        serviceName: props.bookInfo.serviceName,
        duration: props.bookInfo.duration,
        price: props.bookInfo.price,
        start: time,
        staffId: props.bookInfo.staffId,
        staffName: props.bookInfo.staffName,
      })
    }
    //add 30 minutes
    // if(time){
    //     time.setMinutes( time.getMinutes() + 30 );
    // }
    // let year = time.getFullYear();
    // let month = time.getMonth()+1;
    // let dt = time.getDate();
    // let hour = time.getHours();
    // let minute = time.getMinutes();

    // if (dt < 10) {
    // dt = '0' + dt;
    // }
    // if (month < 10) {
    // month = '0' + month;
    // }

    // console.log(year+'-' + month + '-'+dt + ' '+hour + ':' + minute);
    return (
        <fieldset className={classes.container}>
            <legend>Thời gian</legend>
            <TextField
                id="datetime-local"
                type="datetime-local"
                className={classes.textField}
                onChange = {(e)=>selectTimeHandler(new Date(e.target.value).toString())}
                InputLabelProps={{
                shrink: false,
                }}
            />
        </fieldset>
    )
}

export default Time
