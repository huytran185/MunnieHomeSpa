import React from 'react'
import classes from './Auth.module.css'

const Auth = ()=>{
    return(
        <div>
            <form>
                <input type="text" id="username" name="username" placeholder="Your username..."/>
                <input type="password" id="password" name="password" placeholder="Your password..."/>
            </form>
        </div>
    )
}

export default Auth;