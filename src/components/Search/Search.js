import React from 'react'
import classes from './Search.module.css'
const Search = () => {
    return (
        <div className={classes.Search}>
            <input type="text" className={classes.SearchTerm} placeholder="Enter Your Search"/>
            <button type="submit" className={classes.SearchButton}>
            <i className="fa fa-search"></i>
            </button>
        </div>
    )
}

export default Search
