import Header from "./components/Header";
import Container from "./components/Container";
import MovieCard from "./components/MovieCard";
import MovieData from "./data.json";
import axios from "axios";

function App() {
  const getData = () => {
    axios.get("http://www.omdbapi.com/?apikey=ab4daebf&").then((response) => {
      console.log(response);
    });
  };

  getData();
  return (
    <div className="App">
      <Header />
      <Container title="Current Search">
        {/* {MovieData.Movies.map((movie) => ( */}
        <MovieCard
          title={MovieData.Movies[0].Title}
          description={MovieData.Movies[0].Plot}
          img={MovieData.Movies[0].Poster}
          date={MovieData.Movies[0].Released}
          rating={MovieData.Movies[0].imdbRating}
          updated="3 mins ago"
        />
        {/* ))} */}
      </Container>
      <Container title="Previous 3 Searches">
        {MovieData.Movies.map((movie) => (
          <MovieCard
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
