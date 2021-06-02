import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=>({
    Page:{
        width:'100%',
        height:'max-content',
        overflow:'auto',
    },
    Display:{
        width:'80%',
        height:'100%',
        float:'right',
        padding: '50px 20px 20px 20px',
        [theme.breakpoints.down('xs')]:{
            width:'100%',
        }
    },
    Table:{
        width:'90%',
        margin: '50px auto 0 auto',
        [theme.breakpoints.down('sm')]:{
            width:'100%',
        }
    },
    Button:{
        color: 'green',
        borderColor:'green',
        '&:active':{
            color:'black',
        }
    },
    Booked:{
        border:'none',
        backgroundColor:'salmon',
    },
    selectDate:{
        width: '100%',
        textAlign:'center',
        padding:20,
        [theme.breakpoints.down('xs')]:{
            fontSize:15,
        }
    }
}))
export default useStyles;