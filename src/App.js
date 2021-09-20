import './App.css';
import { initializeApp } from "firebase/app";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Main from './Pages/main/Main'
import MainApp  from './Pages/dashboard/MainApp';
import Login from './Pages/login/Login'
import SignUp from './Pages/SignUp/Signup'
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useState } from 'react/cjs/react.development';

// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAV8WLaRX5zIubGVNw0H0N7jE5iJsAqJ9Q",
  authDomain: "krypton-hacknpitch.firebaseapp.com",
  projectId: "krypton-hacknpitch",
  storageBucket: "krypton-hacknpitch.appspot.com",
  messagingSenderId: "958493137812",
  appId: "1:958493137812:web:4217947ba53cf61e2d4d81",
  measurementId: "G-09LC981X4H"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, user => {
      setUser(user)
    })

  },[])

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {Main}></Route>
          <Route exact path = "/login" component = {Login}></Route>
          <Route exact path = "/signup" component = {SignUp}></Route>
          <Route exact path = "/dashboard" component = {MainApp}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
