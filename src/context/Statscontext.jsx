import {createContext, useState, useEffect} from 'react';
import Ballislife from '../apis/Ballislife';

export const StatisticalContext = createContext();

export const StatisticalContextProvider = ({children})=>{

	const [player, setPlayer] = useState([]);
	const [lastSeason, setLastSeason] = useState([]);
	const [secondSeason, setSecondSeason] = useState([]);
	const [thirdSeason, setThirdSeason] = useState([]);
	const [fourthSeason, setFourthSeason] = useState([]);
	const [fifthSeason, setFifthSeason] = useState([]);

	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [team, setTeam] = useState('');


	const searchByName = async (name)=>{
		const response = await Ballislife.get(`/players?search=${name}`, {
		})
		const data = response;
		console.log(data);
		let playerId = data.data.data[0].id;
		let playerData = data.data.data[0];
		console.log(playerData);

		let getLastSeasonAvgs = await Ballislife.get(`/season_averages?season=2021&player_ids[]=${playerId}`, {
		})

		let getSecondSeasonAvgs =  await Ballislife.get(`/season_averages?season=2020&player_ids[]=${playerId}`, {
		})

		let getThirdSeasonAvgs =  await Ballislife.get(`/season_averages?season=2019&player_ids[]=${playerId}`, {
		})

		let getFourthSeasonAvgs = await Ballislife.get(`/season_averages?season=2018&player_ids[]=${playerId}`, {
		})

		let getFifthSeasonAvgs = await Ballislife.get(`/season_averages?season=2017&player_ids[]=${playerId}`, {
		})

		let playerName = `${playerData.first_name} ${playerData.last_name}`;
		let playerPosition = `${playerData.position}`;
		let playerHeight = `${playerData.height_feet}'${playerData.height_inches}`;
		let playerWeight = `${playerData.weight_pounds} pounds`;
		let playerTeam = `${playerData.team.full_name}`;

		console.log(playerName);
		console.log(playerPosition);
		console.log(playerHeight);
		console.log(playerWeight);
		console.log(playerTeam);

		console.log(getLastSeasonAvgs);
		console.log(getSecondSeasonAvgs);
		console.log(getThirdSeasonAvgs);
		console.log(getFourthSeasonAvgs);
		console.log(getFifthSeasonAvgs);

		setLastSeason(getLastSeasonAvgs);
		setSecondSeason(getSecondSeasonAvgs);
		setThirdSeason(getThirdSeasonAvgs);
		setFourthSeason(getFourthSeasonAvgs);
		setFifthSeason(getFifthSeasonAvgs);
		setPlayer(playerData);

		setName(playerName);
		setPosition(playerPosition);
		setHeight(playerHeight);
		setWeight(playerWeight);
		setTeam(playerTeam);
	}


	return <StatisticalContext.Provider value={{searchByName, name, position, height, weight, team}} >
		{children}
	</StatisticalContext.Provider>
}
