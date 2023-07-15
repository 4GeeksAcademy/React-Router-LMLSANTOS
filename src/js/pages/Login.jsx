import React from "react";

import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Form from "../component/Form.jsx";

const Login = () => {

    
    return (
        <div>
            <Navbar 
                title="4Geeks"
                home="Home"
                login="Login"
                link="Link"
                aboutUs="About Us"
                menuDropdown="Dropdown"
                action="Action"
                anotherAction="Another Action"
                something="Something else here"
                search="Search"
            />
            
            <Form />
            
            <Footer 
                home="Home"
                features="Features"
                pricing="Pricing"
                faqs="FAQs"
                about="About"
                company="2023 Luís Santos, Inc."
            />    
        </div>
    )
}

export default Login;