import React from 'react';

export default function Header(props) {
    return(
        <div className="header">
            <div className="logo-container  my-3 mx-3">
                <img className = "logo"
                 src={props.logo} alt="Swiggy Logo" style={{height:"70px", width:'70px'}}  >
                 </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}


// const Header = () => {
    
// }