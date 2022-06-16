import './css/login.css';
import logo from '../assets/ecommerce.svg'
import Login from './login';
import ForgotPwd from './forgotPwd';
import ResetPwd from './resetPwd';
// import "https://cdn.tailwindcss.com";
function LoginWrapper(){
    console.log(window.location.pathname);
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
                        {window.location.pathname === "/" && <Login />}
                        {window.location.pathname === "/forgotPwd" && <ForgotPwd />}
                        {window.location.pathname === "/resetPwd" && <ResetPwd />}
                        {/* <Login /> */}
                    </div>
                </div>
           </div>
        </div>
    )
}

export default LoginWrapper;