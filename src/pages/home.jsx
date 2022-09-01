import React from 'react';
import "./home.css";
import { calculateBrow, calculateLeftPupil, calculateRightPupil, calculatePupilHeight } from "./faceFunctions";


// hair bounce/swish in transform add rotate -5/5 deg alternate
// must also track while on nav bar
// add decoration based on month

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rEyeMove: {
            left : '40%',
            top: '50%',
        },
        lEyeMove: {
            left : '60%',
            top: '50%',
        },
        lBrowMove: {
            transform: 'rotate(-8deg)',
        },
        rBrowMove: {
            transform: 'rotate(8deg)',
        },
      }
      this.leftEyeRef = React.createRef();
      this.rightEyeRef = React.createRef();
      this.headRef = React.createRef();
      this.setCoordinates = this.setCoordinates.bind(this);
    }

    setCoordinates(e, rHead) {
        const xVal = e.pageX - e.target.offsetLeft;
        let yVal = e.pageY - e.target.offsetTop;
        const headRec = rHead.current.getBoundingClientRect();

        const leftEdge = headRec.left;
        const rightEdge = headRec.left + headRec.width;
        const centerWidthLeft = headRec.left + 0.35 * (headRec.width);
        const centerWidthRight = headRec.left + 0.66 * (headRec.width);
        const centerWidthTrue = headRec.left + 0.5 * (headRec.width);
        const centerHeight = headRec.top + 0.5 * headRec.height;
        const yBottom = headRec.top + headRec.height;
        const yTop = headRec.top;
        
        let lMoveX = calculateLeftPupil(xVal, centerWidthLeft, centerWidthTrue, leftEdge);
        let rMoveX = calculateRightPupil(xVal, centerWidthTrue, centerWidthRight, rightEdge);
        let yMove = calculatePupilHeight(yVal, centerHeight, yBottom, yTop);
        let bMoveLeftInt = calculateBrow(yVal, yTop, yBottom);
        let bMoveRightInt = -1 * bMoveLeftInt;
        let bMoveLeft = {transform: `rotate(${bMoveLeftInt}deg)`}
        let bMoveRight = {transform: `rotate(${bMoveRightInt}deg)`}

        const lMove = {
            left : lMoveX,
            top: yMove,
        };
        
        const rMove = {
            left : rMoveX,
            top: yMove,
        };

        this.setState({rEyeMove: rMove, lEyeMove: lMove, lBrowMove: bMoveLeft, rBrowMove: bMoveRight});
    }

    
    
    render() {
        return (
            //need to check size for clasname of body to assign padding for navbar
            <div className="home topPadded" onMouseMove={(e) => {this.setCoordinates(e, this.headRef)}}>
                <h1>This is the Homepage</h1>

                <div className="lozenge">
                    <div className="head"
                        ref={this.headRef}
                    >
                        <div className="hair"></div>
                        <div className="ears">
                            <div className="ear ear-left"></div>
                            <div className="ear ear-right"></div>
                        </div>
                        <div className="face">
                            <div className="beard">
                                <div className="mole"></div>
                                <div className="mouth">
                                    <div className="tongue"></div>
                                    <div className="teeth"></div>
                                </div>
                            </div>
                            <div className="eyes">
                                <div className={`${this.state.lEyeMove} eye eye-left`}>
                                    <div
                                        className="pupil"
                                        ref={this.leftEyeRef}
                                        style={this.state.lEyeMove}
                                    >
                                    </div>
                                    <div className={`${this.state.lBrowMove} brow`} style={this.state.lBrowMove}></div>
                                </div>
                                <div className={`${this.state.rEyeMove} eye eye-right`}>
                                    <div
                                        className="pupil"
                                        ref={this.rightEyeRef}
                                        style={this.state.rEyeMove}
                                    >    
                                    </div>
                                    <div className={`${this.state.rBrowMove} brow`} style={this.state.rBrowMove}></div>
                                </div>
                            </div>
                            <div className="sideburns"></div>
                            <div className="nose"></div>
                            <div className="quiff"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;