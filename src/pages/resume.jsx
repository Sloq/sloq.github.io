import React from 'react';
// import { connect } from 'react-redux';
import { useSelector} from "react-redux";
import "./resume.css";
import doc from '../StephenLoquet_Resume.pdf'
import ResumeMobile from './resumeMobile';

const Resume = () => {
    const mobile = useSelector(state => state.mobile.mobile);

    if (mobile) {
        return <ResumeMobile/>;
    }

    return (
        <div className='resume'>
            {/* <a className='resume-link' href={doc} download="StephenLoquet_Resume">Download My Resume</a> */}
            <object data={doc} type="application/pdf" width="100%" height="800">
            </object>

        </div>
    );
}
  
export default Resume;