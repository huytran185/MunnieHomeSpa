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
    Table:{
        margin: '50px 20px 0 0px',
        width:'60%',
        float:'left',
    },
    Button:{
        color: 'green',
        borderColor:'green',
        '&:active':{
            color:'black',
        }
    },
    Booked:{
        backgroundColor:'salmon',
        border:'none'
    },
    ShowBook:{
        height:3200,
    }
})
export default useStyles;