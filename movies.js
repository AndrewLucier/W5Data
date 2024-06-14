// set up an empty array that will hold the movies
var arrMovies = [];

// function to add a movie to the mpovies array
function addMovie(event){
    event.preventDefault(); // prevent the form from submitting and the page will not refresh
    // set up a pointer variable to the movie text input
    var txtMovieInput = document.getElementById("txtMovie");
    // set up a variable that holds the movie title
    var movieTitle = txtMovieInput.value.trim();

    // check to make sure a movie was actually entered
    if (movieTitle){
        // add the movie title to the array
        arrMovies.push(movieTitle);
        // sort the array so the movie titles are in alphabetic order
        arrMovies.sort();
        // clear the text from the input textbox
        txtMovieInput.value = "";
        // call the function to update the movies that appear on the page
        updateMovieList();
    }
}

// function to update the list of movies on the page
function updateMovieList(){
    // create an empty array to hold the html formatted movie list
    var arrMoviesFormatted = [];
    // pointer to the movie list div
    var divMovies = document.getElementById("divMovieList");

    // loop through the movie array
    for (var i=0; i < arrMovies.length; i++){
        // take the array item and format with some html
        arrMoviesFormatted.push("<div>" + arrMovies[i] + "</div>");
    }

    // turn the formatted list of movies into a string
    divMovies.innerHTML = arrMoviesFormatted.join('');
}

// function to clear the movies
function clearList(){
    // clear the movies array
    arrMovies = [];

    // call the function to update the movies that appear on the page
    updateMovieList();
}