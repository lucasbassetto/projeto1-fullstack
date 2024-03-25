let input = document.querySelector('input');
let button = document.querySelector('button');
let movieTitle = document.querySelector('.title');
let movieYear = document.querySelector('.year');
let movieRuntime = document.querySelector('.runtime');
let movieDirector = document.querySelector('.director');
let movieActors = document.querySelector('.actors');
let movieGenre = document.querySelector('.genre');
let movieReleased = document.querySelector('.released');

button.addEventListener('click', () => {
    var query = input.value;
    axios.get('https://www.omdbapi.com/?t=' + query + '&apikey=9f6f9cdf')
        .then(function (response) {
            movieTitle.innerHTML = response.data.Title;
            movieYear.innerHTML = response.data.Year;
            movieRuntime.innerHTML = response.data.Runtime;
            movieDirector.innerHTML = response.data.Director;
            movieActors.innerHTML = response.data.Actors;
            movieGenre.innerHTML = response.data.Genre;
            movieReleased.innerHTML = response.data.Released;
            
            console.log(response.data);
        })
    });