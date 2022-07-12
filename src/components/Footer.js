import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Footer(props) {
    return (
        <div className="d-flex flex-column col justify-content-between w-100 mx-0 my-0 customBorder">
            <ul className="d-inline-flex flex-wrap column justify-content-between w-60 mx-1 contactli text-white mt-3">
                <li>0449 646 713</li>
                <li>tim@nambuccaeng.com</li>
                <li><a href="https://www.nambuccaeng.com/">nambuccaeng.com</a></li>
                <li><a href="https://github.com/timp1990/">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/tim-polo-042ab11bb/">LinkedIn</a></li>
            </ul>
        </div>
    );
}

export default Footer;