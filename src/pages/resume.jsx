import React from 'react';
import doc from '../StephenLoquet_Resume.pdf'

function Resume() {
    console.log("resume")
    return (
        <div>
            <a href={doc} download="StephenLoquet_Resume">Download My Resume</a>
            <object data={doc} type="application/pdf" width="100%" height="800">
                {/* <p>Alternative text - include a link <a href="http://sample.pdf">to the PDF!</a></p> */}
            </object>

        </div>
    );
}

export default Resume;