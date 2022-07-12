import React from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function PageContent(props) {
    const renderPage = () => {
        if (props.pageState === 'Portfolio') {
            return <Portfolio />;
        }
        if (props.pageState === 'Contact') {
            return <Contact />;
        }
        if (props.pageState === 'Resume') {
            return <Resume />;
        }
        if (props.pageState === 'About') {
            return <About />;
        }
    };

    return (
        <div className="customBorder p-1 m-1">
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}

export default PageContent;

