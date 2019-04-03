import React, { Component } from 'react';
import PersonalInfo from './personalInfo/PersonalInfo';
import Title from './title/Title';
import './HeaderBg.css';


export default class HeaderBg extends Component {
    // constructor() {

    // }

    render() {
        return (
            <div id="header-bg" className="header-bg-container">
                {/* <div className="header-bg"></div>
                <div className="header-mask"></div> */}
                <div className="header-main-container">
                    <Title></Title>
                    <PersonalInfo />
                </div>
            </div>
        )
    }
}