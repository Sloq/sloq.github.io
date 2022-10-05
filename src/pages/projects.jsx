
import React from 'react';
import { useSelector} from "react-redux";

const Projects = () => {
    const mobile = useSelector(state => state.mobile.mobile);

    if (mobile) {
        // return <ProjectsMobile/>;
    }

    return (
        <div className='Projects'>
            {/* <a className='Projects-link' href={doc} download="StephenLoquet_Projects">Download My Projects</a> */}
            <div>My projects</div>
        </div>
    );
}
  
export default Projects;