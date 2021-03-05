
// Colors for tickers values
const maj_color = ['#F52B41', '#F74D3F', '#F8703D', '#FA923A', '#FBB538', '#FDD736', '#C4D444', '#8BD052', '#51CD60', '#18C96E'];
const min_color = ['#EEC0CC', '#EEC9CB', '#EED1CB', '#EFDACA', '#EFE3CA', '#F0EBC9', '#E1EACD', '#D3EAD0', '#C5E9D4', '#B6E8D7'];

// Text and colors for null values
const null_value = 'n/a';
const null_text_color = '#898989';
const null_border_color = 'rgb(248,250,252)';

const transparent = ' transparent';


export const pick_maj_color = (rank) => {
    if (rank === 0) {
        return maj_color[0];
    } else {
        return maj_color[Math.ceil(rank / 10) - 1];
    }
}

export const pick_min_color = (rank) => {
    if (rank === 0) {
        return min_color[0];
    } else {
        return min_color[Math.ceil(rank / 10) - 1];
    }
}

export const first_arc_border_color = (rank) => {
    const color = pick_maj_color(rank);
    let colors = '';

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

export const second_arc_border_color = (rank) => {
    const color = pick_maj_color(rank);
    let colors = '';

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

export const second_arc_transform = (rank) => {
    const total_degrees = rank * 360 / 100;
    let degrees = null;

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