import firebase from '../components/Firebase/firebaseConfig';
// import axios from '../../axios-order';
//get data from firebase using axios
    // useEffect(()=>{
    //     axios.get('https://munnie-default-rtdb.firebaseio.com/type.json')
    //         .then(response=>{
    //             setType(response.data)
    //         });
    // },[])

//Get Type from firebase
export const getType = (setType)=>{
    firebase.database().ref().child("type").on("value",snapshot=>{
        if(snapshot.val() !=null)
            setType({...snapshot.val()})
        });
}
//Get Services from firebase
export const getService = (setServices)=>{
    firebase.database().ref().child("service").on("value", snapshot=>{
        if(snapshot.val()!=null)
            setServices({...snapshot.val()})
        })
}
//get Voucher from firebase
export const getVoucher = (setVouchers)=>{
    firebase.database().ref().child("voucher").on("value", snapshot=>{
        if(snapshot.val()!=null)
            setVouchers({...snapshot.val()})
        })
}
//get Staff from Firebase
export const getStaff = (setStaff)=>{
    firebase.database().ref("staff").on("value", snapshot=>{
        if(snapshot.val()!=null)
            setStaff({...snapshot.val()})
        })
}
//get Customer from Firebase
export const getCustomer = (setCustomer)=>{
    firebase.database().ref("customer").on("value", snapshot=>{
        if(snapshot.val()!=null)
            setCustomer({...snapshot.val()})
        })
}