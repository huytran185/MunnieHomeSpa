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
    firebase.database().ref("type").on("value",snapshot=>{
            let typeList = [];
            snapshot.forEach(snap=>{
                typeList.push(snap.val());
            });
            setType(typeList);
        });
}
//Get Services from firebase
export const getService = (setServices)=>{
    firebase.database().ref("service").on("value", snapshot=>{
            let serviceList = [];
            snapshot.forEach(snap=>{
                serviceList.push(snap.val());
            });
            setServices(serviceList);
        })
}
//get Voucher from firebase
export const getVoucher = (setVouchers)=>{
    firebase.database().ref("voucher").on("value", snapshot=>{
            let voucherList = [];
            snapshot.forEach(snap=>{
                voucherList.push(snap.val());
            });
            setVouchers(voucherList);
        })
}
//get Staff from Firebase
export const getStaff = (setStaff)=>{
    firebase.database().ref("staff").on("value", snapshot=>{
            let staffList = [];
            snapshot.forEach(snap=>{
                staffList.push(snap.val());
            });
            setStaff(staffList);
        })
}
//get Customer from Firebase
export const getCustomer = (setCustomer)=>{
    firebase.database().ref("customer").on("value", snapshot=>{
            let customerList = [];
            snapshot.forEach(snap=>{
                customerList.push(snap.val());
            });
            setCustomer(customerList);
        })
}