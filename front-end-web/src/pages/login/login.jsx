import './css/login.css';
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios'
import * as constatnt from '../../constatnt/auth';
import { useNavigate } from 'react-router-dom';
function Login(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    let navigate = useNavigate();
    const forgotPwd = ()=>{
        navigate('/forgotPwd')
    }

    const submitLogin = async (e)=>{
       
        e.preventDefault();
        const res = await axios.post(`${constatnt.DB_URL}login/`,formData);

        if(res.status === 400 || !res.data){
            console.log(">>>>>>>",res.data)
            alert("invalid user");
        }
        else{
            console.log(">>>>>>>",res.data)
            // navigate('/deskBoard')
        }
    }

    return(
        <>
        <div className='card-right'>
            <div className='flex justify-center mb-2 header'>
                {/* <div className='header'> */}
                    Login
                {/* </div> */}
            </div>
            <div className='input-fields-wrapper'>
                <div className='field-wrapper flex justify-center'>
                    <TextField name='email' value={formData.email} onChange={onChange} InputProps={{ style: { fontSize: 22 } }} className='field' label="User Name" variant="outlined" />
                </div>
                <div className='field-wrapper flex justify-center'>
                    <TextField name='password' value={formData.password} onChange={onChange}  InputProps={{ style: { fontSize: 22 } }} className='field' label="Password" variant="outlined" />
                </div>
                <div className='flex justify-between mt-12'>
                    <div><button className='signIn-btn' onClick={submitLogin}>Sign In</button></div>
                    <div><button className='forgot-btn' onClick={()=>forgotPwd()}>Forgot Password</button></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;