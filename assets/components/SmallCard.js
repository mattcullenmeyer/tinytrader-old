import React from 'react';

const SmallCard = (props) => {
	return (
		<div className={`rank-container ${props.margin}`}>
            <h3 className="rank-type">{props.title}</h3>
            <div>{props.children}</div>
        </div>
	)
};

SmallCard.defaultProps = {
    margin: ''
};

export default SmallCard;