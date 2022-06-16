import './css/login.css';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
function ResetPwd(){
    let navigate = useNavigate();
    const cancle = ()=>{
        navigate('/');
    }
    return(
        <>
        <div className='card-right'>
            <div className='flex justify-center mb-2 header-reset'>
                {/* <div className='header'> */}
                    Reset Password
                {/* </div> */}
            </div>
            <div className='input-fields-wrapper'>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 } }} className='field' label="Current Password" variant="outlined" />
                </div>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 } }} className='field' label="New Password" variant="outlined" />
                </div>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 } }} className='field' label="Confirm Password" variant="outlined" />
                </div>
                <div className='flex justify-between mt-12'>
                    <div><button className='signIn-btn'>Submit</button></div>
                    <div><button className='forgot-btn' onClick={()=>cancle()}>Cancle</button></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ResetPwd;