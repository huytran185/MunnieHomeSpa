import React, {useState, useEffect,useRef} from 'react'
import AddForm from './addForm';
import Header from '../../components/AdminUI/Header'
import {voucherConfig} from '../../Config/dataConfig';
import Spinner from '../../components/UI/Spinner/Spinner';
import DisplayTable from './displayTable';
import {voucherTable} from '../../Config/tableConfig';
import Notifications from '../../components/UI/Notifications/Notifications'
import {Typography, Box} from '@material-ui/core'
import Button from '../../components/AdminUI/Button'
import useStyles from './styles.js'
import { useDispatch, useSelector } from 'react-redux';
import {getVoucher} from '../../actions/voucher';

//Voucher page which allows admin to manage Voucher Information

const Voucher = ()=>{
    const classes = useStyles();
    const [config,setConfig] = useState(voucherConfig);
    const [status, setStatus] = useState("list");
    const [editItem, setEditItem]= useState(null);
    const [currentID, setCurrentId] = useState(null)
    const notificationRef = useRef();
    const voucherList = useSelector(state=>state.voucher.list);
    const voucherLoading = useSelector(state=>state.voucher.loading);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(Object.keys(voucherList).length === 0){
            dispatch(getVoucher())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(()=>{
        setConfig(voucherConfig);
    }, [status])

    const editHandler =(id)=>{
        let newConfig = JSON.parse(JSON.stringify(config));
        for(let key in newConfig){
            newConfig[key]["value"] = voucherList[id][key];
        }
        setEditItem(newConfig);
        setCurrentId(id)
        setStatus("edit");
    }

    let page = <Spinner/>;
    if(status === "list" && !voucherLoading){
        page = <DisplayTable 
        data={voucherList} 
        config={voucherTable} 
        type="voucher"
        setId = {editHandler}
        notificationRef={notificationRef}/>
    }
    if(status === "edit"){
        page = <AddForm formType = "voucher"
        config={editItem} 
        setCon={setEditItem}
        currentID = {currentID}
        cancel={setStatus}
        title="Add New Voucher"
        notificationRef={notificationRef}/>
    }
    if(status === "add"){
        page = <AddForm formType = "voucher" 
        config={config} 
        setCon={setConfig}
        cancel={setStatus}
        title="Add New Voucher"
        notificationRef={notificationRef}/>
    }
    return(
        <div className={classes.Page}>
            <Header/>
            <Box className={classes.Display}>
                <Box textAlign="center">
                    <Typography variant="h3">
                        Voucher
                    </Typography>
                </Box>
                <Button setStatus={setStatus} 
                status={status}
                name='Voucher'/>
                {page}
                <Notifications ref={notificationRef}/>
            </Box>
        </div>
    )
}
export default Voucher