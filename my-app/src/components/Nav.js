import {Component} from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component{
    render(){


        return(
            
           <ul className="nav">
            <li><NavLink to="/" exact>Main</NavLink> </li>
            <li> <NavLink to="/Publication" >Publication</NavLink> </li>
            <li> <NavLink to="/Photo">Photo</NavLink> </li>
            <li> <NavLink to="/Contacts">Contacts</NavLink> </li>
            {this.props.children}
           </ul>
           
        )
    }
}