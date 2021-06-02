import React from 'react'
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
//Search Component

const useStyles = makeStyles({
    SearchTerm: {
        width: '100%',
    }
})

const Search = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.Search}>
            <TextField variant="outlined"  label="Search" type="text" size="small" 
            value={props.valued} 
            className={classes.SearchTerm} 
            placeholder={props.placeholder} 
            onChange={props.onChanged}
            onClick={props.onClicked}/>
        </div>
    )
}
Search.propTypes={
    valued: PropTypes.string,
    placeholder: PropTypes.string,
    onChanged: PropTypes.func,
    onClicked: PropTypes.func
}
export default Search
