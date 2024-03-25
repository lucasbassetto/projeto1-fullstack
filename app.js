function querySelector(selector) {
    return document.querySelector(selector);
}

let button = querySelector('button');
let input = querySelector('input');
let errorDiv = querySelector('#error');


let selectors = {
    '.title': 'Title',
    '.year': 'Year',
    '.runtime': 'Runtime',
    '.director': 'Director',
    '.actors': 'Actors',
    '.genre': 'Genre',
    '.released': 'Released',
    '.plot': 'Plot',
    '.awards': 'Awards',
    '.rating': 'imdbRating'
};

button.addEventListener('click', () => {
    let query = input.value;
    if (!query) {
        errorDiv.innerHTML = 'Por favor, insira um termo de busca.';
        return;
    }
    errorDiv.innerHTML = '';
    axios.get('https://www.omdbapi.com/?t=' + query + '&apikey=9f6f9cdf')
        .then(function (response) {
            if (response.data.Error) {
                errorDiv.innerHTML = response.data.Error;
                return;
            }
            let data = response.data;
            for (let selector in selectors) {
                let prop = selectors[selector];
                querySelector(selector).innerHTML = data[prop];
            }
            console.log(data);
        })
        .catch(function (error) {
            errorDiv.innerHTML = 'Ocorreu um erro ao buscar os dados do filme.';
            console.error(error);
        });
});