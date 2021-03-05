import React from 'react';
import ReactDOM from "react-dom";
//import axios from 'axios';
import SmallCard from './SmallCard';
import RankCircle from './RankCircle';



class App extends React.Component {
    state = { 
        ticker: 'AAPL',
        metadata: [],
        metrics: [],
    };

    async componentDidMount() {
        // Get pathname from current url
        const ticker_path = window.location.pathname;
        // Regex to replace all instances of forward slashes
        const ticker = ticker_path.replace(/\//g, '');
        //console.log(ticker);
        //this.setState({ ticker: 'AAPL' });
        //console.log(this.state.ticker);
        
        // Get ticker id from ticker symbol
        const ticker_response = await fetch(`/api/ticker/${this.state.ticker}/`)
        const ticker_json = await ticker_response.json();
        const ticker_id = ticker_json.id;

        // Get metrics for company
        const metric_response = await fetch(`/api/metric/${ticker_id}/`)
        const metric_json = await metric_response.json();
        console.log(metric_json);

        // Get metadata for company
        const metadata_response = await fetch(`/api/metadata/${ticker_id}/`)
        const metadata_json = await metadata_response.json();
        console.log(metadata_json);
        
        this.setState({ metadata: metadata_json, metrics: metric_json });

    };

    render() {
        return (
            <div>
                <h1 className="company-name">
                    <span>{this.state.metadata.company_name}</span>
                    <span className="ticker-symbol"> ({this.state.ticker})</span>
                </h1>
                <div className="timestamp">Market close {this.state.metadata.last_updated}</div>

                <h2 className="sub-heading">Composite Ranks</h2>

                <SmallCard title="Overall" margin="factor-margin-1">
                    <RankCircle rank={this.state.metrics.composite_rank} />
                </SmallCard>

                <SmallCard title="Value" margin="factor-margin-2">
                    <RankCircle rank={this.state.metrics.value_rank} />
                </SmallCard>

                <SmallCard title="Momentum" margin="factor-margin-1">
                    <RankCircle rank={this.state.metrics.mom_rank} />
                </SmallCard>

                <SmallCard title="Quality">
                    <RankCircle rank={this.state.metrics.quality_rank} />
                </SmallCard>

                <h2 class="sub-heading">Quality Ranks</h2>

                <SmallCard title="Volatility" margin="factor-margin-1">
                    <RankCircle rank={this.state.metrics.vol_rank} />
                </SmallCard>

                <SmallCard title="Profitability" margin="factor-margin-2">
                    <RankCircle rank={this.state.metrics.profit_rank} />
                </SmallCard>

                <SmallCard title="Financing" margin="factor-margin-1">
                    <RankCircle rank={this.state.metrics.finance_rank} />
                </SmallCard>

                <SmallCard title="Safety">
                    <RankCircle rank={this.state.metrics.safety_rank} />
                </SmallCard>

            </div>
        );
    };
};

export default App;