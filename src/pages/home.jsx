import React from 'react';
import "./home.css";


// move eyes, brows with mouse
// hair bounce/swish in transform add rotate -5/5 deg alternate
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
        const yVal = e.pageY - e.target.offsetTop;
        const headRec = rHead.current.getBoundingClientRect();

        const leftEdge = headRec.left;
        const rightEdge = headRec.left + headRec.width;
        const centerWidthLeft = headRec.left + 0.35 * (headRec.width);
        const centerWidthRight = headRec.left + 0.66 * (headRec.width);
        const centerWidthTrue = headRec.left + 0.5 * (headRec.width);
        const centerHeight = headRec.top + 0.5 * headRec.height;
        const yBottom = headRec.top + headRec.height;
        
        let lMoveX = this.calculateLeftPupil(xVal, centerWidthLeft, centerWidthTrue, leftEdge);
        let rMoveX = this.calculateRightPupil(xVal, centerWidthTrue, centerWidthRight, rightEdge);
        let yMove = this.calculatePupilHeight(yVal, centerHeight, yBottom, headRec.top);
        let lBrowRotate = '';
        let rBrowRotate = '';

        const lMove = {
            left : lMoveX,
            top: yMove,
        };
        
        const rMove = {
            left : rMoveX,
            top: yMove,
        };

        this.setState({rEyeMove: rMove, lEyeMove: lMove});
    }

    calculateLeftPupil(xVal, centerWidthLeft, centerWidthTrue, leftEdge) {
        let lMoveX = '';
        if (xVal < leftEdge) {
            lMoveX = '35%';
        } else if (xVal > centerWidthTrue) {
            lMoveX = '65%';
        } else if (xVal <= centerWidthLeft) {
            let leftVal = 50 - (15 * ((centerWidthLeft - xVal) / (centerWidthLeft - leftEdge)));
            leftVal = Math.floor(leftVal);
            lMoveX = `${leftVal}%`
        } else if (xVal > centerWidthLeft) {
            let leftVal = 65 - 15 * ((centerWidthTrue - xVal)/ (centerWidthTrue - centerWidthLeft));
            leftVal = Math.floor(leftVal);
            lMoveX = `${leftVal}%`
        } else {
            lMoveX = '50%';
            console.log('lMoveX error')
        }

        return lMoveX;
    }

    calculateRightPupil(xVal, centerWidthTrue, centerWidthRight, rightEdge) {
        let rMoveX = '';

        if (xVal < centerWidthTrue) {
            rMoveX = '35%';
        } else if (xVal > rightEdge) {
            rMoveX = '65%';
        } else if (xVal <= centerWidthRight) {
            let rightVal = 50 - (15 * ((centerWidthRight - xVal) / (centerWidthRight - centerWidthTrue)));
            rightVal = Math.floor(rightVal);
            rMoveX = `${rightVal}%`
        } else if (xVal > centerWidthRight) {
            let rightVal = 50 + 15 * ((xVal - centerWidthRight)/ (rightEdge - centerWidthRight));
            rightVal = Math.floor(rightVal);
            rMoveX = `${rightVal}%`
        } else {
            rMoveX = '50%'
            console.log('rMoveX error')
        }

        return rMoveX;
    }

    calculatePupilHeight(yVal, centerHeight, yBottom, yTop) {
        let yMove = '';

        if (yVal < yTop) {
            yMove = '25%'
        } else if (yVal > (yBottom)) {
            yMove = '75%'
        } else if (yVal < centerHeight) {
            let yInt = 50 - 25 * ((centerHeight - yVal)/(centerHeight - yTop) )
            yInt = Math.floor(yInt);
            yMove = `${yInt}%`;
        } else if (yVal > centerHeight) {
            let yInt = 50 + 25 * ((yVal - centerHeight)/(yBottom - centerHeight))
            yInt = Math.floor(yInt);
            yMove = `${yInt}%`;
        }

        return yMove;
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
                                    <div className={`${this.state.lBrowMove} brow`}></div>
                                </div>
                                <div className={`${this.state.rEyeMove} eye eye-right`}>
                                    <div
                                        className="pupil"
                                        ref={this.rightEyeRef}
                                        style={this.state.rEyeMove}
                                    >    
                                    </div>
                                    <div className={`${this.state.rBrowMove} brow`}></div>
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