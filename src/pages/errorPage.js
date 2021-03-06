import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import {NavLink, Link, useLocation} from "react-router-dom";

import SimpleNavLink from './../components/SimpleNavLink.js';

const ErrorPage = (props) => {
    const location = useLocation();
    return(
        <div>
            <Helmet>
                <title>Error</title>
            </Helmet>
            <h1>Something Wrong Happened. Probably a 404 Error</h1>
            <p>This means we couldn't find the page you were looking for. If you followed a link to this page, could you reach out to me so I can fix the problem? you can find my contact info at the bottom of the <SimpleNavLink link_text="home page" to_location="/"/>.</p>
            <p>You can get back to the website if you go <SimpleNavLink link_text="here"/>. I'll do my best to make sure you don't find this page again!</p>
        </div>
    );
}
export default ErrorPage;
