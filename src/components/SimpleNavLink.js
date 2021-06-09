import React, {useState} from 'react';
import {NavLink, Link, useLocation} from "react-router-dom";

const SimpleNavLink = (props) => {
    const location = useLocation();
    return(
        <NavLink to={{
            pathname: props.to_location !== undefined ? props.to_location : location.state !== undefined ? location.state.referrer : "/",
            state:{
                referrer:location.pathname
            }
        }}>{props.link_text}</NavLink>
    );
}
export default SimpleNavLink;
