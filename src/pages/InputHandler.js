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