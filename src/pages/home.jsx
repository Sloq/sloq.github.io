import React from 'react';
import "./home.css";


// programatically add freckles
// change brows to bricks, add border, then easier to move too
// move eyes, brows with mouse
// hair bounce/swish in transform add rotate -5/5 deg alternate
// add decoration based on month

function Home() {
    return (
        <div>
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
                            <div className="pupil"></div>
                            <div className="brow"></div>
                            </div>
                            <div className="eye eye-right">
                            <div className="pupil"></div>
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

export default Home;