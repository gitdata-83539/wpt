import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import {toast} from 'react-toastify'
import { logIn } from '../../service/admin';
function Login()
{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const onLogin = async () =>
    { console.log("hello")
        if(email.length===0)
        {toast.error("please enter email")}
        else if(password.length===0)
        {toast.error("please enter password")}
        else
        {
            const result= await logIn(email,password)
            if(result['status']==="success")
            {   const data=result['data']
                sessionStorage['name']= data['name']
                sessionStorage['token']=data['token']
                toast.success("successfully loggedin")
                navigate('/home')
            }
            else
            {
                toast.error(result['error'])
            }      
        }
    }
    return (
        <div>
            <center><h2>Login</h2></center>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="form">
                        <div className="mb-3">
                            <label>Email:</label>
                            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control"></input>
                            <label>Password:</label>
                            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control"></input>
                            
                        </div>
                        <div className='mb-3'>
              <div>
                <center>Don't have account ? <Link to='/register'>Register here</Link></center>
              </div>
              <center><button onClick={onLogin}  className='btn btn-success mt-2'>
                Login
              </button></center>
            </div>
                    </div>
                <div className="col-4"></div>    
                </div>
            </div>

        </div>
    )
}
export default Login