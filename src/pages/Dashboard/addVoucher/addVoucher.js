import React, {useState} from 'react'
import classes from './addVoucher.module.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import firebase, { storage } from '../../../components/Firebase/firebaseConfig';

const AddVoucher = ()=>{
    const [form, setForm] = useState({
        link:{
            elementType: 'text',
            elementConfig: {
                type:'text',
                name: 'link',
                placeholder: 'Link to Facebook...'
            },
            value: ''
        },
        image:{
            elementType: 'file',
            elementConfig:{
                type:'file',
                name: 'image',
                accept:'.jpg, .jpeg, .png'
            }
        },
    })
    const [loading, setLoading] = useState(false);
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
        firebase.database().ref('voucher/'+ r)
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
    const formArray =[];
    for(let key in form){
        formArray.push({
            id:key,
            config: form[key],
            
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
            <Input elementType="button">Add New Voucher</Input>
        </form>);
    if(loading){
        displayForm = <Spinner/>;
    }
    return(
        <div className={classes.AddVoucher}>
           {displayForm}
        </div>
    )
}

export default AddVoucher;