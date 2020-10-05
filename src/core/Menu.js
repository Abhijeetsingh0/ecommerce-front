import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ffffff" };
    } else {
        return { color: "#88ED24" };
    }
};

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-dark">
            
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                  <p className="ttext"> Home</p> 
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/shop")}
                    to="/shop"
                >
                   <p className="ttext"> Filter</p>
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                   <p className="ttext"> Cart</p>
                    {/* <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup> */}
                </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                       <p className="ttext">Profile</p> 
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                       <p className="ttext">Profile</p>
                    </Link>
                </li>
            )}

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                        <p>Signin</p>  
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                          <p className="ttext">Signup</p>  
                        </Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#88ED24" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                       <p className="ttext">Signout</p> 
                    </span>
                </li>
            )}
        </ul>
    </div>
);

export default withRouter(Menu);