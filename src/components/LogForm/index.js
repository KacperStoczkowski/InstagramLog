import React from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import './LogForm.css';
import logo from '../../images/logo.png';
import icon from '../../images/icon.png';
import DownloadApp from "../DownloadApp";
import { Link } from 'react-router-dom';

const LogForm = () => {
    const validationSchema = yup.object ({
        firstName: yup
          .string()
          .min(2, "Login should be of minimum 2 characters length")
          .max(20, "Login should be of maximun 20 characters length")
          .required("Login is required"),

        password: yup
          .string()
          .min(6, "Password should be of minimum 6 characters length")
          .max(15, "Password should be of maximun 20 characters length")
          .required("Password is required"),
      });

    const formik = useFormik ({
        initialValues: {
            login: '',
            password: ''
        },

        validationSchema,

        onSubmit: (values) => {
            alert(JSON.stringify(values));
            alert("Pomyślnie zalogowany");
        }
    })

    const { handleSubmit, handleChange, values, errors } = formik;

    const loginError = errors.login ? (
        <p className="loginError">{errors.login}</p>
    ) : null;

    const passwordError = errors.password ? (
        <p className="passwordError">{errors.password}</p>
    ) : null;

    return (
    <div className="logForm">
        <div className="logFormUpper">
            <div className="logo">
                <a href="#"> 
                    <img src={logo} className="logoImage"/>
                </a>
            </div>

            <form onSubmit={handleSubmit} className="form">
                <input
                    className="inputLogForm"
                    type="text"
                    name="login"
                    onChange={handleChange}
                    value ={values.login}
                    placeholder='Numer telefonu, nazwa uzytkownika'                
                ></input>
                
                <input
                    className="inputLogForm"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value ={values.password}
                    placeholder='Hasło'                
                ></input>

                <button className="submit">Zaloguj się</button>
            </form>

            {loginError}
            {passwordError}

            <div className="or">LUB</div>

            <div className="logViaFacebook">
                <img src={icon} className="iconFb"/>
                <a href="https://www.facebook.com" className="facebookLink">Zaloguj się przez Facebooka</a>
            </div>

            <Link to="#" className="linkForm"><p>Nie pamiętasz hasła?</p></Link>     
        </div>

        <div className="register">
            <p>Nie masz konta?</p>
            <Link to="RegistrationForm" className="registrationLink">Zarejestruj się</Link>
        </div>

        <DownloadApp/>
    </div>
    );
};


export default LogForm;