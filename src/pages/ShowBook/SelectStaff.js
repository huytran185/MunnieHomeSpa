import Input from '../../components/UI/Input/Input';

//Select and display list of booking of selected staff

const SelectStaff = (props)=>{
    const handleChange = (event) => {
        const name = event.target.value;
        props.setStaff(name);
    };
    return(
        <Input
            elementType={props.config.elementType}
            elementConfig={props.config.elementConfig}
            value={props.config.value}
            invalid={!props.config.valid}
            shouldValidate={props.config.validation}
            touched={props.config.touched}
            errorMess = {props.config.errorMess}
            changed={(event)=>handleChange(event)}
        />
    )
}
export default SelectStaff;