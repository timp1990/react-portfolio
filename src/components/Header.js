import React, { useState } from 'react';
import Navbar from './Navbar';

export default function Header() {
    return (
        <div className="container">
            <div className="row">
                <h1 className="col-xs-6">Portfolio</h1>
                <Navbar />
            </div>
        </div>
    );
}
