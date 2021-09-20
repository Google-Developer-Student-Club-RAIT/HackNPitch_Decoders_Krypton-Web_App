import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';


import logo from '../../Assets/img/kryptonlogo-removebg.png'

function Login({history}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token')
      if(token) {
        history.push('/dashboard')
      }
    },[])

    const onLogin = () => {
        setLoading(true)
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            localStorage.setItem('token', userCredential._tokenResponse.idToken);
            history.push('/dashboard')
        })
        .catch( e => alert(e.message))
        .finally(() => setLoading(false))
    }

    return (
        <section className="flex flex-col items-center h-screen md:flex-row bg-black">
            <div className="container mx-auto ">
              <div className="flex justify-center px-2 py-6 ">
                <div className="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl ">
                  <div className="relative hidden w-full h-auto bg-gray-500   bg-cover border-r rounded-l-lg lg:block lg:w-6/12">
                    <div className="relative z-10 m-12 text-left ">
                     <img src={logo} alt="image" className = "w-44" />
                      <h2 className="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font"> Create an account. </h2>
                      <div className="w-full mt-16 mb-8 text-base leading-relaxed text-blueGray-900 sm:md:w-3/3 lg:text-1xl "> All you have to do is choose the section you need, remove the one that you do not need for that project and paste the one you need in that moment. All the section have been given the same left/right padding. Because consistence is king. </div>
                    </div>
                  </div>
                  <div className="w-full px-8 py-24 bg-gray-500  rounded-lg border-blueGray-100 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s">
                    <div className="relative z-10 text-left ">
                      <div className="mt-6">
                         <img src={logo} alt="image" className = "w-44 lg:hidden" />
                        <div className="mt-4 lg:mt-16">
                          <label className="block text-base font-medium leading-relaxed text-blueGray-700">Email Address</label>
                          <input type="email" value = {email} onChange = {e => setEmail(e.target.value)} name="email" id="" placeholder="Your Email " className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500" autocomplete="" required="" />
                        </div>
                        <div className="mt-4">
                          <label className="block text-base font-medium leading-relaxed text-blueGray-700">Password</label>
                          <input value = {password} onChange = {e => setPassword(e.target.value)} type="password" name="password" id="" placeholder="Your Password " className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500" autocomplete="" required="" />
                        </div>

                        <button onClick = {onLogin}  className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-black hover:from-black to-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-black">
                            {loading ? 'Logging You In' : "Log In"}
                        </button>
                      </div>
                      <p className="mt-8 text-center">Don't have an account? <Link to ="/signup" className="font-semibold text-black hover:text-black">Sign Up</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Login


