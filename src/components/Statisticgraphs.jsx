import React, {useState, useEffect} from 'react';
import {useContext} from 'react';
import {StatisticalContext} from '../context/Statscontext';
import styled from "styled-components";

import AssistAvg from './components/AssistAvg';
import BlockAvg from './components/BlockAvg';
import MinuteAvg from './components/MinuteAvg';
import PointAvg from './components/PointAvg';
import ReboundAvg from './components/ReboundAvg';
import ScoringOverview from './components/ScoringOverview';
import ShootingPctAvg from './components/ShootingPctAvg';
import StatOverview from './components/StatOverview';
import ThreePointAvg from './components/ThreePointAvg';

export default function Statisticgraphs(){
	const desiredStat = ["Assists", "Blocks", "Minutes", "Overview", "Point Average", "Rebounds", "Scoring", "Scoring", "Shooting", "Three Pointers"];


	return (
		<>
			<Container>
				<div className="oprions">
				{
					desiredStat.map(stats =>{
						return (
						<button type="button" key={stats} className="selectStat">
						{stats.toLocaleUpperCase}
						</button>
						)
					})
				}
				</div>

				<div className="statGraphs"></div>
			</Container>	
		</>
	)
}

const Container = styled.div``