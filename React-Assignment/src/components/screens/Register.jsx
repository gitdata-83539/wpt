import { useState } from "react"
import {toast} from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { register } from "../../service/admin"
function Register()
{
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const navigate=useNavigate()
    const onRegister= async()=>
    {
        if(firstName.length===0)
        {toast.error('please enter first name')}
        else if(lastName.length===0)
        {toast.error('please enter last name')}
        else if(email.length===0)
        {toast.error('please enter email')}
        else if(password.length===0)
        {toast.error('please enter password')}
        else if(confirmPassword.length===0)
        {toast.error('please enter confirm password')}
        else if(password!==confirmPassword)
        {toast.error('please confirm password')}
        else{
            
        const result= await register(firstName,lastName,email,password)
        if(result['status']=="success")
        {   console.log("hello1")
            toast.success("successfully registered")
            navigate('/login')
        }
        else{
            toast.error(result['error'])
        }
        }
    }
    return (
        <div>
            <center><h2>Register</h2></center>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="form">
                        <div className="mb-3">
                            <label>First Name:</label>
                            <input onChange={(e)=>{setFirstName(e.target.value)}}type="text" className="form-control"></input>
                            <label>Last Name:</label>
                            <input onChange={(e)=>{setLastName(e.target.value)}} type="text" className="form-control"></input>
                            <label>Email:</label>
                            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control"></input>
                            <label>Password:</label>
                            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control"></input>
                            <label>Confirm Password:</label>
                            <input onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" className="form-control"></input>
                            
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
                <center><button onClick={onRegister} className="btn btn-success">Submit</button></center>
            </div>
        </div>
        
    )
}
export default Register