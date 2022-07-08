import React, { useState } from 'react';
import Project from './Project';

export default function Header() {
    return (
        <div className="container">
            <div className="row">
                <h1 className="col-xs-6">Portfolio</h1>
                <Project />
            </div>
        </div>
    );
}