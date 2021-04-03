import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles({
    Page:{
        width:'100%',
        height:'max-content',
        overflow:'auto',
    },
    Display:{
            float:'right',
            width:'85%',
            height:'100%',
            minHeight:'100vh',
            padding: '50px 20px 0 20px',
        },
    Button:{
        color: 'green',
        borderColor:'green',
        '&:active':{
            color:'black',
        }
    }
})
export default useStyles;