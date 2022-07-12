import React from 'react';
import Navbar from './Navbar';

export default function Header(props) {
    return (
        <div className="customBorder m-1 p-1" >
            <div className="d-flex justify-content-between">
                <div className="col-xs-6 m-1">
                    <h1>Portfolio</h1>
                    <h3>Tim Polo (RPEng)</h3>
                </div>

                {/* We are passing the currentPage from state and the function to update it */}
                <Navbar pageState={props.pageState} updatePageFunction={props.updatePageFunction} />
            </div>
        </div>
    );
}
