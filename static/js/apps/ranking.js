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
        updateRank(result.composite_rank, "comp-rank", "comp-rank-arc-1", "comp-rank-arc-2");

        // Value Rank
        updateRank(result.value_rank, "value-rank", "value-rank-arc-1", "value-rank-arc-2");

        // Momentum Rank
        updateRank(result.mom_rank, "mom-rank", "mom-rank-arc-1", "mom-rank-arc-2");
            
        // Quality Rank
        updateRank(result.quality_rank, "quality-rank", "quality-rank-arc-1", "quality-rank-arc-2");

        // Volatility Rank
        updateRank(result.vol_rank, "vol-rank", "vol-rank-arc-1", "vol-rank-arc-2");
            
        // Profitability Rank
        updateRank(result.profit_rank, "profit-rank", "profit-rank-arc-1", "profit-rank-arc-2");

        // Financing Rank
        updateRank(result.finance_rank, "fin-rank", "fin-rank-arc-1", "fin-rank-arc-2");

        // Safety Rank
        updateRank(result.safety_rank, "safe-rank", "safe-rank-arc-1", "safe-rank-arc-2");


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

function updateRank(rank, text_id, arc_id_1, arc_id_2) {
	document.getElementById(text_id).innerHTML = rank;
    document.getElementById(arc_id_1).style.borderColor = first_arc_border_color(rank);
    document.getElementById(arc_id_2).style.borderColor = second_arc_border_color(rank);
    document.getElementById(arc_id_2).style.transform =
        "rotate(" + second_arc_transform(rank) + "deg)";

    if (rank === null) {
        document.getElementById(text_id).innerHTML = null_value;
        document.getElementById(text_id).style.color = null_text_color;
        document.getElementById(arc_id_1).style.borderColor = null_border_color;
        document.getElementById(arc_id_2).style.borderColor = null_border_color;
    }
}
