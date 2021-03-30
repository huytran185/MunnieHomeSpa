import React from 'react'
import classes from './Search.module.css'
const Search = (props) => {
    return (
        <div className={classes.Search}>
            <input type="text" 
            value={props.valued} 
            className={classes.SearchTerm} 
            placeholder="Enter Your Search" 
            onChange={props.onChanged}
            onClick={props.onClicked}/>
            <div type="submit" className={classes.SearchButton}>
                <i className="fa fa-search"></i>
            </div>
        </div>
    )
}

export default Search
