import React from 'react';
import {useContext} from 'react';
import {StatisticalContext} from '../context/Statscontext';
import styled from "styled-components";

export default function PlayerInfoCard(){

	const {name, position, height, weight, team} = useContext(StatisticalContext)

	return (
		<Container>
			<div className="imgHolder">
				<h3 className="playerName">
				{name}
				</h3>
				<img src="" alt="Nba Logo" />
			
			</div>
			<div className="infoHolder">
				<div className="poisitonInfo">
					<p className="category">Position</p>
					<p className="variableValue">{position}</p>
				</div>

				<div className="heightInfo">
					<p className="category">Height</p>
					<p className="variableValue">{height}</p>
				</div>

				<div className="weightInfo">
					<p className="category">Weight</p>
					<p className="variableValue">{weight}</p>
				</div>

				<div className="TeamInfo">
					<p className="category">Current Team</p>
					<p className="variableValue">{team}</p>
				</div>
			</div>
		
		</Container>
	)
}

const Container = styled.div`
width:500px;
height: 100vh;
top: 0;
left: 0;
.imgHolder{
	background-color: #FFFFFF;
	width: 100%;
	height: 60%;
	border-radius:;
	z-index: 4;
	img{
		width: 380px;
		height 300px;
	}
	.playerName{
		text-align: center;
		margin-top: 12px;
		margin-bottom: 36px;
	}
}
.infoHolder{
	background-color: #CC2228;
	width: 100%;
	height: 50%;
	z-index: 1;
	color: #FFFFFF;
	.poisitonInfo{
		width: 100%
		display: grid;
		grid-template-columns: 1fr fr;
	}
	.heightInfo{
		width: 100%
		display: grid;
		grid-template-columns: 1fr fr;
	}
	.weightInfo{
		width: 100%
		display: grid;
		grid-template-columns: 1fr fr;
	}
	.TeamInfo{
		width: 100%
		display: grid;
		grid-template-columns: 1fr fr;
	}

}
`
