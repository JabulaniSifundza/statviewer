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
import ThreePointAvg from './/ThreePointAvg';

export default function Statisticgraphs(){
	const desiredStat = [ "Blocks", "Minutes", "Overview", "Point Average", "Rebounds", "Scoring", "Shooting", "Three Pointers"];
	const [statType, setStatType] = useState('');

	return (
		<>
			<Container>
				<div className="oprions">
				{
					desiredStat.map(stats =>{
						return (
						<button type="button" key={stats} className="selectStat"
						onClick={()=> setStatType(stats)}>
						{stats.toLocaleUpperCase}
						</button>
						)
					})
				}
				</div>

				<div className="statGraphs">
					<div>
						
						{statType === "Blocks" && (<BlockAvg />)}
						{statType === "Minutes" && (<MinuteAvg />)}					
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

const Container = styled.div``