import './css/login.css';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import * as constatnt from '../../constatnt/auth';
import axios from 'axios'
function ForgotPwd(){
    let navigate = useNavigate();
    const cancle = ()=>{
        navigate('/');
    }
    const [email,setEmail] = useState();
    const handleChange = (e)=>{
       const data = e.target.value
        setEmail(data);
    }
    const submit =async (e)=>{
        // alert(">>>")
        e.preventDefault();
        const data = {
            email:email
        }
        console.log(email)
        const res = await axios.post(`${constatnt.DB_URL}login/forgetPwd`, data);
        if(res){
            navigate('/');
        }
        // const res = axios.post()
    }
    return(
        <>
        <div className='card-right'>
            <div className='flex justify-center mb-2 header'>
                {/* <div className='header'> */}
                    Forgot Password
                {/* </div> */}
            </div>
            <div className='input-fields-wrapper'>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 },pattern:"^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$" }} value={email} onChange={handleChange} className='field' label="Email" variant="outlined" />
                </div>
                {/* <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 } }} className='field' label="Password" variant="outlined" />
                </div> */}
                <div className='flex justify-between mt-12'>
                    <div><button className='signIn-btn' onClick={submit}>Send</button></div>
                    <div><button className='forgot-btn' onClick={()=>cancle()}>Cancle</button></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ForgotPwd;