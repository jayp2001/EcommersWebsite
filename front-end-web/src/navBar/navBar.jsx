import { Link,NavLink } from "react-router-dom";
import "./navBar.css";

function Nevbar() {
    return(
        <>
        <div className="navBar grid grid-cols-12">
            <div className="col-span-6 mt-3">
                <div className="grid grid-cols-12">
                <div className="col-span-8 col-start-2 flex justify-between">
                    <div>
                        <NavLink to="/deskBoard" activeClassName="active" className="Home">Home</NavLink>
                    </div>
                    <div>
                        <NavLink to="/products" activeClassName="active" className="Electronic">Electronic</NavLink>
                    </div>
                    <div>
                        <NavLink to="/" activeClassName="active" className="Fashion">Fashion</NavLink>
                    </div>
                    <div>
                        <NavLink to="/" activeClassName="active" className="Cart">Cart</NavLink>
                    </div>
                    <div>
                        <NavLink to="/" activeClassName="active" className="Support">Support</NavLink> 
                    </div>
                </div>
                </div>
            </div>
            <div className="col-span-6 mt-3">
                <div className="grid grid-cols-12">
                    <div className="col-span-8 col-start-2 flex justify-between">
                        <div>
                            <input type="text" placeholder="Search..." className="text"/>
                            <button className="Button ml-6">Search</button>
                        </div>
                        <div>
                            <Link to="/" className="ml-6 Login">Log In</Link>
                        </div>
                </div>
            </div>
            </div>   
        </div>
        </>
    )
}

export default Nevbar;