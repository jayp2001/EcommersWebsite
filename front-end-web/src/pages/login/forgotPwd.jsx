import './css/login.css';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
function ForgotPwd(){
    let navigate = useNavigate();
    const cancle = ()=>{
        navigate('/');
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
                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 },pattern:"^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$" }} className='field' label="Email" variant="outlined" />
                </div>
                {/* <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 } }} className='field' label="Password" variant="outlined" />
                </div> */}
                <div className='flex justify-between mt-12'>
                    <div><button className='signIn-btn'>Send</button></div>
                    <div><button className='forgot-btn' onClick={()=>cancle()}>Cancle</button></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ForgotPwd;