import firebase, { storage } from '../components/Firebase/firebaseConfig';

const checkValidity=(id,value,rules)=>{
    let isValid = true;
        if(id !== "image"){
            if(rules.required){
                isValid = value.trim() !== '' && isValid;
            }
            if(rules.format){
                let re = new RegExp(rules.format);
                isValid = re.test(value.trim()) && isValid;
            }
        }else{
            if(rules.required){
                isValid = value !== '' && isValid;
            }
        }
        return isValid;
}

export const inputChangedHandler=(form, setFormIsValid, setForm,event,id)=>{
    const updatedForm = {...form};
    const updatedElement = {...updatedForm[id]};
    if(id === "image"){
        updatedElement.value = event.target.files[0];
    }
    else{
        updatedElement.value = event.target.value;
    }
    updatedElement.valid = checkValidity(id,updatedElement.value,updatedElement.validation);
    updatedElement.touched = true;

    updatedForm[id]= updatedElement;

    let formIsValid = true;
    for(let element in updatedForm){
        formIsValid = updatedForm[element].valid && formIsValid;
    }
    setFormIsValid(formIsValid)
    setForm(updatedForm);
}

export const submitHandler = async (event, setLoading, form, type,currentID)=>{
        event.preventDefault();
        setLoading(true);
        let imageUrl = null;
        if(type === "service" || type === "voucher"){
            imageUrl = await new Promise(function(resolve, reject){
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
        }
        const formData = {};
        for(let element in form){
            if(element === "image"){
                formData[element] = imageUrl;
            }
            else{
                formData[element] = form[element].value;
            }
        }
        uploadHandler(formData, setLoading, type,currentID);
    }
const uploadHandler = (formData, setLoading, type, currentID)=>{
        // axios.post('https://munnie-default-rtdb.firebaseio.com/service.json', formData)
        //     .then(response =>{
        //         setLoading(false);
        //         console.log("Success");
        //     })
        //     .catch(error =>{
        //         setLoading(false);
        //         console.log(error);
        //     })
        // let r = Math.random().toString(36).substring(7);
        // firebase.database().ref(type+"/"+ r)
        //     .set(formData,(error)=>{
        //         if(error){
        //             setLoading(false);
        //             console.log("Fail");
        //         }else{
        //             setLoading(false);
        //             console.log("Success");
        //         }
        //     });
        if(currentID){
            firebase.database().ref().child(type + '/'+ currentID).set(
                formData,(error)=>{
                    if(error){
                    setLoading(false);
                    console.log("Fail");
                }else{
                    setLoading(false);
                    console.log("Success");
                }
                }
            )
        }else{
        firebase.database().ref().child(type).push(
            formData,(error)=>{
                if(error){
                    setLoading(false);
                    console.log("Fail");
                }else{
                    setLoading(false);
                    console.log("Success");
                }
            }
        )
        }
    }
export const deleteHandler=(id, type)=>{
    firebase.database().ref().child(type+'/'+id).remove(
        error =>{
            if(error){
                    // setLoading(false);
                    console.log("Fail");
            }else{
                    // setLoading(false);
                    console.log("Success");
            }
        }
    )
}