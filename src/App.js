import Header from "./components/Header";
import Container from "./components/Container";
import MovieCard from "./components/MovieCard";
import MovieData from "./data.json";
import axios from "axios";

function App() {
  const searchHandler = () => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=ab4daebf&t=${MovieData.Movies[0].Title}`
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <Header onSearch={searchHandler} />
      <Container title="Current Search">
        <MovieCard
          title={MovieData.Movies[0].Title}
          description={MovieData.Movies[0].Plot}
          img={MovieData.Movies[0].Poster}
          date={MovieData.Movies[0].Released}
          rating={MovieData.Movies[0].imdbRating}
          updated="3 mins ago"
        />
      </Container>
      <Container title="Previous 3 Searches">
        {MovieData.Movies.map((movie) => (
          <MovieCard
            key={Math.random()}
            title={movie.Title}
            description={movie.Plot}
            img={movie.Poster}
            date={movie.Released}
            rating={movie.imdbRating}
            updated="3 mins ago"
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
