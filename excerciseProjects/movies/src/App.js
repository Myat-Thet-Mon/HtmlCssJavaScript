import logo from './logo.svg';
import './App.css';
import ShortMovie from './components/ShortMovie';


var data = [
  {
    imageUrl:"https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/1478x832.webp",
    category: "Drama",
    name: "Severance",
    short: "Adam Scott stars in this darkly gripping series from director Ben Stiller."
  },
  {
    imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/L79If4rL5GAF2ffGc7jBRg/1478x832.webp",
    category: "DOCUMENTARY",
    name:"Lincoln's Dilemma",
    short: "Diverse voices offer a 21st-century take on Lincoln’s legacy and stance on slavery."
  },
  {
    imageUrl: "https://is3-ssl.mzstatic.com/image/thumb/cyRvgYnPlaVn3rN2SDdW1Q/1478x832.webp",
    category: "DRAMA",
    name: "The Sky Is Everywhere",
    short: "A conflicted teen navigates first love—and first loss—using her vivid imagination."
  }
]; //fetch("api/moviesList/")

function App() {

 var shortMovieList = data.map(obj=> 
  <ShortMovie
    url= {obj.imageUrl}
    category= {obj.category}
    title={obj.name}
    summary={obj.short}
  />);
  return (
    <div className="App">
      <div class="firstrow">
        {shortMovieList}
      </div>
    </div>
  );
}

export default App;

