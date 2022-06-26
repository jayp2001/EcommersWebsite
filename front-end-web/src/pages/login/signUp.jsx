import './css/login.css';
import './css/signUp.css';
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import * as constatnt from '../../constatnt/auth';

function SignUp() {
    let navigate = useNavigate();
    const cancle = ()=>{
        navigate('/');
    }

    const [formdata,setFormdata] = useState({
        userName :'',
        email : '',
        password : '',
        address : '',
    })

    const onchange = (e) => {
        setFormdata((prevState) => ({
            ...prevState,
          [e.target.name]: e.target.value,
        }))
    }
    const submitAddUser = async (e)=>{
       
        e.preventDefault();
        console.log(">>>>>",formdata)
        const res = await axios.post(`${constatnt.DB_URL}login/register`,formdata)
        .then((res)=>{
            navigate("/")
        })

    }

    return(
        <>
        <div className='card-right'>
            <div className='flex justify-center mb-2 signUp-Header'>
                    Sign UP
            </div>
            <div className='input-fields-wrapper'>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" className='field' onChange={onchange} name='userName' value={formdata.userName} label="User Name" variant="outlined" />
                </div>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" className='field' onChange={onchange} name='email' value={formdata.email} label="Email" variant="outlined" />
                </div>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" className='field' onChange={onchange} name='password' value={formdata.password} label="Password" variant="outlined" />
                </div>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" className='field' label="Retype Password" variant="outlined" />
                </div>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" className='field' onChange={onchange} name='address' value={formdata.assress} label="Address" variant="outlined" multiline rows={2} />
                </div>
                {/* <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 } }} className='field' label="Password" variant="outlined" />
                </div> */}
                <div className='flex justify-between mt-12'>
                    <div><button className='signIn-btn' onClick={submitAddUser}>SignUp</button></div>
                    <div><button className='forgot-btn' onClick={()=>cancle()}>Cancle</button></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp;