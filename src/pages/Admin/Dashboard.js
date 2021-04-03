import React, {useState, useEffect} from 'react'
import Booking from '../Booking/Booking';
import Header from '../../components/AHeader/Header'
import Aux from '../../hoc/Auxulliary';
import {Button, Box} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from './styles.js';
const Dashboard = () => {
    const classes = useStyles();
    const [showForm, setShowForm] = useState(false);
    return (
        <Aux>
            <Header/>
            <Box className={classes.Display} >
                <Button variant="outlined" 
                startIcon={<AddCircleIcon/>}
                className={classes.Button}
                onClick={()=>setShowForm(true)}>Tạo lịch hẹn</Button>
                {showForm && <Booking setShowForm={setShowForm}/>}
            </Box>
        </Aux>

    )
}

export default Dashboard
