function querySelector(selector) {
    return document.querySelector(selector);
}

function clearFields() {
    for (let selector in selectors) {
        querySelector(selector).innerHTML = '';
    }
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
        clearFields();
        return;
    }
    errorDiv.innerHTML = '';
    clearFields();
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
        })
        .catch(function (error) {
            errorDiv.innerHTML = 'Ocorreu um erro ao buscar os dados do filme.';
        });
    input.value = '';
});
