import React from 'react';
import styled from "styled-components";
import {useContext} from 'react';
import {StatisticalContext} from '../context/Statscontext';
import Chart from 'react-apexcharts';

export default function BlockAvg(){
	const {blocks} = useContext(StatisticalContext);

	const series =[{
		name: "Blocks Per Game",
		data: blocks
	}]

	const options ={
		chart:{
			height: 500,
			type: 'area'

		},
		colors:["#FF1654", "#247BA0"],
		stroke: {
			curve: 'smooth'
		},
		xaxis:{
			type: 'year',
			categories:[2016, 2017, 2018, 2019, 2020, 2021, 2022],
			labels: {
				style: {
				  colors: "#000000"
				}
			  }
		},
		yaxis:{
			title: {
				text: 'Blocks Per Game',
				colors: "#000000"
			  },
			labels: {
				style: {
				  colors: "#000000"
				}
			}
		}
	}

	return <Container>
		<div className="graphTitle">
			<h3 className="title">Blocks Per Game</h3>
		</div>
		<Chart options={options} series={series} width="80%" />
	</Container>
}

const Container = styled.div``