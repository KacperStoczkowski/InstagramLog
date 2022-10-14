import React from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import './RegistrationForm.css'
import logo from '../../images/logo.png';

const RegistrationForm = () => {
    const validationSchema = yup.object ({
        // phone: yup
        //   .string()
        //   .min(2, "Login should be of minimum 2 characters length")
        //   .max(20, "Login should be of maximun 20 characters length")
        //   .required("Login is required"),

        firstName: yup
          .string()
          .min(4, "Name and Surname should be of minimum 4 characters length")
          .max(40, "name and Surnamed should be of maximun 40 characters length")
          .required("Name and Surname is required"),

        userName: yup
          .string()
          .min(5, "UserName should be of minimum 5 characters length")
          .max(10, "UserName should be of maximun 10 characters length")
          .required("UserName is required"), 
          
          password: yup
          .string()
          .min(6, "Password should be of minimum 6 characters length")
          .max(40, "Password should be of maximun 40 characters length")
          .required("Password is required"),
      });

    const formik = useFormik ({
        initialValues: {
            phone: '',
            firstName: '',
            userName: '',
            passwordRed: ''
        },

        validationSchema,

        onSubmit: (values) => {
            alert(JSON.stringify(values));
            alert("Uzytkownik zarejestrowany pomyślnie");
        }
    })

    const { handleSubmit, handleChange, values, errors } = formik;

    return (
        <div className="regForm">
            <div className="logo">
                <img src={logo} className="logoImage"/>
            </div>

            <h1 className="registerHeader">Zarejestruj się, aby przeglądać zdjęcia i filmy znajomych.</h1>

            <form action="https://www.facebook.com/" className="fbInput">
                <input className="fbLog" type="submit" value="Zaloguj się przez Facebooka" />
            </form>

            <div className="or">LUB</div>

            <form onSubmit={handleSubmit}>
                <input
                    className="inputLogForm"
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    value ={values.phone}
                    placeholder='Numer telefonu lub adres email'                 
                ></input>

                <input
                    className="inputLogForm"
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value ={values.firstName}
                    placeholder='Imie i nazwisko' 
                ></input>

                <input
                    className="inputLogForm"
                    type="text"
                    name="userName"
                    onChange={handleChange}
                    value ={values.userName}
                    placeholder='Nazwa uzytkownika' 
                ></input>

                <input
                    className="inputLogForm"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value ={values.password}
                    placeholder='Haslo' 
                ></input>
            </form>

            <div className="statuteInfo">
                <p>Osoby korzystające z naszej usługi mogły przesłać Twoje informacje kontaktowe do Instagramu. Dowiedz się więcej</p>
            </div>
            
            <div className="statuteInfo">
                <p>Rejestrując się, akceptujesz Regulamin. Informacje o tym, jak zbieramy, wykorzystujemy i udostępniamy Twoje dane, zawierają nasze Zasady dotyczące plików cookie. O wykorzystaniu plików cookie i podobnych technologii informują Zasady dotyczące plików cookie.</p>
            </div>

            <div><input className="submitButton" type="submit" value="Dalej" /></div>
        </div>
    );
};

export default RegistrationForm;