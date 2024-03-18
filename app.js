document.querySelector('button').addEventListener('click', () => {
    var query = document.querySelector('input').value;
    axios.get('https://www.omdbapi.com/?t=' +query + '&apikey=9f6f9cdf').then(function (res) {
        console.log(res.data);
    });
});