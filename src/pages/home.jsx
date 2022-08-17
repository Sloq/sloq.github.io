import React from 'react';
import "./home.css";


// move eyes, brows with mouse
// hair bounce/swish in transform add rotate -5/5 deg alternate
// add decoration based on month

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       x: 0,
       y: 0,
       leftEyePos: {
        left: '0px',
        top: '0px',
      },
      rightEyePos: {
        left: '0px',
        top: '0px',
      },
      }
      this.leftEyeRef = React.createRef();
      this.rightEyeRef = React.createRef();
      this.setCoordinates = this.setCoordinates.bind(this);
      this.updateEyePos = this.updateEyePos.bind(this);
    }

    componentDidMount() {
        const leftRec = this.leftEyeRef.current.getBoundingClientRect();
        const rightRec = this.rightEyeRef.current.getBoundingClientRect();
        const leftPos = {
            top: leftRec.top,
            left: leftRec.left,
        };
        const rightPos = {
            top: rightRec.top,
            left: leftRec.left,
        };

        this.setState({
        leftEyePos: leftPos,
        rightEyePos: rightPos,
        });
    }

    // just to fix coords if screen resize
    updateEyePos(lEye, rEye) {
        const leftRec = lEye.current.getBoundingClientRect();
        const rightRec = rEye.current.getBoundingClientRect();

        const leftPos = {
            top: leftRec.top,
            left: leftRec.left,
        };

        const rightPos = {
            top: rightRec.top,
            left: rightRec.left,
        };

        this.setState({
        leftEyePos: leftPos,
        rightEyePos: rightPos,
        });
    }

    setCoordinates(e) {
        const xVal = e.pageX - e.target.offsetLeft;
        const yVal = e.pageY - e.target.offsetTop;
        const leftRefPos = this.leftEyeRef.current.getBoundingClientRect();
        const rightRefPos = this.rightEyeRef.current.getBoundingClientRect();

        this.setState({x: xVal, y: yVal});
    }
    
    render() {
        return (
            //need to check size for clasname of body to assign padding for navbar
            <div className="home topPadded" onMouseMove={this.setCoordinates} onMouseEnter={() => {this.updateEyePos(this.leftEyeRef, this.rightEyeRef)}}>
                <h1>This is the Homepage</h1>

                <div className="lozenge">
                    <div className="head">
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
                                <div className="eye eye-left">
                                    <div
                                        className="pupil"
                                        ref={this.leftEyeRef}
                                    >
                                    </div>
                                    <div className="brow"></div>
                                </div>
                                <div className="eye eye-right">
                                    <div
                                        className="pupil"
                                        ref={this.rightEyeRef}
                                    >    
                                    </div>
                                    <div className="brow"></div>
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