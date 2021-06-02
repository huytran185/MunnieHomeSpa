import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root:{
        width: '70%',
        margin: '50px auto',
        backgroundColor: 'white',
        borderRadius: '55px',
        [theme.breakpoints.down('md')]:{
            width:'100%',
        }
    },
    Form:{
        border: '3px solid #dbb89a',
        padding: '50px',
        borderRadius: '55px',
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]:{
            padding: '50px 30px',
        }
    },
    Suggest:{
        backgroundColor: 'lightgrey',
        padding: '10px',
        cursor: 'pointer',
        fontSize: '15px',
        '&:hover': {
            fontWeight: 'bold',
        }
    },
    SuggestContainer: {
        width:'100%',
        maxHeight:130,
        position: 'absolute',
        overflow:'auto',
        zIndex: '999',
    },
    Add:{
        cursor: 'pointer'
    },
    Search:{
        width: '100%',
        height: 'auto',
        position:'relative',
        marginLeft: 3,
    },
    Info:{
        padding: '15px 20px',
    }
}))
export default useStyles;