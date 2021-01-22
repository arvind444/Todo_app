import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCDMN98rjRcgihiCKvY54TWhxHFH1tbWn4",
    authDomain: "todo-app-spak-c7623.firebaseapp.com",
    projectId: "todo-app-spak-c7623",
    storageBucket: "todo-app-spak-c7623.appspot.com",
    messagingSenderId: "226223548212",
    appId: "1:226223548212:web:28f2b0420284ef32742761",
    measurementId: "G-XF70TRSCT5"
});

const db = firebaseApp.firestore();

export default db ;