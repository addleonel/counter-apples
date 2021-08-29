import React from 'react';

// styles
import '../assets/styles/Header.scss';

export default function Header() {
    return (
        <React.Fragment>
            <header className="header">
                <div className="header-items">
                    <h1 className="header-items__title">Welcome to Apples Counter</h1>
                    <p className="header-items__subtitle">Here you can add Apples to each boxes</p>
                </div>
            </header>
        </React.Fragment>
    );
}