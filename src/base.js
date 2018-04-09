import Rebase from 're-base'
import firebase from 'firebase'


const config = {
    apiKey: 'AIzaSyC_7lUZcsoz_DksFrp1MDOEZs7twZObgIs',
    authDomain: 'go-help-reactjs.firebaseapp.com',
    databaseURL: 'https://go-help-reactjs.firebaseio.com',
    projectId: 'go-help-reactjs',
    storageBucket: 'go-help-reactjs.appspot.com',
    messagingSenderId: '163429939928'
};
const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
export default base 