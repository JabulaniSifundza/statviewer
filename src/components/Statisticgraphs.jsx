import React, {useState, useEffect} from 'react';
import {useContext} from 'react';
import {StatisticalContext} from '../context/Statscontext';
import styled from "styled-components";

import AssistAvg from './AssistAvg';
import BlockAvg from './BlockAvg';
import MinuteAvg from './MinuteAvg';
import PointAvg from './PointAvg';
import ReboundAvg from './ReboundAvg';
import ScoringOverview from './ScoringOverview';
import ShootingPctAvg from './ShootingPctAvg';
import StatOverview from './StatOverview';
import ThreePointAvg from './ThreePointAvg';

export default function Statisticgraphs(){
	const desiredStat = [ "Blocks", "Overview", "Point Average", "Rebounds", "Scoring", "Shooting", "Three Pointers"];
	const [statType, setStatType] = useState('');

	return (
		<>
			<Container>
				<div className="options">
				{
					desiredStat.map(stats =>{
						return (
						<button type="button" key={stats} className="selectStat"
						onClick={()=> setStatType(stats)}>
						{stats}
						</button>
						)
					})
				}
				</div>

				<div className="statGraphs">
					<div>
						{statType === "Blocks" && (<BlockAvg />)}					
						{statType === "Overview" && (<StatOverview />)}
						{statType === "Point Average" && (<PointAvg />)}
						{statType === "Rebounds" && (<ReboundAvg />)}
						{statType === "Scoring" && (<ScoringOverview />)}
						{statType === "Shooting" && (<ShootingPctAvg />)}
						{statType === "Three Pointers" && (<ThreePointAvg />)}
					</div>
				
				</div>
			</Container>	
		</>
	)
}

const Container = styled.div`
width: 74%;
top: 0;
margin-left: 410px;
margin-top: -580px;
.options{
	width: 90%;
	.selectStat{
		width: 120px;
		height: 60px;
		color: #FFFFFF;
		background-color: #33348E;
		border: none;
		border-radius: 12px;
		margin: 2px;
		font-family: 'Poppins', sans-serif;
		font-size: 0.90rem
	}
	.selectStat: active{
		border: 1px solid #000000;
	}
	.selectStat:focus{
		border: 3px solid #000000;
	}
}
.statGraphs{
	width: 100%;
}
`