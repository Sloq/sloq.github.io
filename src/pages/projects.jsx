
import React from 'react';
import Squirtel from '../squirtle.gif'
import Books from '../better_books.png'
import { useSelector} from "react-redux";
import './projects.css'
import github_small from '../github_small.png'

const Projects = () => {
    const mobile = useSelector(state => state.mobile.mobile);
    let mobileFlag = '';
    if (mobile) {
        mobileFlag = 'mobile';
    }

    return (
        <div className='projects'>
            <div>
                <h2 className={`projectTitle ${mobileFlag}`}>My Projects</h2>
            </div>

            <div className='projectContainer'>
                <h2><a href="http://www.stephenloquet.com/Fire_Chief_Squirtle/">Fire Chief Squirtle</a></h2>
                <span className='subheaderDescription' >JavaScript Browser Game</span>

                <a href="http://www.stephenloquet.com/Fire_Chief_Squirtle/"><img  className="projectImage" src={Squirtel} alt="" /></a>

                <p className='projectText'>
                    Browser game built with only vanilla JavaScript and HTML canvas.
                    The game uses Canvas’s requestAnimationFrame methods to continually
                    render gameplay. I contructed the browser game with modular, object oriented 
                    design in mind, for quick implementation of new features. A node.js backend serves
                    request to a MongoDB to store high scores.
                </p>

                <a
                    href="https://github.com/Sloq/Fire_Chief_Squirtle"
                    className='repositoryLink'
                >
                    <img
                        src={github_small}
                        alt="github_Link"
                        className='smallGit'
                    />
                    Repository
                </a>
            </div>

            <div className='projectContainer'>
                <h2>BetterBooks</h2>
                <span className='subheaderDescription' >Full Stack Web App</span>
                
                <img className="projectImage" src={Books} alt="BetterBooks" />

                <p className='projectText'>
                    I was the sole developer of a book review web app
                    inspired by Goodreads. Betterbooks is a single-page
                    React/Redux web application which utilizes Ruby on
                    Rails in the backend. I implemented user authentication
                    using BCrypt and established session validation
                </p>

                <a
                    href="https://github.com/Sloq/BetterBooks"
                    className='repositoryLink'
                >
                    <img
                        src={github_small}
                        alt="github_Link"
                        className='smallGit'
                    />
                    Repository
                </a>
            </div>			
        </div>
    );
}
  
export default Projects;