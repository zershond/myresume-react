import React, { Component } from 'react';
import Http from '../../utils/Http'
import PersonalInfo from './personalInfo/PersonalInfo';
import Title from './title/Title';
import './HeaderBg.css';

const httpInstance = new Http();

export default class HeaderBg extends Component {
    constructor(props) {
      super(props);
      httpInstance.send('/data-api', {
        service: 'personal-info',
        user: 'Caleb'
      }).then((res) => {
        console.log(res);
      })
    }

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
