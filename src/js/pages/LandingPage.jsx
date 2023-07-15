import React from "react";
import Home from "../component/home.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Jumbotron from "../component/Jumbotron.jsx";


const LandingPage = () => {

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
            
            <Jumbotron 
                header="Featured"
				title="4Geeks"
				description="With supporting text below as a natural lead-in to additional content."
				button="Go Somewhere"
				footer="Footer"
            />
            <Home />

            <Footer 
                home="Home"
                features="Features"
                pricing="Pricing"
                faqs="FAQs"
                about="About"
                company="2023 Luís Santos, Inc."
            />					
        </div>
    );        
    
}

export default LandingPage;