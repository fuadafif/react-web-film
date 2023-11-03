import './App.css';
import NavBar from './components/NavBar'
import Intro from './components/Intro';
import Trending from './components/Trending'
import Superhero from './components/Superhero';
import "./style/landingpage.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG'>
        <NavBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* trending section */}
      <div className='trending'>
        <Trending />
      </div>
      {/* end of trending section */}

      {/* superhero section */}
      <div className='superhero'>
        <Superhero />
      </div>
      {/* end of superhero section */}

    </div>
  );
}

export default App;
