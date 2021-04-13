// import React, {useState, useEffect} from 'react';
// import {Container, Box, Typography, TextField, } from '@material-ui/core'
// import Input from '../../components/UI/Input/Input';
// import {inputChangedHandler, submitHandler} from '../InputHandler';
// import {makeStyles} from '@material-ui/core/styles';
// const useStyles = makeStyles({
//     root:{
//         backgroundColor: '#fff6f3',
//         minHeight: '100vh',
//         overflow:'auto'
//     },
//     Login:{
//         width: '50%',
//         margin: '100px auto 0 auto',
//         padding: 100,
//         backgroundColor: 'white',
//     },
//     Form:{
//         margin: '50px auto 0 auto',

//     }
// })
// const Login = () => {
//     const classes = useStyles();
//     const [config, setConfig] = useState({
//         name:{
//             elementType: 'text',
//             elementConfig:{
//                 type:'text',
//                 name:'Username',
//                 label:'Username'
//             },
//             value:'',
//             validation:{
//                 required: true,
//             },
//             valid:false,
//             touched: true,
//         },
//         password:{
//             elementType: 'text',
//             elementConfig:{
//                 type:'password',
//                 name:'Password',
//                 label:'Password'
//             },
//             value:'',
//             validation:{
//                 required: true,
//             },
//             valid: false,
//             touched: true,
//         }
//     })
//     const [formIsValid, setFormIsValid] = useState(false);
//     const [form, setForm] = useState()
//     const formArray = [];
//     for(let key in config){
//         formArray.push({
//             id:key,
//             config: config[key],
//         });
//     }
//     let displayForm = (
//         <form className={classes.Form}>
//             {formArray.map(element=>(
//                 <Input
//                     key={element.id}
//                     elementType={element.config.elementType}
//                     elementConfig={element.config.elementConfig}
//                     value={element.config.value}
//                     invalid={!element.config.valid}
//                     shouldValidate={element.config.validation}
//                     touched={element.config.touched}
//                     errorMess = {element.config.errorMess}
//                     changed={(event)=>inputChangedHandler(config, setFormIsValid, setConfig, event,element.id)}
//                 />
//             ))}
//             <Input elementType="button" disabled={!formIsValid}>Login</Input>
//         </form>
//     )
//     return (
//         <Box className={classes.root}>
//             <Box textAlign="center" className={classes.Login}>
//                 <Typography variant="h2">Login</Typography>
//                 {displayForm}
//             </Box>
//         </Box>
//     )
// }

// export default Login
