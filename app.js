function querySelector(selector) {
    return document.querySelector(selector);
}

let button = querySelector('button');
let input = querySelector('input');


let selectors = {
    '.title': 'Title',
    '.year': 'Year',
    '.runtime': 'Runtime',
    '.director': 'Director',
    '.actors': 'Actors',
    '.genre': 'Genre',
    '.released': 'Released',
    '.plot': 'Plot'
};

button.addEventListener('click', () => {
    let query = input.value;
    axios.get('https://www.omdbapi.com/?t=' + query + '&apikey=9f6f9cdf')
        .then(function (response) {
            let data = response.data;
            for (let selector in selectors) {
                let prop = selectors[selector];
                querySelector(selector).innerHTML = data[prop];
            }
            console.log(data);
        });
});
