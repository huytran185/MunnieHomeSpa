import React from 'react'
import classes from './Login.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
// import Auth from '../Auth/Auth'
const Login = ()=>{
    return(
        <div className = {classes.Login}>
            <form>
                <div className={classes.Title}>
                Log in
                </div>
                <Input type="text" id="username" name="username" placeholder="Your Username..."/>
                <Input type="password" id="password" name="password" placeholder="Your Password..."/>
                <Button>Login</Button>
            </form>
        </div>
    )
}

export default Login;