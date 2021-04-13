import React, {useState,useRef} from 'react'
import Booking from '../Booking/Booking';
import Header from '../../components/AHeader/Header'
import Aux from '../../hoc/Auxulliary';
import {Button, Box} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from './styles.js';
import ShowBook from '../ShowBook/ShowBook';
import Notifications from '../../components/UI/Notifications/Notifications'
const Dashboard = () => {
    const classes = useStyles();
    const [showForm, setShowForm] = useState(false);
    const notificationRef = useRef();
    return (
        <Aux>
            <Header/>
            <Box className={classes.Display} >
                <Button variant="outlined" 
                startIcon={<AddCircleIcon/>}
                className={classes.Button}
                onClick={()=>setShowForm(true)}>Tạo lịch hẹn</Button>
                {!showForm && <ShowBook/>}
                {showForm && <Booking setShowForm={setShowForm} notification={notificationRef}/>}
            </Box>
            <Notifications ref={notificationRef}/>
        </Aux>

    )
}

export default Dashboard
