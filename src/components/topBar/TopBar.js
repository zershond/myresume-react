import React, { Component } from 'react';
import './TopBar.css';
import Item from './item/Item';
import Logo from './logo/Logo';

export default class Topbar extends Component {
  // constructor() {

  // }

  render() {
    const githubLink = {
      link: "https://github.com/zershond/myresume-react",
      ifOpenNewTap: true
    }
    return (
      <div className="top-bar">
        <Logo />
        <Item iconName="FaGithubSquare" toolTip="GitHub" linkTarget={githubLink} />
        <Item content="项目" />
        <Item content="工作经历" />
      </div>
    )
  }
}
