import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar(props) {

    function handlePageChange(newPage) {
        props.updatePageFunction(newPage)
        console.log(props.pageState)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a
                                // href="#about"
                                onClick={() => handlePageChange('About')}
                                // This is a conditional (ternary) operator that checks to see if the current page is "About"
                                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                                className={props.pageState === 'About' ? 'nav-link active' : 'nav-link text-light'}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                // href="#portfolio"
                                onClick={() => handlePageChange('Portfolio')}
                                // Check to see if the props.pageState is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={props.pageState === 'Portfolio' ? 'nav-link active' : 'nav-link text-light'}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                // href="#contact"
                                onClick={() => handlePageChange('Contact')}
                                // Check to see if the props.pageState is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={props.pageState === 'Contact' ? 'nav-link active' : 'nav-link text-light'}
                            >
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                // href="resume"
                                onClick={() => handlePageChange('Resume')}
                                // Check to see if the props.pageState is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                                className={props.pageState === 'Resume' ? 'nav-link active' : 'nav-link text-light'}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
