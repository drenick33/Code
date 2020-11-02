import firebase from 'firebase/app'; //just base features of firebase
import 'firebase/firestore'; //database
import 'firebase/auth'; //authentication
import 'firebase/analytics'; //analytics (not sure if this works how I think it does)

//Initialize firebase
var firebaseConfig = {
  apiKey: 'AIzaSyBsM3BGdadAlJu282VS5ZUc-L1S6LKB1Lg',
  authDomain: 'tutorial-mario-plan-22de9.firebaseapp.com',
  databaseURL: 'https://tutorial-mario-plan-22de9.firebaseio.com',
  projectId: 'tutorial-mario-plan-22de9',
  storageBucket: 'tutorial-mario-plan-22de9.appspot.com',
  messagingSenderId: '433158081764',
  appId: '1:433158081764:web:23cd922c177cd1498ab0f1',
  measurementId: 'G-N9BX0CMTM9',
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
