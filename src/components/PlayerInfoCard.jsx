import React from 'react';
import {useContext} from 'react';
import {StatisticalContext} from '../context/Statscontext';
import styled from "styled-components";
import nbaLogo from '../images/nbaLogo.png';

export default function PlayerInfoCard(){

	const {name, position, height, weight, team} = useContext(StatisticalContext)

	return (
		<Container>
			<div className="imgHolder">
				<h3 className="playerName">
				{name}
				</h3>
				<img src={nbaLogo} alt="Nba Logo"/>
			
			</div>
			<div className="infoHolder">
				<p className="category">Position</p>
				<p className="variableValue">{position}</p>
				<p className="category">Height</p>
				<p className="variableValue">{height}</p>
				<p className="category">Weight</p>
				<p className="variableValue">{weight}</p>
				<p className="category">Current Team</p>
				<p className="variableValue">{team}</p>
				
			</div>
		
		</Container>
	)
}

const Container = styled.div`
width: 400px;
height: 600px;
top: 0;
left: 0;
border-right:1px solid #CC2228;
border-left: none;
border-top: 1px solid #CC2228;
border-bottom: none;
border-radius: 18px;
.imgHolder{
	background-color: #FFFFFF;
	width: 100%;
	height: 60%;
	border-radius:;
	z-index: 4;
	img{
		width: 100px;
		height 200px;
	}
	.playerName{
		text-align: center;
		margin-top: 16px;
		margin-bottom: 36px;
		font-size: 2.25rem;
	}
}
.infoHolder{
	background-color: #CC2228;
	width: 100%;
	height: 50%;
	z-index: 1;
	color: #FFFFFF;
	display: grid;
	grid-template-columns: 1fr 1fr;
	border-radius: 18px;
	.category{
		font-size: 1.25rem;
		font-weight: 500;
	}
	.variableValue{
		font-size:1.25rem;
		font-weight: 500;
	}
	

}

`
