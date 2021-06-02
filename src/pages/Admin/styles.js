import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=>({
    Page:{
        width:'100%',
        overflow:'auto',
    },
    Display:{
        float:'right',
        width:'80%',
        minHeight:'100vh',
        padding: '50px 20px 0 20px',
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            float:'left',
        }
    },
}))
export default useStyles;