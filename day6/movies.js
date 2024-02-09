class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

     getPG(moviesArray) {
        return moviesArray.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the class Movie
const movieInstance = new Movie("Casino Royale", "Eon Productions", "PG­13");

// Example usage of the getPG method
const movies = [
    new Movie("Casino Royale", "Eon Productions", "PG­13"),
    new Movie("The Shawshank Redemption", "Castle Rock Entertainment", "R"),
    new Movie("Harry Potter and the Philosopher's Stone", "Warner Bros.", "PG"),
    new Movie("Inception", "Syncopy", "PG­13"),
    new Movie("Titanic", "20th Century Studios", "PG­13")
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

    
