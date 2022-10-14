import React from "react";
import Footer from '../Footer';
import ContentPage from '../ContentPage';
import './MainPage.css';

const MainPage = () => {
    return (
        <div className="mainPage">
            <ContentPage/>
            <Footer/>
        </div>
    );
};

export default MainPage;
