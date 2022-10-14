import React from "react";
import './DownloadApp.css';
import appstore from '../../images/appstore.png';
import googleplay from '../../images/googleplay.png';

const DownloadApp = () => {
    return (
        <div className="downloadApp">
            <p>Pobierz aplikację.</p>

            <div className="app">
                <a href="https://www.apple.com/pl/app-store/">
                    <img src={appstore}/>
                </a>

                <a href="https://store.google.com/regionpicker">
                    <img src={googleplay}/>
                </a>
            </div>
        </div>
    );
};

export default DownloadApp;
