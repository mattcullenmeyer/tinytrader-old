import './RankTag.css';
import React from 'react';

const RankTag = (props) => {
    return (
        <div className="rank-tag">{props.name}</div>
    );
};

export default RankTag;