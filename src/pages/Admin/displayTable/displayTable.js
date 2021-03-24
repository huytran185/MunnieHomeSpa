import React from 'react';
import Aux from '../../../hoc/Auxulliary'
const DisplayTable = (props) => {
    let tableArray = [];
    if(props.data){
        for(let el in props.data){
            let content=[];
            for(let key in props.config){
                content.push({
                    content: props.data[el][props.config[key]["name"]],
                    type: props.config[key]["type"]
                })
            }
            tableArray.push({
                id: el,
                data: content
            })
        }
    }
    let display = (
        <table>
            <thead>
                <tr>
                    {Object.values(props.config).map((element,index)=>(
                    <Item content = {element.title}
                    key={index}/>  
                    ))}
                </tr>
            </thead>
            <tbody>
                    {tableArray.map((element, index)=>{
                        return(
                            <Row content = {element} key={index}/>
                    )})}
            </tbody>
        </table>
    )
    return (
        <Aux>
            {display}
        </Aux>
    )
}
export default DisplayTable;

const Row = (props)=>{
    let display = (
        <tr>
            {props.content.data.map((item, index)=>{
                return(<Item content={item.content} 
                    type={item.type} 
                    key={index}/>)
            })}

        </tr>
    )
    return(
        <Aux>
            {display}
        </Aux>
    )
}
const Item = (props)=>{
    let display = null;
    if(props.type === "image"){
        display = <img src={props.content} alt = "Service Voucher" width="160" height="110"/>
    }
    else if(props.type === "boolean"){
        display = <div>No</div>
        if(props.content === true){
            display = <div>Yes</div>
        }
    }
    else{
        display = <div>{props.content}</div>
    }
    return(
        <td>{display}</td>
    )
}