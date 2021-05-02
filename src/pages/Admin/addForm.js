import React, {useState} from 'react'
import Input from '../../components/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import {inputChangedHandler} from '../InputHandler';
import Notifications from '../../components/UI/Notifications/Notifications'
import {Box} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {postService, editService} from '../../actions/service';
import {postType, editType} from '../../actions/type';
import {postVoucher, editVoucher} from '../../actions/voucher';
import {postCustomer, editCustomer} from '../../actions/customer';
import {postStaff, editStaff} from '../../actions/staff';
import PropTypes from 'prop-types';
//Form that allows admin to adding new information or editing the information

const AddForm = (props)=>{
    
    const [formIsValid, setFormIsValid] = useState(false)
    const [loading] = useState(false);
    const formArray =[];
    for(let key in props.config){
        formArray.push({
            id:key,
            config: props.config[key],
            
        });
    }
    const dispatch = useDispatch();
    const submitHandler= (event, form, type,currentID, notification, cancel)=>{
        event.preventDefault();
        switch(type){
            case 'service':
                if(currentID){
                    dispatch(editService(currentID, form, type, notification, cancel))
                }
                else{
                    dispatch(postService(form, type, notification,cancel))
                }
            break;
            case 'type':
                if(currentID){
                    dispatch(editType(currentID, form, type, notification, cancel))
                }
                else{
                    dispatch(postType(form, type, notification,cancel))
                }
            break;
            case 'voucher':
                if(currentID){
                    console.log('test');
                    dispatch(editVoucher(currentID, form, type, notification, cancel))
                }
                else{
                    dispatch(postVoucher(form, type, notification,cancel))
                }
            break;
            case 'customer':
                if(currentID){
                    console.log('test');
                    dispatch(editCustomer(currentID, form, type, notification, cancel))
                }
                else{
                    dispatch(postCustomer(form, type, notification,cancel))
                }
            break;
            case 'staff':
                if(currentID){
                    console.log('test');
                    dispatch(editStaff(currentID, form, type, notification, cancel))
                }
                else{
                    dispatch(postStaff(form, type, notification,cancel))
                }
            break;
        default: break;
        }
    }
    let displayForm = (
        <form onSubmit={(event)=>submitHandler(event, props.config, props.formType,props.currentID, props.notificationRef,props.cancel)}>
            {formArray.map(element=>(
                <Input
                    key={element.id}
                    elementType={element.config.elementType}
                    elementConfig={element.config.elementConfig}
                    value={element.config.value}
                    invalid={!element.config.valid}
                    shouldValidate={element.config.validation}
                    touched={element.config.touched}
                    errorMess = {element.config.errorMess}
                    changed={(event)=>inputChangedHandler(props.config, setFormIsValid, props.setCon, event,element.id)}
                />
            ))}
            <Input elementType="button" disabled={!formIsValid}>{props.title}</Input>
            <Input elementType = "button" clicked={()=>props.cancel("list")}>Cancel</Input>
        </form>);
    if(loading){
        displayForm = <Spinner/>;
    }
    return(
        <Box component="div">
            {displayForm}
            <Notifications ref={props.notificationRef}/>
        </Box>
    )
}

AddForm.propTypes={
    config: PropTypes.object,
    formType: PropTypes.string,
    currentID: PropTypes.string,
    notificationRef: PropTypes.object,
    cancel: PropTypes.func,
    setCon: PropTypes.func,
    title: PropTypes.string,
}
export default AddForm;