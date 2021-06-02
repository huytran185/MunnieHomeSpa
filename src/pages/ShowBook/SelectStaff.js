import Input from '../../components/Input/Input';
import PropTypes from 'prop-types';
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

SelectStaff.propTypes={
    config: PropTypes.object,
    setStaff:PropTypes.func
}
export default SelectStaff;