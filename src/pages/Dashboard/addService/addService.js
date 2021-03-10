import React, {useState} from 'react'
import classes from './addService.module.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
// import axios from '../../axios-order';
import firebase, { storage } from '../../../components/Firebase/firebaseConfig';
const AddService = ()=>{
    const [form, setForm] = useState({
        name: {
            elementType: 'text',
            elementConfig: {
                type:'text',
                name: 'name',
                placeholder: 'New Service Name...'
            },
            value: ''
        },
        english:{
            elementType: 'text',
            elementConfig: {
                type:'text',
                name: 'english',
                placeholder: 'Service English Name...'
            },
            value: ''
        },
        type:{
            elementType: 'select',
            elementConfig:{
                options:[
                    {value:'', display:'Please select Service Type'},
                    {value:'facial', display:'Facial Skincare'},
                    {value: 'shampoo', display:'Shampoo and Eyelash Extensions'}
                ]
            },
            value: ''
        },
        des:{
            elementType: 'textarea',
            elementConfig:{
                type:'textarea',
                name: 'des',
                placeholder: 'Service Description...',
                rows: 4,
                cols: 50,
            },
            value: ''
        },
        time:{
            elementType: 'text',
            elementConfig: {
                type:'text',
                name: 'time',
                placeholder: 'Service Duration ...'
            },
            value: ''
        },
        price:{
            elementType: 'text',
            elementConfig: {
                type:'text',
                name: 'price',
                placeholder: 'Service Price ...'
            },
            value: ''
        },
        rank:{
            elementType: 'text',
            elementConfig: {
                type:'text',
                name: 'rank',
                placeholder: 'Service Rank ...'
            },
            value: ''
        },
        image:{
            elementType: 'file',
            elementConfig:{
                type:'file',
                name: 'image',
                accept:'.jpg, .jpeg, .png, .gif'
            },
            value:''
        },
    })
    const [loading, setLoading] = useState(false);
    const formArray =[];
    for(let key in form){
        formArray.push({
            id:key,
            config: form[key],
        });
    }
    const inputChangedHandler = (event, id)=>{
        const updatedForm = {...form};
        const updatedElement = {...updatedForm[id]};
        if(id === "image"){
            updatedElement.value = event.target.files[0];
        }
        else{
            updatedElement.value = event.target.value;
        }
        updatedForm[id]= updatedElement;
        setForm(updatedForm);
    }

    const submitHandler = async (event)=>{
        event.preventDefault();
        setLoading(true);
        let promise = new Promise(function(resolve, reject){
            let image = {};
            image = form['image'].value;
            firebase.storage().ref(`${image.name}`).put(image).on(
                "state_changed",
                snapshot=>{},
                error=>{
                    setLoading(false);
                    console.log(error);
                },()=>{
                    storage.ref().child(image.name).getDownloadURL()
                        .then(url=>{
                            setLoading(false);
                            resolve(url);
                        })
                }
            )
        })
        let imageUrl = await promise;
        const formData = {};
        for(let element in form){
            if(element === "image"){
                formData[element] = imageUrl;
            }
            else{
                formData[element] = form[element].value;
            }
        }
        uploadHandler(formData);
    }
    const uploadHandler = (formData)=>{
        // axios.post('https://munnie-default-rtdb.firebaseio.com/service.json', formData)
        //     .then(response =>{
        //         setLoading(false);
        //         console.log("Success");
        //     })
        //     .catch(error =>{
        //         setLoading(false);
        //         console.log(error);
        //     })
        let r = Math.random().toString(36).substring(7);
        firebase.database().ref('service/'+ r)
            .set(formData,(error)=>{
                if(error){
                    setLoading(false);
                    console.log("Fail");
                }else{
                    setLoading(false);
                    console.log("Success");
                }
            });
    }
    let displayForm = (
    <form onSubmit={submitHandler}>
        {formArray.map(element=>(
            <Input
                key={element.id}
                elementType={element.config.elementType}
                elementConfig={element.config.elementConfig}
                value={element.config.value}
                changed={(event)=>inputChangedHandler(event,element.id)}
            />
        ))}
        <Input elementType="button">Add New Service</Input>
    </form>);
    if(loading){
        displayForm = <Spinner />;
    }
    return(
        <div className = {classes.AddService}>
            {displayForm}
        </div>
    )
}

export default AddService;