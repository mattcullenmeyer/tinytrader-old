import './Card.css';
import React from 'react';

const sizeConfig = {
    small: {
        height: '16em'
    },
    large: {
        height: '26.5em' //'24.5em'
    }
};

const marginConfig = {
    left: {
        marginClass: 'margin-1'
    },
    middleLeft: {
        marginClass: 'margin-2'
    },
    middleRight: {
        marginClass: 'margin-1'
    },
    right: {
        marginClass: ''
    }
};

const Card = (props) => {
    const { height } = sizeConfig[props.size];
    const cardStyle = {
        height: height,
    };

    const { marginClass } = marginConfig[props.location];
    
    return (
		<div className={`card ${marginClass}`} style={cardStyle}>
            <h3 className="rank-type">{props.title}</h3>
            <div>{props.children}</div>
        </div>
	)
};

Card.defaultProps = {
    margin: '',
    location: ''
};

export default Card;