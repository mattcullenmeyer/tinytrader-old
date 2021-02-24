// get pathname from current url
const ticker_path = window.location.pathname;
// regex to replace all instances of forward slashes
const ticker = ticker_path.replace(/\//g, '');

// call ticker api to get ticker id 
// from ticker symbol
fetch(`/api/ticker/${ticker}/`)
.then(response => response.json())
.then(result => {
	const ticker_id = result.id;
	
	// get metric data
	fetch(`/api/metric/${ticker_id}/`)
	.then(response => response.json())
	.then(result => {
		//console.log(result)

        // Overall Rank
		document.getElementById("comp-rank").innerHTML = result.composite_rank;
        document.getElementById("comp-rank-arc-1").style.borderColor = first_arc_border_color(result.composite_rank);
        document.getElementById("comp-rank-arc-2").style.borderColor = second_arc_border_color(result.composite_rank);
        document.getElementById("comp-rank-arc-2").style.transform =
            "rotate(" + second_arc_transform(result.composite_rank) + "deg)";

        if (result.composite_rank === null) {
            document.getElementById("comp-rank").innerHTML = null_value;
            document.getElementById("comp-rank").style.color = null_text_color;
            document.getElementById("comp-rank-arc-1").style.borderColor = null_border_color;
            document.getElementById("comp-rank-arc-2").style.borderColor = null_border_color;
        }

        // Value Rank
        document.getElementById("value-rank").innerHTML = result.value_rank;
        document.getElementById("value-rank-arc-1").style.borderColor = first_arc_border_color(result.value_rank);
        document.getElementById("value-rank-arc-2").style.borderColor = second_arc_border_color(result.value_rank);
        document.getElementById("value-rank-arc-2").style.transform =
            "rotate(" + second_arc_transform(result.value_rank) + "deg)";
            
        if (result.value_rank === null) {
            document.getElementById("value-rank").innerHTML = null_value;
            document.getElementById("value-rank").style.color = null_text_color;
            document.getElementById("value-rank-arc-1").style.borderColor = null_border_color;
            document.getElementById("value-rank-arc-2").style.borderColor = null_border_color;
        }

        // Momentum Rank
        document.getElementById("mom-rank").innerHTML = result.mom_rank;
        document.getElementById("mom-rank-arc-1").style.borderColor = first_arc_border_color(result.mom_rank);
        document.getElementById("mom-rank-arc-2").style.borderColor = second_arc_border_color(result.mom_rank);
        document.getElementById("mom-rank-arc-2").style.transform =
            "rotate(" + second_arc_transform(result.mom_rank) + "deg)";
            
        if (result.mom_rank === null) {
            document.getElementById("mom-rank").innerHTML = 'n/a';
            document.getElementById("mom-rank").style.color = '#898989';
            document.getElementById("mom-rank-arc-1").style.borderColor = 'rgb(248,250,252)';
            document.getElementById("mom-rank-arc-2").style.borderColor = 'rgb(248,250,252)';
        }
            
            
        // Quality Rank
        document.getElementById("quality-rank").innerHTML = result.quality_rank;
        document.getElementById("quality-rank-arc-1").style.borderColor = first_arc_border_color(result.quality_rank);
        document.getElementById("quality-rank-arc-2").style.borderColor = second_arc_border_color(result.quality_rank);
        document.getElementById("quality-rank-arc-2").style.transform =
            "rotate(" + second_arc_transform(result.quality_rank) + "deg)";
            
        if (result.quality_rank === null) {
            document.getElementById("quality-rank").innerHTML = 'n/a';
            document.getElementById("quality-rank").style.color = '#898989';
            document.getElementById("quality-rank-arc-1").style.borderColor = 'rgb(248,250,252)';
            document.getElementById("quality-rank-arc-2").style.borderColor = 'rgb(248,250,252)';
        }

        // Volatility Rank
        document.getElementById("vol-rank").innerHTML = result.vol_rank;
        document.getElementById("vol-rank-arc-1").style.borderColor = first_arc_border_color(result.vol_rank);
        document.getElementById("vol-rank-arc-2").style.borderColor = second_arc_border_color(result.vol_rank);
        document.getElementById("vol-rank-arc-2").style.transform =
            "rotate(" + second_arc_transform(result.vol_rank) + "deg)";
            
        if (result.vol_rank === null) {
            document.getElementById("vol-rank").innerHTML = 'n/a';
            document.getElementById("vol-rank").style.color = '#898989';
            document.getElementById("vol-rank-arc-1").style.borderColor = 'rgb(248,250,252)';
            document.getElementById("vol-rank-arc-2").style.borderColor = 'rgb(248,250,252)';
        }
            
            
        // Profitability Rank
        document.getElementById("profit-rank").innerHTML = result.profit_rank;
        document.getElementById("profit-rank-arc-1").style.borderColor = first_arc_border_color(result.profit_rank);
        document.getElementById("profit-rank-arc-2").style.borderColor = second_arc_border_color(result.profit_rank);
        document.getElementById("profit-rank-arc-2").style.transform =
            "rotate(" + second_arc_transform(result.profit_rank) + "deg)";
            
        if (result.profit_rank === null) {
            document.getElementById("profit-rank").innerHTML = 'n/a';
            document.getElementById("profit-rank").style.color = '#898989';
            document.getElementById("profit-rank-arc-1").style.borderColor = 'rgb(248,250,252)';
            document.getElementById("profit-rank-arc-2").style.borderColor = 'rgb(248,250,252)';
        }
            
            
        // Financial Strength Rank
        document.getElementById("fin-rank").innerHTML = result.finance_rank;
        document.getElementById("fin-rank-arc-1").style.borderColor = first_arc_border_color(result.finance_rank);
        document.getElementById("fin-rank-arc-2").style.borderColor = second_arc_border_color(result.finance_rank);
        document.getElementById("fin-rank-arc-2").style.transform =
            "rotate(" + second_arc_transform(result.finance_rank) + "deg)";
            
        if (result.finance_rank === null) {
            document.getElementById("fin-rank").innerHTML = 'n/a';
            document.getElementById("fin-rank").style.color = '#898989';
            document.getElementById("fin-rank-arc-1").style.borderColor = 'rgb(248,250,252)';
            document.getElementById("fin-rank-arc-2").style.borderColor = 'rgb(248,250,252)';
        }
            
            
        // Accounting Quality Rank
        document.getElementById("safe-rank").innerHTML = result.safety_rank;
        document.getElementById("safe-rank-arc-1").style.borderColor = first_arc_border_color(result.safety_rank);
        document.getElementById("safe-rank-arc-2").style.borderColor = second_arc_border_color(result.safety_rank);
        document.getElementById("safe-rank-arc-2").style.transform =
            "rotate(" + second_arc_transform(result.safety_rank) + "deg)";
            
        if (result.safety_rank === null) {
            document.getElementById("safe-rank").innerHTML = 'n/a';
            document.getElementById("safe-rank").style.color = '#898989';
            document.getElementById("safe-rank-arc-1").style.borderColor = 'rgb(248,250,252)';
            document.getElementById("safe-rank-arc-2").style.borderColor = 'rgb(248,250,252)';
        }

	})
})



// Colors for tickers values
const maj_color = ['#F52B41', '#F74D3F', '#F8703D', '#FA923A', '#FBB538', '#FDD736', '#C4D444', '#8BD052', '#51CD60', '#18C96E'];
const min_color = ['#EEC0CC', '#EEC9CB', '#EED1CB', '#EFDACA', '#EFE3CA', '#F0EBC9', '#E1EACD', '#D3EAD0', '#C5E9D4', '#B6E8D7'];

// Text and colors for null values
const null_value = 'n/a';
const null_text_color = '#898989';
const null_border_color = 'rgb(248,250,252)';

// Functions to pick colors for ticker values
// need to add a small amount in case rank rounded down to zero
function pick_maj_color(rank) {
    if (rank === 0) {
        return maj_color[0];
    } else {
        return maj_color[Math.ceil(rank / 10) - 1];
    }
}
function pick_min_color(rank) {
    if (rank === 0) {
        return min_color[0];
    } else {
        return min_color[Math.ceil(rank / 10) - 1];
    }
}

transparent = ' transparent';

function first_arc_border_color(rank) {
    color = pick_maj_color(rank);
    if (rank < 50) {
        colors = color + transparent.repeat(3);
    } else if (rank < 75) {
        colors = color + ' ' + color + transparent.repeat(2);
    } else if (rank < 100) {
        colors = color + ' ' + color + ' ' + color + ' transparent';
    } else {
        colors = color + ' ' + color + ' ' + color + ' ' + color;
    }
    return colors;
}

function second_arc_border_color(rank) {
    color = pick_maj_color(rank);
    if (rank < 25) {
        colors = 'rgb(248,250,252)' + transparent.repeat(3);
    } else if (rank < 50) {
        colors = color + ' ' + transparent.repeat(3);
    } else if (rank < 75) {
        colors = color + ' ' + color + transparent.repeat(2);
    } else if (rank < 100) {
        colors = color + ' ' + color + ' ' + color + ' transparent';
    } else {
        colors = color + ' ' + color + ' ' + color + ' ' + color;
    }
    return colors;
}

function second_arc_transform(rank) {
    total_degrees = rank * 360 / 100;
    if (rank < 25) {
        degrees = Math.round(total_degrees + 45);
    } else if (rank < 50) {
        degrees = Math.round(total_degrees + 45 - 90);
    } else if (rank < 75) {
        degrees = Math.round(total_degrees + 45 - 180);
    } else if (rank < 100) {
        degrees = Math.round(total_degrees + 45 - 270);
    } else {
        degrees = 45;
    }
    return degrees;
}