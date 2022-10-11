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

	const [points, setPoints] = useState([]);
	const [threes, setThrees] = useState([]);
	const [shooting, setShooting] = useState([]);
	const [assists, setAssists] = useState([]);
	const [blocks, setBlocks] = useState([]);
	const [rebounds, setRebounds] = useState([]);
	const [minutes, setMinutes] = useState([]);


	
	
	
	
	

	

	const searchByName = async (name)=>{
		const response = await Ballislife.get(`/players?search=${name}`, {
		})
		const data = response;
		console.log(data);
		let playerId = data.data.data[0].id;
		let playerData = data.data.data[0];
		console.log(playerData);

		let getLastSeasonAvgs = await Ballislife.get(`/season_averages?season=2021&player_ids[]=${playerId}`, {
		});
		let lastSeasonPoints = getLastSeasonAvgs.data.data[0].pts;
		let lastSeasonShooting = getLastSeasonAvgs.data.data[0].fg_pct;
		let lastSeasonThrees = getLastSeasonAvgs.data.data[0].fg3_pct;
		let lastSeasonAst = getLastSeasonAvgs.data.data[0].ast;
		let lastSeasonBlk = getLastSeasonAvgs.data.data[0].blk;
		let lastSeasonReb = getLastSeasonAvgs.data.data[0].reb;
		let lastSeasonMinutes = getLastSeasonAvgs.data.data[0].min;
		console.log(lastSeasonPoints);

		let getSecondSeasonAvgs =  await Ballislife.get(`/season_averages?season=2020&player_ids[]=${playerId}`, {
		});
		let secondSeasonPoints = getSecondSeasonAvgs.data.data[0].pts;
		let secondSeasonShooting = getSecondSeasonAvgs.data.data[0].fg_pct;
		let secondSeasonThrees = getSecondSeasonAvgs.data.data[0].fg3_pct;
		let secondSeasonAst = getSecondSeasonAvgs.data.data[0].ast;
		let secondSeasonBlk = getSecondSeasonAvgs.data.data[0].blk;
		let secondSeasonReb = getSecondSeasonAvgs.data.data[0].reb;
		let secondSeasonMinutes = getSecondSeasonAvgs.data.data[0].min;


		let getThirdSeasonAvgs =  await Ballislife.get(`/season_averages?season=2019&player_ids[]=${playerId}`, {
		});
		let thirdSeasonPoints = getThirdSeasonAvgs.data.data[0].pts;
		let thirdSeasonShooting = getThirdSeasonAvgs.data.data[0].fg_pct;
		let thirdSeasonThrees = getThirdSeasonAvgs.data.data[0].fg3_pct;
		let thirdSeasonAst = getThirdSeasonAvgs.data.data[0].ast;
		let thirdSeasonBlk = getThirdSeasonAvgs.data.data[0].blk;
		let thirdSeasonReb = getThirdSeasonAvgs.data.data[0].reb;
		let thirdSeasonMinutes = getThirdSeasonAvgs.data.data[0].min;

		let getFourthSeasonAvgs = await Ballislife.get(`/season_averages?season=2018&player_ids[]=${playerId}`, {
		});
		let fourthSeasonPoints = getFourthSeasonAvgs.data.data[0].pts;
		let fourthSeasonShooting = getFourthSeasonAvgs.data.data[0].fg_pct;
		let fourthSeasonThrees = getFourthSeasonAvgs.data.data[0].fg3_pct;
		let fourthSeasonAst = getFourthSeasonAvgs.data.data[0].ast;
		let fourthSeasonBlk = getFourthSeasonAvgs.data.data[0].blk;
		let fourthSeasonReb = getFourthSeasonAvgs.data.data[0].reb;
		let fourthSeasonMinutes = getFourthSeasonAvgs.data.data[0].min;

		let getFifthSeasonAvgs = await Ballislife.get(`/season_averages?season=2017&player_ids[]=${playerId}`, {
		});
		let fifthSeasonPoints = getFifthSeasonAvgs.data.data[0].pts;
		let fifthSeasonShooting = getFifthSeasonAvgs.data.data[0].fg_pct;
		let fifthSeasonThrees = getFifthSeasonAvgs.data.data[0].fg3_pct;
		let fifthSeasonAst = getFifthSeasonAvgs.data.data[0].ast;
		let fifthSeasonBlk = getFifthSeasonAvgs.data.data[0].blk;
		let fifthSeasonReb = getFifthSeasonAvgs.data.data[0].reb;
		let fifthSeasonMinutes = getFifthSeasonAvgs.data.data[0].min;



		const getPointAverages = ()=>{
			let pointAverages = [lastSeasonPoints, secondSeasonPoints, thirdSeasonPoints, fourthSeasonPoints, fifthSeasonPoints];

			return pointAverages;
		};
		const getThreePointAverages = () =>{
			let threePointAverages = [lastSeasonThrees, secondSeasonThrees, thirdSeasonThrees, fourthSeasonThrees, fifthSeasonThrees];
			return threePointAverages;
		};
		const getShootingAverages = () =>{
			let shootingPctAverages = [lastSeasonShooting, secondSeasonShooting, thirdSeasonShooting, fourthSeasonShooting, fifthSeasonShooting];
		
			return shootingPctAverages;
		}

		const getAssistAverages = ()=>{
			let assistAverages = [lastSeasonAst, secondSeasonAst, thirdSeasonAst, fourthSeasonAst, fifthSeasonAst];
			
			return assistAverages;
		}

		const getBlockAverages = ()=>{
			let blockAverages = [lastSeasonBlk, secondSeasonBlk, thirdSeasonBlk, fourthSeasonBlk, fifthSeasonBlk];
			return blockAverages;
		}

		const getReboundAverages = ()=>{
			let reboundAverages = [lastSeasonReb, secondSeasonReb, thirdSeasonReb, fourthSeasonReb, fifthSeasonReb];
		
			return reboundAverages;
		}

		const getMinuteAverages = ()=>{
			let minutesAverage = [lastSeasonMinutes, secondSeasonMinutes, thirdSeasonMinutes, fourthSeasonMinutes, fifthSeasonMinutes];
			return minutesAverage;
		}

		let playerName = `${playerData.first_name} ${playerData.last_name}`;
		let playerPosition = `${playerData.position}`;
		let playerHeight = `${playerData.height_feet}'${playerData.height_inches}`;
		let playerWeight = `${playerData.weight_pounds} pounds`;
		let playerTeam = `${playerData.team.full_name}`;

		

		//setLastSeason(getLastSeasonAvgs);
		//setSecondSeason(getSecondSeasonAvgs);
		//setThirdSeason(getThirdSeasonAvgs);
		//setFourthSeason(getFourthSeasonAvgs);
		//setFifthSeason(getFifthSeasonAvgs);
		setPlayer(playerData);

		setName(playerName);
		setPosition(playerPosition);
		setHeight(playerHeight);
		setWeight(playerWeight);
		setTeam(playerTeam);

		setPoints(getPointAverages);
		setThrees(getThreePointAverages);
		setShooting(getShootingAverages);
		setAssists(getAssistAverages);
		setBlocks(getBlockAverages);
		setRebounds(getReboundAverages);
		setMinutes(getMinuteAverages);


	}
	return <StatisticalContext.Provider value={{searchByName, name, position, height, weight, team, points, threes, shooting, assists, blocks, rebounds, minutes}} >
		{children}
	</StatisticalContext.Provider>
}
