import doc from '../StephenLoquet_Resume.pdf'

function ResumeMobile(props) {
    return (
        <div className='mobile-resume'>
            <p className='resume-blurb1'>If you are interested in viewing my resume please download it below, or view this page on your desktop browser.</p>
            <p className='resume-blurb1'>You can also find more information about me through LinkedIn, linked in the menu.</p>
            <a className='resume-link' href={doc} download="StephenLoquet_Resume">Download My Resume</a>
        </div>
    );
}

  export default ResumeMobile