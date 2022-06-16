import './css/login.css';
import logo from './assets/ecommerce.svg'
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import "https://cdn.tailwindcss.com";
function Login(){
    return(
        <div className="grid grid-row-1">
           <div className='grid grid-cols-12'>
                <div className='grid col-span-10 col-start-2 box'>
                    <div className='grid grid-cols-2'>
                        <div className='card-left'>
                            <div className='logo-wrapper'>
                                <img src={logo}/>
                            </div>
                        </div>
                        <div className='card-right'>
                            <div className='flex justify-center'>
                                <div className='header'>
                                    Login
                                </div>
                            </div>
                            <div className='input-fields-wrapper'>
                                <div className='field-wrapper flex justify-center'>
                                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 } }} className='field' label="User Name" variant="outlined" />
                                </div>
                                <div className='field-wrapper flex justify-center'>
                                    <TextField id="standard-basic" InputProps={{ style: { fontSize: 22 } }} className='field' label="Password" variant="outlined" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Login;