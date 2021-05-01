import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

//Firebase Configuration information and initialize firebase firebase session

var firebaseConfig = {
    apiKey: "AIzaSyDmxifEygKCgCbpVk9OpCBA3zyKRNokIsI",
    authDomain: "munnie.firebaseapp.com",
    databaseURL: "https://munnie-default-rtdb.firebaseio.com",
    projectId: "munnie",
    storageBucket: "munnie.appspot.com",
    messagingSenderId: "531125843316",
    appId: "1:531125843316:web:94c594393a45ac9502a821",
    measurementId: "G-NJD422NPWW"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const database = firebase.database();

export { storage, database, firebase as default}