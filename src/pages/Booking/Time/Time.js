import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 220,
  },
}));

const Time = (props) => {
    const classes = useStyles();
    // const [time,setTime] = useState();
    const selectTimeHandler = (time)=>{
      props.setInfo({
        ...props.bookInfo,
        start: {value:time},
      })
    }
    return (
        <fieldset className={classes.container}>
            <legend>Thời gian</legend>
            <TextField
                id="datetime-local"
                type="datetime-local"
                className={classes.textField}
                onChange = {(e)=>selectTimeHandler(new Date(e.target.value).toString())}
                InputLabelProps={{
                shrink: false,
                }}
            />
        </fieldset>
    )
}

export default Time
