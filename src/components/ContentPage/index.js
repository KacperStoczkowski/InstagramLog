import React from "react";
import ContentLeft from '../ContentLeft';
import ContentRight from '../ContentRight';
import './ContentPage.css';

const MainPage = () => {
    return (
        <div className="contentPage">
            <ContentLeft/>
            <ContentRight/>
        </div>
    );
};

export default MainPage;