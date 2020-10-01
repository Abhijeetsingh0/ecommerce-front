import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Contact from "./Contact";

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div className="man textman">
        <Menu />
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
        <div className="more-top">
        <Contact />
        </div>
        
    </div>
    
);

export default Layout;