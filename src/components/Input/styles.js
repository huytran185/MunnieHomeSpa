import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
    Input: {
    width: '100%',
    padding: '10px 0',
    boxSizing: 'border-box',
    },
    InputElement:{
        width: '100%',
        padding: '12px 20px',
        border: '1px solid black',
        outline: 'none',
        font: 'inherit',
        backgroundColor: 'white',
        display: 'block',
        '&:focus':{
            outline: 'none',
            backgroundColor:'#ccc',
        },
    },
    Invalid:{
        border: '1px solid red'
    },
    Error:{
        color: 'red',
        margin: '5px 0',
        float: 'left'
    },
    Button:{
        '&:disabled':{
            color: '#ccc',
            cursor:'not-allowed!important'
        },
    },
    Capitalize:{
        textTransform: 'capitalize',
    }
});
export default useStyle;
