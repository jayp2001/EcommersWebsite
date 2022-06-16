import './css/login.css';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
function Login(){
    let navigate = useNavigate();
    const forgotPwd = ()=>{
        navigate('/forgotPwd')
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
                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 } }} className='field' label="User Name" variant="outlined" />
                </div>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 } }} className='field' label="Password" variant="outlined" />
                </div>
                <div className='flex justify-between mt-12'>
                    <div><button className='signIn-btn'>Sign In</button></div>
                    <div><button className='forgot-btn' onClick={()=>forgotPwd()}>Forgot Password</button></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;