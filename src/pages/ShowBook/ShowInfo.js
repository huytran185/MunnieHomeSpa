import { Box, Typography,Divider, FormControl, InputLabel, Select } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {editBook, deleteBook} from '../../actions/book';
const useStyles = makeStyles({
    Info:{
        width:'35%',
        // overflow:'hidden',
        display:'block',
        float:'left',
        backgroundColor: '#ebcdb7',
        borderRadius: 20,
        margin: '50px 0 0 10px',
        position: 'sticky',
        top:20,
    },
    Title:{
        textAlign: 'center',
        padding: '20px 30px',
        fontWeight: 600,
        fontSize: 20,
    },
    Content:{
        padding: '20px 20px 0 20px',
        '&:last-child':{
            paddingBottom: 20,
        }
    },
    Icon:{
        float:'right',
        cursor: 'pointer',
    },
    formControl: {
        minWidth: '80%',
        margin: '20px'
    },
});

const ShowInfo = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let start = '';
    let end = '';
    if(props.id !== ''){
        start = new Date(props.info['start']);
        start = start.toLocaleString();
        end = new Date(props.info['end'])
        end = end.toLocaleString();
    }
    const editInfo = ()=>{
        props.setShowForm(true)
        props.setEdit(true);
    }
    const deleteInfo=()=>{
        props.setChosenBook({
        customerId: '',
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        serviceId:'',
        serviceName:'',
        duration:'',
        end:'',
        price:'',
        start: '',
        staffId: '',
        staffName:'',
    })
        dispatch(deleteBook(props.id,'book',props.notification))
    }
    const changeStatus = (e)=>{
        let formData = {};
        const infoConfig = {...props.info};
        infoConfig['status'] = e.target.value;
        props.setChosenBook(infoConfig);
        for(let i in props.info){
            formData[i] = {value:props.info[i]}
        }
        formData['status']= {value: e.target.value};
        dispatch(editBook(props.id,formData, 'book', props.notification))
    }
    return (
        <Box className={classes.Info}>
            <Typography className={classes.Title}>
                Booking Info
                <EditOutlinedIcon 
                className={classes.Icon}
                onClick={editInfo}/>
                <DeleteIcon
                className={classes.Icon}
                onClick={deleteInfo}
                />
            </Typography>
            <Divider/>
            <Typography className={classes.Content}><strong>Tên khách hàng: </strong>{props.info['customerName']}</Typography>
            <Typography className={classes.Content}><strong>Số điện thoại: </strong>{props.info['customerPhone']}</Typography>
            <Typography className={classes.Content}><strong>Tên dịch vụ: </strong>{props.info['serviceName']}</Typography>
            <Typography className={classes.Content}><strong>Thời gian: </strong>{props.info['duration']}</Typography>
            <Typography className={classes.Content}><strong>Thời gian bắt đầu: </strong>{start} </Typography>
            <Typography className={classes.Content}><strong>Thời gian kết thúc: </strong>{end}</Typography>
            <Typography className={classes.Content}><strong>Nhân viên: </strong>{props.info['staffName']}</Typography>
            <Typography className={classes.Content}><strong>Status: </strong></Typography>
            <FormControl variant="outlined" className={classes.formControl}>
                <Select
                native
                value={props.info['status']}
                onChange={(e)=>changeStatus(e)}
                >
                    <option aria-label="None" value="" />
                    <option value='Coming'>Coming</option>
                    <option value='Completed'>Completed</option>
                </Select>
            </FormControl>
        </Box>
    )
}

export default ShowInfo
