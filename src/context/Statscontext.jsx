import {createContext, useState, useEffect} from 'react';
import Ballislife from '../apis/Ballislife';

export const StatisticalContext = createContext();

export const StatisticalContextProvider = ({children})=>{





	const searchByName = async (name)=>{
		const response = await Ballislife.get(`/players?search=${name}`, {
		})
		const data = response;
		let playerId = data.id;

		let getLastSeasonAvgs = (id)=>{
			let seasonAvg = Ballislife.get(`/season_averages?player_ids[]=${playerId}`)
		}

		let getSecondSeasonAvgs = (id)=>{
			let seasonAvg = Ballislife.get(`/season_averages?season=2020&player_ids[]=${playerId}`)
		}

		let getThirdSeasonAvgs = (id)=>{
			let seasonAvg = Ballislife.get(`/season_averages?season=2019&player_ids[]=${playerId}`)
		}

		let getFourthSeasonAvgs = (id)=>{
			let seasonAvg = Ballislife.get(`/season_averages?season=2018&player_ids[]=${playerId}`)
		}

		let getFifthSeasonAvgs = (id)=>{
			let seasonAvg = Ballislife.get(`/season_averages?season=2017&player_ids[]=${playerId}`)
		}
	}

}
