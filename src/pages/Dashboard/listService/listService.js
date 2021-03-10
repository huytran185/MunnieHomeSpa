import React, {useState, useEffect} from 'react'
import classes from './listService.module.css';
import firebase from '../../../components/Firebase/firebaseConfig';
const ListService = ()=>{
    const [services, setServices]= useState(null);
    useEffect(()=>{
        firebase.database().ref("service").on("value", snapshot=>{
            let serviceList = [];
            snapshot.forEach(snap=>{
                serviceList.push(snap.val());
            });
            setServices(serviceList);
        })
    },[])
    return(
        <div className={classes.ListService}>
            List Services
        </div>
    )
}

export default ListService;