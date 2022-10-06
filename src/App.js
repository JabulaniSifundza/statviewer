import logo from './logo.svg';
import './App.css';
import PlayerSearch from './components/PlayerSearch';
import {StatisticalContextProvider} from './context/Statscontext';

function App() {
  return (
    <div className="App">
	<StatisticalContextProvider>
      	<PlayerSearch />
	  </StatisticalContextProvider>
    </div>
  );
}

export default App;
