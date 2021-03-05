import './RankCircle.css';
import React from 'react';
import {
    first_arc_border_color, 
    second_arc_border_color,
    second_arc_transform
} from './ColorFunctions';

const RankCircle = (props) => {
    // Style for first arc
    const firstArcStyle = {
        borderColor: first_arc_border_color(props.rank),
    };
    // Style for second arc
    const secondArcStyle = {
        borderColor: second_arc_border_color(props.rank),
        transform: "rotate(" + second_arc_transform(props.rank) + "deg)",
    };

    return (
        <div>
            <div className="circle">
                <div className="rank-text">{props.rank}</div>
            </div>
            <div className="arc" style={firstArcStyle}></div>
            <div className="arc" style={secondArcStyle}></div>
        </div>
    );
}

export default RankCircle;