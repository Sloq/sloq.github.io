import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
// import { useSelector, useDispatch } from 'react-redux';
import './navbarMobile.css';
import linkedIn from '../linkedIn.png'
import gitHub from '../gitHub.png'

class NavbarMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.triggerNav = this.triggerNav.bind(this);
  }

  triggerNav() {
    const open = !this.state.open;
    this.setState({open})
  }

  render() {
    const active = this.state.open ? 'active' : 'inactive'
    return (
        <div className="topnav">
            <div className='topbarMobile'>
                <Link
                    to="/"
                >
                    Stephen Loquet
                </Link>
                <div className={`menuToggle ${active}`} onClick={this.triggerNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className={`navbarMobile ${active}`} ref={this.navPosRef}>
                <li ref={this.homeRef} onClick={this.triggerNav}>
                    <Link
                    to="/"
                    >
                    Home
                    </Link>
                </li>
                <li ref={this.altRef} onClick={this.triggerNav}>
                    <HashLink
                    to="/#projects"
                    >
                    Projects
                    </HashLink>
                </li>
                <li ref={this.resumeRef} onClick={this.triggerNav}>
                    <Link
                    to="/resume"
                    >
                    Resume
                    </Link>
                </li>
                <li ref={this.linkedInRef} onClick={this.triggerNav}>
                    <a
                    href="https://linkedin.com/in/stephen-loquet"
                    // target="_blank" rel="noreferrer"
                    >
                    <img src={linkedIn}
                        className='linkedIn'
                        alt="linkedIn"
                    />
                    </a>
                </li>
                <li ref={this.gitHubRef} onClick={this.triggerNav}>
                    <a
                    href="https://github.com/sloq"
                    >
                    <img
                        src={gitHub}
                        alt="gitHub"
                        className='gitHub'
                    />
                    </a>
                </li>
            </ul>
        </div>
    );
  }
}

export default NavbarMobile;