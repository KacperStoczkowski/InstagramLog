import React from "react";
import Footer from '../Footer';
import './MainPage.css';
import ContentPage from '../ContentPage';

const MainPage = () => {
    return (
        <div className="mainPage">
        <ContentPage/>
        <Footer/>
        </div>
    );
};

export default MainPage;