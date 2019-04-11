import React, { Component } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './PersonalInfo.css';

export default class PersonalInfo extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="personal-info-container">
                <ul>
                    <li>
                        <div className="row">
                            联系方式: <span>13059215331</span>
                        </div>
                        <div className="row">
                              邮箱: <span>15989839341@163.com</span>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                        性别: 男
                        </div>
                        <div className="row">
                            籍贯: 广东汕头
                        </div>
                    </li>
                    <li>
                        <div className="row">
                        获得证书: 网络工程师(中级), CET-4
                        </div>
                        <div className="row">
                                工作年限: <span>3年</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
