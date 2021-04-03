import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        width: '70%',
        margin: '50px auto',
        backgroundColor: 'white',
    },
    Form:{
        border: '3px solid #dbb89a',
        padding: '50px',
        borderRadius: '55px',
        overflow: 'hidden'
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
        zIndex: '999',
        position: 'absolute',
        width:'100%',
        overflow:'auto',
        maxHeight:130,
    },
    Add:{
        cursor: 'pointer'
    },
    Search:{
        marginLeft: 3,
        width: '100%',
        height: 'auto',
        position:'relative'
    },
    Info:{
        padding: '15px 20px',
    }
})
export default useStyles;