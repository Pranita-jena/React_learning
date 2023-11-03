// const heading = React.createElement("h1", { id : "heading", name: "head" }, " HEllo World from React");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React, { createElement } from "react";
import ReactDOM  from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/Header';
import logo from '../swiggy.png';
import Body from "./components/Body";


//Main component
const AppLayout = () => {
    return(
        <div className="app">
             <Header logo={logo}></Header>
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);