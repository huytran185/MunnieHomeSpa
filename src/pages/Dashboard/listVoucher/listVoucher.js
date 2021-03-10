import React, {useState, useEffect} from 'react'
import classes from './listVoucher.module.css';
import firebase from '../../../components/Firebase/firebaseConfig';

const ListVoucher = ()=>{
    const [vouchers, setVouchers]= useState(null);
    useEffect(()=>{
        firebase.database().ref("voucher").on("value", snapshot=>{
            let voucherList = [];
            snapshot.forEach(snap=>{
                voucherList.push(snap.val());
            });
            setVouchers(voucherList);
        })
    },[])
    return(
        <div className={classes.ListVoucher}>

        </div>
    )
}

export default ListVoucher;