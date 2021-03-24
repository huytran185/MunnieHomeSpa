import React, {useState, useEffect} from 'react';
import {serviceTable} from './tableConfig'
// import Item from './Item.js'
import {getService} from '../getData';
import Aux from '../../hoc/Auxulliary'
const Test = () => {
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        getService(setData);
    }, [])
    let tableArray = [];

    if(data){
        for(let el in data){
            let content=[]
            for(let key in serviceTable){
                content[key] = data[el][serviceTable[key]]
            }
            tableArray[el] = content;
        }
    }
    let display = (
        <table>
            <thead>
                <tr>
                    {serviceTable.map((element,index)=>(
                    <Item content = {element}
                    key={index}/>  
                    ))}
                </tr>
            </thead>
            <tbody>
                    {tableArray.map((element, index)=>(
                        <Row content = {element} key={index}/>
                    ))}
            </tbody>
        </table>
    )
    return (
        <Aux>
            {display}
        </Aux>
    )
}
const Row = (props)=>{
    let display = (
        <tr>
            {props.content.map((el,index)=>(
                <Item content={el} key={index}/>
            ))}
        </tr>
    )
    return(
        <Aux>
            {display}
        </Aux>
    )
}
const Item = (props)=>{
    return(
        <td>{props.content}</td>
    )
}
export default Test
