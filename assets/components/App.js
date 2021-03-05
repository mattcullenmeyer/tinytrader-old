import React from 'react';
import ReactDOM from "react-dom";
//import axios from 'axios';
import Card from './Card';
import RankCircle from './RankCircle';
import Table from './Table';



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

                <Card title="Overall" size="small" location="left" >
                    <RankCircle rank={this.state.metrics.composite_rank} />
                </Card>

                <Card title="Value" size="small" location="middleLeft">
                    <RankCircle rank={this.state.metrics.value_rank} />
                </Card>

                <Card title="Momentum" size="small" location="middleRight">
                    <RankCircle rank={this.state.metrics.mom_rank} />
                </Card>

                <Card title="Quality" size="small" location="right">
                    <RankCircle rank={this.state.metrics.quality_rank} />
                </Card>

                <h2 className="sub-heading">Quality Ranks</h2>

                <Card title="Volatility" size="small" location="left">
                    <RankCircle rank={this.state.metrics.vol_rank} />
                </Card>

                <Card title="Profitability" size="small" location="middleLeft">
                    <RankCircle rank={this.state.metrics.profit_rank} />
                </Card>

                <Card title="Financing" size="small" location="middleRight">
                    <RankCircle rank={this.state.metrics.finance_rank} />
                </Card>

                <Card title="Safety" size="small" location="right">
                    <RankCircle rank={this.state.metrics.safety_rank} />
                </Card>

                <h2 className="sub-heading">Individual Ranks</h2>

                <Card title="Earnings / Price" size="large" location="left">
                    <RankCircle rank={this.state.metrics.pe_sec_rank} />
                    <Table 
                        ticker={this.state.ticker} 
                        value={this.state.metrics.pe_value}
                        secMedian={this.state.metrics.pe_sec_median}
                        secRank={this.state.metrics.pe_sec_rank}
                        indMedian={this.state.metrics.pe_ind_median}
                        indRank={this.state.metrics.pe_ind_rank}
                    />
                </Card>

                <Card title="Book / Price" size="large" location="middleLeft">
                    <RankCircle rank={this.state.metrics.pb_sec_rank} />
                    <Table 
                        ticker={this.state.ticker} 
                        value={this.state.metrics.pb_value}
                        secMedian={this.state.metrics.pb_sec_median}
                        secRank={this.state.metrics.pb_sec_rank}
                        indMedian={this.state.metrics.pb_ind_median}
                        indRank={this.state.metrics.pb_ind_rank}
                    />
                </Card>

                <Card title="Sales / Price" size="large" location="middleRight">
                    <RankCircle rank={this.state.metrics.ps_sec_rank} />
                    <Table 
                        ticker={this.state.ticker} 
                        value={this.state.metrics.ps_value}
                        secMedian={this.state.metrics.ps_sec_median}
                        secRank={this.state.metrics.ps_sec_rank}
                        indMedian={this.state.metrics.ps_ind_median}
                        indRank={this.state.metrics.ps_ind_rank}
                    />
                </Card>

                <Card title="FCF / Price" size="large" location="right">
                    <RankCircle rank={this.state.metrics.pcf_sec_rank} />
                    <Table 
                        ticker={this.state.ticker} 
                        value={this.state.metrics.pcf_value}
                        secMedian={this.state.metrics.pcf_sec_median}
                        secRank={this.state.metrics.pcf_sec_rank}
                        indMedian={this.state.metrics.pcf_ind_median}
                        indRank={this.state.metrics.pcf_ind_rank}
                    />
                </Card>

            </div>
        );
    };
};

export default App;