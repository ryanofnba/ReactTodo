import firebase from 'firebase';

try {
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyChHGl18ZAMLmRU_ub-FrY1lkkhwQM_2F4",
    authDomain: "todo-b6e83.firebaseapp.com",
    databaseURL: "https://todo-b6e83.firebaseio.com",
    storageBucket: "todo-b6e83.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
