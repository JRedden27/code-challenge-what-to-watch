import Header from "./components/Header";
import Container from "./components/Container";
import MovieCard from "./components/MovieCard";
import MovieData from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Container title="Current Search">
        <MovieCard
          title={MovieData.Title}
          description={MovieData.Plot}
          img={MovieData.Poster}
          date={MovieData.Released}
          rating={MovieData.imdbRating}
          updated="3 mins ago"
        />
      </Container>
      <Container title="Previous 3 Searches" />
    </div>
  );
}

export default App;
