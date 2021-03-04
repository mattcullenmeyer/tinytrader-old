import React from 'react';
import ReactDOM from "react-dom";
//import axios from 'axios';
import SmallCard from './SmallCard';




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
                <div class="timestamp">Market close {this.state.metadata.last_updated}</div>
                <h2 class="sub-heading">Composite Ranks</h2>
                <div>
                    <SmallCard 
                        title="Overall" 
                        rank={this.state.metrics.composite_rank} 
                        margin="factor-margin-1" 
                    />
                    <SmallCard title="Value" margin="factor-margin-2" />
                    <SmallCard title="Momentum" margin="factor-margin-1" />
                    <SmallCard title="Quality" />
                </div>
            </div>
        );
    };
};

export default App;