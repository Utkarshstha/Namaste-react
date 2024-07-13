import {LOGO_URL} from "../utils/constantlink";
import {useState} from "react";
import { Link } from "react-router-dom";
const Header=()=>{

let [btnName, setbtnName]=useState("login");

    return(
        <div className="header">
             <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
                </div>
                <div className="nav">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/about">about us</Link></li>
                        <li> <Link to="/contact">contact us</Link> </li>
                        <li><Link to="/cart">cart</Link></li>
                        <li><button className="login" onClick={()=>{
                        //   let  nName="logout";
                        //     setbtnName(nName)
                                 //or
                        btnName=="login"
                         ?setbtnName("logout")
                         : setbtnName("login");
                               
                             //or
                        //  if(btnName=="login"){
                        //     setbtnName("loout")
                        //  }
                        //  else if(btnName=="loout"){
                        //     setbtnName("login")
                        //  }
                        }
                        }
                            >{btnName}</button></li>
                    </ul>
                </div>
             </div>
        
    )
    }

    export default Header;