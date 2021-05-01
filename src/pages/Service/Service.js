import React, { useEffect} from 'react'
import classes from './Service.module.css';
import {Helmet} from 'react-helmet';
import Layout from '../../components/UI/Layout/Layout';
import Aux from '../../hoc/Auxulliary';
import ServiceItem from './ServiceItem';
import Type from './Type';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux'
import {getService} from '../../actions/service';
import {getType, selectType} from '../../actions/type';

//Service Page

const Service =()=>{
    const serviceList = useSelector(state=>state.service.list);
    const serviceLoading = useSelector(state=>state.service.loading);
    const serviceError = useSelector(state=>state.service.error);
    const typeList = useSelector(state=>state.type.list);
    const typeLoading = useSelector(state=>state.type.loading);
    const typeError = useSelector(state=>state.type.error);
    const dispatch = useDispatch();
    //get data from firebase using firebase npm
    useEffect(() => {
        if(Object.keys(serviceList).length === 0){
            dispatch(getService())
        }
        if(Object.keys(typeList).length === 0){
            dispatch(getType())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //choose Type and display Service
    const chooseTypeHandler = (index)=>{
        let newTypes = {...typeList};
        Object.values(newTypes).map(type=>(type.under = false));
        newTypes[index].under = true;
        dispatch(selectType(newTypes));
    }
    //display Spinner and choose type and services
    let servicePage = <Spinner/>
    if(!serviceLoading && !typeLoading){
        let chosenType = null;
        Object.values(typeList).find(type=>{
            if(type.under === true){
                chosenType = type.id;
                return chosenType;
            }
            return null;
        })
        let typeDisplay = [];
        for(let key in typeList){
            typeDisplay.push(
                <Type
                id={typeList[key].data}
                key={key}
                name={typeList[key].name}
                under={typeList[key].under}
                clicked= {()=>chooseTypeHandler(key)}
                />
            )
        }
        let serviceDisplay = [];
        for(let key in serviceList){
            if(serviceList[key]['type'] === chosenType){
                serviceDisplay.push(
                    <ServiceItem
                    key = {key}
                    service = {serviceList[key]['name']}
                    image = {serviceList[key]['image']}
                    des = {serviceList[key]['des']}
                    english = {serviceList[key]['english']}
                    time = {serviceList[key]['time']}
                    price = {serviceList[key]['price']}
                    />
                )
            }
        }
        servicePage = (
            <div>
                <div className={classes.TypeList}>
                    {typeDisplay}
                </div>
                <div className = {classes.ServiceList}>
                    {serviceDisplay}
                </div>
            </div>
        )
    }
   
    return(
        <Aux>
            <Helmet>
                <title>Munnie Homéspa | Service Page</title>
            </Helmet>
            <Layout>
                <div className = {classes.Page}>
                    <div className = {classes.Header}>
                        <div className={classes.Title}>Service</div>
                    </div>
                    <div className={classes.Content}>
                        {servicePage}
                    </div>
                </div>
            </Layout>
        </Aux>
    )
}
export default Service;