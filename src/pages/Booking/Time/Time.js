import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


//The component that accept time information for the booking

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
    const selectTimeHandler = (time)=>{
      props.setInfo({
        ...props.bookInfo,
        start: time,
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
