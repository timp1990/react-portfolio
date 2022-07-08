import React from 'react';

export default function Navbar() {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <nav className="main-header-menu">
            <section
                style={{
                    display: 'flex',
                    fontFamily: 'helvetica',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <div style={linkStyle}>
                    <p>Home</p>
                </div>
                <div style={linkStyle}>
                    <p>Login</p>
                </div>
                <div style={linkStyle}>
                    <p>Register</p>
                </div>
                <div style={linkStyle}>
                    <p>About</p>
                </div>
                <div style={linkStyle}>
                    <p>Contact</p>
                </div>
            </section>
        </nav>
    );
}
