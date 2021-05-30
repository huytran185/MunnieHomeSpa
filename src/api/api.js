import firebase from '../Config/firebaseConfig'; 
require('firebase/auth');

//The function that allows the application connect to the Firebase and get the information of the chosen data type

export const getData = async (dataType)=>{
    const getFirebaseData = new Promise((resolve, reject)=>{
        const list = {};
        firebase.database().ref(dataType).once("value", snapshot=>{
            snapshot.forEach(snap=>{
                list[snap.key] = snap.val()
            });
            resolve(list)
        })
    })
    return await getFirebaseData;
}

// The function allows admin to delete Information of the chosen data type

export const deleteData = async (id, type)=>{
    const deleteFirebaseData = new Promise((resolve, reject)=>{
        firebase.database().ref().child(type+'/'+id).remove(
            error =>{
                if(error){
                    reject(error);
                }
            resolve('Success')
        })
    })
    return await deleteFirebaseData;
}

//The function allows admin to create new information based on the chosen data type

export const postData = async (form, type)=>{
    let imageURL = null;
    if(type === 'service' || type === 'voucher'){
        const postPicture = new Promise((resolve, reject)=>{
            let image = {};
            image = form['image'].value;
            firebase.storage().ref(`${image.name}`).put(image).on(
                "state_changed",
                snapshot=>{},
                error=>{
                    reject(error)
                },()=>{
                    firebase.storage().ref().child(image.name).getDownloadURL()
                        .then(url=>{
                            resolve(url);
                        })
                }
            )
        })
        imageURL = await postPicture;
    }
    const formData = {};
    for(let element in form){
        if(element === "image"){
            formData[element] = imageURL;
        }
        else{
            formData[element] = form[element].value;
        }
    }
    const postFirebaseData = new Promise((resolve, reject)=>{
        firebase.database().ref().child(type).push(
            formData,(error)=>{
                if(error){
                    reject(error)
                }
            }).then((snap)=>{
                const id = snap.key;
                const res = ['Success', id, formData]
                resolve(res)
            })
    })
    return await postFirebaseData;
}

//The function allows admin to edit specific information of the chosen data type

export const editData = async  (id, form,type)=>{
    let imageURL = null;
    if(type === 'service' || type === 'voucher'){
        const postPicture = new Promise((resolve, reject)=>{
            let image = {};
            image = form['image'].value;
            firebase.storage().ref(`${image.name}`).put(image).on(
                "state_changed",
                snapshot=>{},
                error=>{
                    reject(error)
                },()=>{
                    firebase.storage().ref().child(image.name).getDownloadURL()
                        .then(url=>{
                            resolve(url);
                        })
                }
            )
        })
        imageURL = await postPicture;
    }
    const formData = {};
    for(let element in form){
        if(element === "image"){
            formData[element] = imageURL;
        }
        else{
            formData[element] = form[element].value;
        }
    }
    const editFirebaseData = new Promise((resolve, reject)=>{
        firebase.database().ref().child(type + '/'+ id).set(
                formData,(error)=>{
                    if(error){
                        reject(error)
                    }
                    const res = ['Success', formData]
                    resolve(res)
                }
            )
    })
    return await editFirebaseData;
}

//the function allows admin and staff create new account to access admin functions

export const register = async (form)=>{
    let email = form.name.value;
    let password = form.password.value;
    const registerFirebaseAccount = new Promise((resolve,reject)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async(response)=>{
                let token = await getToken();
            console.log(token);
            resolve(['Success', response.user.email, token])
            })
            .catch((error)=>{
                reject(['Fail', error.message])
            })
    })
    return await registerFirebaseAccount;
}

//The function allows authorized user to access admin functions

export const signIn = async(form)=>{
    let email = form.name.value;
    let password = form.password.value;
    const signInFirebaseAccount = new Promise((resolve,reject)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(async(response)=>{
            let token = await getToken();
            resolve(['Success', response.user.email, token])
        })
        .catch((error)=>{
            reject(['Fail', error.message])
        })
    })
    
    return await signInFirebaseAccount;
}

//The functions returns token information after authorized sign in to website

export const getToken = async()=>{
    const getTokenFirebase = new Promise((resolve, reject)=>{
        firebase.auth().currentUser.getIdTokenResult(true)
        .then((idToken)=>{
            resolve(idToken)
        }).catch((error)=>{
            reject(error.message)
        })
    })
    return await getTokenFirebase;
}

//The functions allows user to sign out from their account

export const logOut = ()=>{
    firebase.auth().signOut()
}

export const checkLogin = async()=>{
    const checkLogin = new Promise((resolve, reject)=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                resolve(user)
            }
            else{
                reject(false)
            }
        })
    })
    return await checkLogin;
}