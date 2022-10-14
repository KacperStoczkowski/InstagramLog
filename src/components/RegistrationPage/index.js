import React from "react";
import RegistrationForm from "../RegistrationForm";
import Footer from '../Footer';
import './RegistrationPage.css';

const RegistrationPage = () => {
    return (
        <div className="registrationPage">
            <RegistrationForm/>

            {/* <Footer/> */}
        </div>
    );
};

export default RegistrationPage;