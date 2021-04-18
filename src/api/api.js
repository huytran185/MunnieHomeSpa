import firebase from '../components/Firebase/firebaseConfig'; 

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