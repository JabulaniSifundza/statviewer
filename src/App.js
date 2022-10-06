import {createGlobalStyle} from "styled-components";
import './App.css';
import PlayerSearch from './components/PlayerSearch';
import PlayerInfoCard from './components/PlayerInfoCard';
import {StatisticalContextProvider} from './context/Statscontext';



function App() {
  return (
    <div className="App">
	<GlobalStyle />
	<StatisticalContextProvider>
      	<PlayerSearch />
		<PlayerInfoCard />
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
