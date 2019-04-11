import React, { Component } from 'react';
import { getIconByName } from '../../../utils/IconsUtil';
import './Item.css'

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderIcon = (iconName) => {
        if(iconName) {
            return (
                <span>{getIconByName(iconName)}</span>
            )
        }else {
            return null;
        }
    }

    renderToolTip = (linkTarget, toolTip) => {
        if(linkTarget) {
            return (
                <div>
                    <div className="tool-tip">
                        <a href={linkTarget.link} target={linkTarget.ifOpenNewTap ? "_blank" : ""} >{toolTip}</a>
                    </div>
                    <div className="arrow"></div>
                </div>
            )
        }else {
            return null;
        }
    }    

    render() {
        const { iconName, toolTip, linkTarget, content } = this.props;
        return (
            <div className="item-container">
                {/* Icon */}
                {this.renderIcon(iconName)}

                <span className="content">
                    {content}
                </span>

                {/* Tool tip */}
                {this.renderToolTip(linkTarget, toolTip)}
                
            </div>
        )
    }
}