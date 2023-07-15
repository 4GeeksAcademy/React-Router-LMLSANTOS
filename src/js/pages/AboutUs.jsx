import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

const AboutUs = () => {

    const navigate = useNavigate();
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
           
            <h1>About us:</h1> 
           
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

export default AboutUs;