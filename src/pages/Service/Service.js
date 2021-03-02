import React, {useState, useEffect} from 'react'
import classes from './Service.module.css';
import {Helmet} from 'react-helmet';
import Layout from '../../components/UI/Layout/Layout';
import Aux from '../../hoc/Auxulliary';
import ServiceItem from './ServiceItem/ServiceItem'
import Page from '../../components/PageContent/PageContent';
import Type from './Type/Type';
// import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import firebase from '../../components/Firebase/firebaseConfig';

const Service =()=>{
    const [types, setType] = useState(null);
    const [services, setServices] = useState(null);
    //get data from firebase using axios
    // useEffect(()=>{
    //     axios.get('https://munnie-default-rtdb.firebaseio.com/type.json')
    //         .then(response=>{
    //             setType(response.data)
    //         });
    //     axios.get('https://munnie-default-rtdb.firebaseio.com/service.json')
    //         .then(response=>{
    //             setServices(response.data)
    //         });
    // },[])
    //get data from firebase using firebase npm
    useEffect(() => {
        firebase.database().ref("type").on("value",snapshot=>{
            let typeList = [];
            snapshot.forEach(snap=>{
                typeList.push(snap.val());
            });
            setType(typeList);
        });
        firebase.database().ref("service").on("value", snapshot=>{
            let serviceList = [];
            snapshot.forEach(snap=>{
                serviceList.push(snap.val());
            });
            setServices(serviceList);
        })
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
                    {services.map(service=>{
                        let data = null;
                        if(service.type === chosenType){
                            data = <ServiceItem 
                        key = {service.id}
                        service ={service.name}
                        image = {service.image}
                        des = {service.des}
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
            <Layout className={classes.Service}>
                <Page title="Service">
                    {servicePage}
                </Page>
            </Layout>
        </Aux>
    )
}
export default Service;