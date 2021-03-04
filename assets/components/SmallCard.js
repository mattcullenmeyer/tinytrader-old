import React from 'react';

const SmallCard = (props) => {
	return (
		<div className={`rank-container ${props.margin}`}>
            <h3 className="rank-type">{props.title}</h3>
            <div className="circle">
                <div className="rank-text">{props.rank}</div>
            </div>
            <div className="arc"></div>
            <div className="arc"></div>
        </div>
	)
};

SmallCard.defaultProps = {
    margin: ''
};

export default SmallCard;