import React, {useState, useEffect} from 'react'
import classes from './Service.module.css';
import {Helmet} from 'react-helmet';
import Layout from '../../components/UI/Layout/Layout';
import Aux from '../../hoc/Auxulliary';
import ServiceItem from './ServiceItem/ServiceItem';
import Type from './Type/Type';
import Spinner from '../../components/UI/Spinner/Spinner';
import {getType, getService} from '../getData';
const Service =()=>{
    const [types, setType] = useState(null);
    const [services, setServices] = useState(null);

    
    //get data from firebase using firebase npm
    useEffect(() => {
        getType(setType);
        getService(setServices)
    }, [])
    //choose Type and display Service
    const chooseTypeHandler = (e, index, id)=>{
        let newTypes = [...types];
        newTypes.map(type=>(type.under = false));
        newTypes[index].under = true;
        setType([...newTypes]);
    }

    //display Spinner and choose type and services
    let servicePage = <Spinner/>
    if(services && types){
        let chosenType = null;
        types.find(type=>{
            if(type.under === true){
                chosenType = type.id;
                return chosenType;
            }
            return null;
        })
        servicePage = (
            <div>
                <div className={classes.TypeList}>
                    {types.map((type,index)=>{
                        return <Type
                        id={type.id}
                        key={type.id}
                        name={type.name}
                        under={type.under}
                        clicked= {(e)=>chooseTypeHandler(e,index, type.id)}
                        />
                    })}
                </div>
                <div className = {classes.ServiceList}>
                    {services.map((service, index)=>{
                        let data = null;
                        if(service.type === chosenType){
                            data = <ServiceItem 
                        key = {index}
                        service ={service.name}
                        image = {service.image}
                        des = {service.des}
                        english = {service.english}
                        time = {service.time}
                        price = {service.price}
                        />
                        }
                        return data;
                    })}
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