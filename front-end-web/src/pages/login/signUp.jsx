import './css/login.css';
import './css/signUp.css';
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom';

function SignUp() {
    let navigate = useNavigate();
    const cancle = ()=>{
        navigate('/');
    }
    return(
        <>
        <div className='card-right'>
            <div className='flex justify-center mb-2 signUp-Header'>
                    Sign UP
            </div>
            <div className='input-fields-wrapper'>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" className='field' label="User Name" variant="outlined" />
                </div>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" className='field' label="Email" variant="outlined" />
                </div>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" className='field' label="Password" variant="outlined" />
                </div>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" className='field' label="Retype Password" variant="outlined" />
                </div>
                <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" className='field' label="Address" variant="outlined" multiline rows={2} />
                </div>
                {/* <div className='field-wrapper flex justify-center'>
                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 } }} className='field' label="Password" variant="outlined" />
                </div> */}
                <div className='flex justify-between mt-12'>
                    <div><button className='signIn-btn'>SignUp</button></div>
                    <div><button className='forgot-btn' onClick={()=>cancle()}>Cancle</button></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp;