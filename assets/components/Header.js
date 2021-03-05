import './Header.css';
import React from 'react';

const dateFormat = (date) => {
    const raw_date = new Date(date);
    return raw_date.toLocaleDateString('en-US', {month: "short", day: "numeric", year: "numeric"});
}

const Header = (props) => {
    const date = dateFormat(props.date);

    return (
        <div>
            <h1 className="company-name">
                <span>{props.company_name}</span>
                <span className="ticker-symbol"> ({props.ticker})</span>
            </h1>
            <div className="timestamp">Market close {date}</div>
        </div>
    );
};

export default Header;