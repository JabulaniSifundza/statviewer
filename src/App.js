import {createGlobalStyle} from "styled-components";
import './App.css';
import PlayerSearch from './components/PlayerSearch';
import PlayerInfoCard from './components/PlayerInfoCard';
import Statisticgraphs from './components/Statisticgraphs';

import {StatisticalContextProvider} from './context/Statscontext';



function App() {
  return (
    <div className="App">
	<GlobalStyle />
	<StatisticalContextProvider>
      	<PlayerSearch />
		<PlayerInfoCard />
		<Statisticgraphs />
	  </StatisticalContextProvider>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
body{
	font-family: 'Poppins', sans-serif;
}
`

export default App;
