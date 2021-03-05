import './Table.css';
import React from 'react';
import { pick_min_color } from './ColorFunctions';

const percentFormat = (value) => {
    return (value * 100).toFixed(1) + '%';
}

const Table = (props) => {

    const value = percentFormat(props.value);
    const secMedian = percentFormat(props.secMedian);
    const indMedian = percentFormat(props.indMedian);

    const secRankStyle = {
        backgroundColor: pick_min_color(props.secRank),
        fontWeight: 600,
    };
    const indRankStyle = {
        backgroundColor: pick_min_color(props.indRank),
        fontWeight: 600,
    };

    return (
        <div className="table-container">
            <table className="stats-table">
                <tbody>
                    <tr>
                        <td className="stats-table top left">{props.ticker}</td>
                        <td className="stats-table top right">{value}</td>
                    </tr>
                    <tr>
                        <td className="stats-table main left">Sector Median</td>
                        <td className="stats-table main right">{secMedian}</td>
                    </tr>
                    <tr>
                        <td className="stats-table main left">Sector Rank</td>
                        <td className="stats-table main right" style={secRankStyle}>{props.secRank}</td>
                    </tr>
                    <tr>
                        <td className="stats-table main left">Industry Median</td>
                        <td className="stats-table main right">{indMedian}</td>
                    </tr>
                    <tr>
                        <td className="stats-table main left">Industry Rank</td>
                        <td className="stats-table main right" style={indRankStyle}>{props.indRank}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;