import './App.css';
import ProgressCircle from './components/Progress';
import Card from './components/Card';
import Selector from './components/Selector';
import MovieCard from './components/SearchCard';
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';

const App = () => {
  return (
    <div className="App">
      <ProgressCircle />

      <Card />

      <p>Dark</p>
      <Selector />
      <p>
        Light default color is white backgraoud should be dark to use this one
      </p>
      <Selector view="light" />
      <div>Search card</div>
      <MovieCard />
      <div style={{ margin: '0 20%' }}>
        Search Bar
        <SearchBar />
      </div>
      <Loading />
    </div>
  );
};

export default App;
