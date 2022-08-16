import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styles from './navbar.module.css';
import linkedIn from '../linkedIn.png'
import gitHub from '../gitHub.png'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkIdxActive: [
        true,
        true,
        true,
        true,
        true
      ],
      underline: {
        width: 0,
        height: 0,
        left: '75%',
        top: '25px',
      },
    }
    this.homeRef = React.createRef();
    this.resumeRef = React.createRef();
    this.altRef = React.createRef();
    this.linkedInRef = React.createRef();
    this.gitHubRef = React.createRef();
    this.adjustNavline = this.adjustNavline.bind(this);
  }

  adjustNavline(idx, ref) {
    const newActive = [false,false,false,false,false];
    const refRect = ref.current.getBoundingClientRect();
    const newUnderlineObj = {
      width: refRect.width,
      height: refRect.height,
      left: refRect.left,
      top: refRect.top,
      borderColor: 'black',
    };
    newActive[idx] = true;
    this.setState({
      linkIdxActive: newActive,
      underline: newUnderlineObj,
    });
  }


  render() {
    return (
      <nav className={styles.nav}>
        <ul className={styles.navbar} ref={this.navPosRef}>
          <li ref={this.homeRef} >
            <Link
              to="/"
              onMouseEnter={() => {this.adjustNavline(0, this.homeRef)}}
              className={this.state.linkIdxActive[0] ? styles.hoverActive : styles.hoverInactive}
              >
              Home
            </Link>
          </li>
          <li ref={this.resumeRef}>
            <Link
              to="/resume"
              
              onMouseEnter={() => {this.adjustNavline(1, this.resumeRef)}}
              className={this.state.linkIdxActive[1] ? styles.hoverActive : styles.hoverInactive}
              >
              Resume
            </Link>
          </li>
          <li ref={this.altRef}>
            <Link
              to="/altpage"
              
              onMouseEnter={() => {this.adjustNavline(2, this.altRef)}}
              className={this.state.linkIdxActive[2] ? styles.hoverActive : styles.hoverInactive}
              >
              Altpage
            </Link>
          </li>
          <li ref={this.linkedInRef}>
            <a
              href="https://linkedin.com/in/stephen-loquet"
              // target="_blank" rel="noreferrer"
            >
              <img src={linkedIn}
                onMouseEnter={() => {this.adjustNavline(3, this.linkedInRef)}}
                className={
                  `${this.state.linkIdxActive[3] ? styles.hoverActive : styles.hoverInactive}
                  ${styles.linkedIn}`
                }
                alt="linkedIn"
              />
            </a>
          </li>
          <li ref={this.gitHubRef} >
            <a
              href="https://github.com/sloq"
            >
              <img
                src={gitHub}
                onMouseEnter={() => {this.adjustNavline(4, this.gitHubRef)}}
                alt="gitHub"
                className={
                  `${this.state.linkIdxActive[4] ? styles.hoverActive : styles.hoverInactive}
                  ${styles.gitHub}`
                }
              />
            </a>
          </li>
        </ul>
        <span className={styles.underlineSpan} style={this.state.underline}/>
      </nav>
    );
  }
}

export default Navbar;