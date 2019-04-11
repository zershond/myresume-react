import React, { Component } from 'react';
import { getIconByName } from '../../utils/IconsUtil';
import './SeparateBar.css';

const arrowIconMap = {
    down: 'FaChevronDown',
    up: 'FaChevronUp',
}

export default class SeparateBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrow: 'up'
        };
    }

    getIcon = (iconName) => getIconByName(iconName);

    onClickBar = () => {
        let { arrow } = this.state;
        let currentArrow = arrow === 'up' ? 'down' : 'up';
        this.setState({
            arrow: currentArrow
        })
    }

    renderChildrenContent = (arrow) => {
        const { children } = this.props;
        if(arrow === 'up') {
            return children;
        }else {
            return null;
        }
    }

    render () {
        const { iconName, content } = this.props;
        let { arrow } = this.state;
        return  (
            <div className="separate-bar-container">
                <div className="separate-bar" onClick={this.onClickBar}>
                    <span className="icon">{this.getIcon(iconName)}</span>
                    <span className="content">{content}</span>
                    <span className="arrow">{this.getIcon(arrowIconMap[arrow])}</span>
                </div>
                <div className="children-content">{this.renderChildrenContent(arrow)}</div>
            </div>
        )
    }
}