import { Link,NavLink } from "react-router-dom";
import "./navBar.css";
import { TextField } from "@mui/material";

function Nevbar() {
    return(
        <>
        <div className="navBar grid grid-cols-12">
            <div className="col-span-6 mt-3">
                <div className="grid grid-cols-12">
                <div className="col-span-8 col-start-2 flex justify-between">
                    <div>
                        <NavLink style={{textDecoration: 'none', color:'black'}} to="/deskBoard" activeClassName="active" className="Home">Home</NavLink>
                    </div>
                    <div>
                        <NavLink style={{textDecoration: 'none', color:'black'}} to="/electric" activeClassName="active" className="Electronic">Electronic</NavLink>
                    </div>
                    <div>
                        <NavLink style={{textDecoration: 'none', color:'black'}} to="/fashion" activeClassName="active" className="Fashion">Fashion</NavLink>
                    </div>
                    <div>
                        <NavLink style={{textDecoration: 'none', color:'black'}} to="/cart" activeClassName="active" className="Cart">Cart</NavLink>
                    </div>
                    {/* <div>
                        <NavLink style={{textDecoration: 'none', color:'black'}} to="/" activeClassName="active" className="Support">Support</NavLink> 
                    </div> */}
                </div>
                </div>
            </div>
            <div className="col-span-6 mt-3">
                <div className="grid grid-cols-12">
                    <div className="col-span-8 col-start-2 flex justify-between">
                        <div>
                        {/* <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            placeholder="Search"
                            className="text"
                            variant="standard"
                            size="small"
                        />
                            <button className="Button ml-6">Search</button> */}
                        </div>
                        <div>
                            <Link style={{textDecoration: 'none', color:'black'}} to="/" className="ml-6 Login">Log In</Link>
                        </div>
                </div>
            </div>
            </div>   
        </div>
        </>
    )
}

export default Nevbar;