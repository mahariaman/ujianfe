import {Link} from 'react-router-dom'
import React, { useRef, useState} from 'react';
import "./register.css"
import { API_URL } from '../../helpers/idrformat';
import Axios from 'axios'

function RegistrationForm(props) {
    const [register , setRegister] = useState({
        username : useRef(),
        password : useRef()
    })

    const onSubmit=()=>{
        var username = register.username.current.value
        var password = register.password.current.value
        var obj={
            username,
            password,
            role:'user'
        }
        let checker = Axios.get(`${API_URL}/users?username=${register.username}`)
        let regexuser = /^(?=.*\d)[0-9a-zA-Z]{6,}$/
        // && state.username !== checker && state.password !== checker)
        if(regexuser.test(password) && username !== checker) {
            Axios.post(`${API_URL}/users`,obj)
           .then((res)=>{
               setRegister(res.data)
               alert('berhasil')
            }).catch((err)=>{
                console.log(err)
            })
        }else{
            alert('salah')
        }
    }
  return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            
            <form >
                <div className="form-group text-left">
                <label htmlFor="username">Username</label>
                <input type="texy" 
                       className="form-control" 
                       id="username" 
                       aria-describedby="usernameHelp" 
                       placeholder="Enter Username"
                       ref={register.username}
                />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        ref={register.password}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={onSubmit}
                >
                    Register
                </button>
                <p>have account? <Link to="/login">Click Here</Link></p>
            </form>
        </div>
    )
}

export default RegistrationForm