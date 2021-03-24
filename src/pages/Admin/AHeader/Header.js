import React from 'react';
import classes from './Header.module.css';
import Item from './Item/Item';

const header =(props) => {
    let display = props.data.map((el, index)=>{
        return <Item
                key={index}
                name={el.name}
                clicked={el.method}
            />
    })
    return(
        <header className={classes.Header}>
            {display}
        </header>
    )
}
export default header;