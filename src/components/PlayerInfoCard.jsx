import React, {useState, useEffect} from 'react';
import {useContext} from 'react';
import {StatisticalContext} from '../context/Statscontext';
import styled from "styled-components";

export default function PlayerInfoCard(){

	const {} = useContext(StatisticalContext)

	return (
		<Container>
		<div className="imgHolder">
			<h3 className="playerName">
			{}
			</h3>
		
		</div>
		<div className="infoHolder">
			<div className="poisitonInfo">
				<p className="category">Position</p>
				<p className="variableValue">{}</p>
			</div>

			<div className="heightInfo">
				<p className="category">Height</p>
				<p className="variableValue">{}</p>
			</div>

			<div className="weightInfo">
				<p className="category">Weight</p>
				<p className="variableValue">{}</p>
			</div>

			<div className="TeamInfo">
				<p className="category">Current Team</p>
				<p className="variableValue">{}</p>
			</div>
		</div>
		
		</Container>
	)
}

const Container = styled.div``
