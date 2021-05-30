import React, {useState, useEffect} from 'react';
import { Box, Typography } from '@material-ui/core'
import Input from '../../components/Input/Input';
import {inputChangedHandler} from '../InputHandler';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {registerAccount, signInAccount} from '../../actions/auth';
import {Redirect} from 'react-router-dom';
import Aux from '../../hoc/Auxulliary';

//Login and register form which allows user to login into their account to perform admin function
//Or create their account for admin function

const useStyles = makeStyles((theme)=>({
    root:{
        backgroundColor: '#fff6f3',
        overflow:'auto',
        height:'100vh'
    },
    Login:{
        width: '50%',
        margin: '100px auto 100px auto',
        padding: 100,
        backgroundColor: 'white',
        [theme.breakpoints.down('sm')]:{
            width:'90%',
            padding:' 20px  20px',
        },
        [theme.breakpoints.only('sm')]:{
            width:'80%',
            padding: 60,
            
        },
    },
    Form:{
        margin: '50px auto 0 auto',
    }
}))
const Login = () => {
    const classes = useStyles();
    const [isLogin, setIsLogin] = useState(true);
    const user = useSelector(state=>state.auth.user);
    useEffect(()=>{
        
        if(user != null){
            console.log(user);
            <Redirect to="/admin/dashboard"/>;
        }
    },[user])
    const dispatch = useDispatch();
    const [config, setConfig] = useState({
        name:{
            elementType: 'text',
            elementConfig:{
                type:'text',
                name:'Username',
                placeholder:'Username'
            },
            value:'',
            validation:{
                required: true,
            },
            valid:false,
            touched: false,
        },
        password:{
            elementType: 'text',
            elementConfig:{
                type:'password',
                name:'Password',
                placeholder:'Password'
            },
            value:'',
            validation:{
                required: true,
            },
            valid: false,
            touched: false,
        }
    })
    const [formIsValid, setFormIsValid] = useState(false);
    const submitHandler = (e,config)=>{
        e.preventDefault();
        isLogin ?dispatch(signInAccount(config)): dispatch(registerAccount(config))
    }
    const formArray = [];
    for(let key in config){
        formArray.push({
            id:key,
            config: config[key],
        });
    }
    const switchFormHandler = ()=>{
        setIsLogin(!isLogin)
    }
    let displayForm = (
        <Aux>
            <Typography variant="h2">{isLogin?'Login':'Register'}</Typography>
            <form className={classes.Form} onSubmit={(e)=>submitHandler(e,config)}>
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
                        changed={(event)=>inputChangedHandler(config, setFormIsValid, setConfig, event,element.id)}
                    />
                ))}
                <Input elementType="button" disabled={!formIsValid}>{isLogin?'Login':'Register'}</Input>
                <Input elementType="button" clicked={switchFormHandler}>Switch to {isLogin?'Register':'Login'}</Input>
            </form>
        </Aux>
    )
    return (
        <Box className={classes.root}>
            <Box textAlign="center" className={classes.Login}>
                {displayForm}
            </Box>
        </Box>
    )
}

export default Login
