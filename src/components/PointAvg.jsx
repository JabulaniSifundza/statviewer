import React from 'react';
import styled from "styled-components";
import {useContext} from 'react';
import {StatisticalContext} from '../context/Statscontext';
import Chart from 'react-apexcharts';

export default function PointAvg(){
	const {points} = useContext(StatisticalContext);

	const series =[{
		name: "Points Per Game",
		data: points
	}]

	const options ={
		chart:{
			height: 400,
			type: "bar"
		},
		fill:{
			type: "gradient",
			gradient:{
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.9,
				stops: [0, 90, 100]
			}
		},
		colors: ["#33348E"],
		xaxis:{
			type: 'year',
			categories:[2017, 2018, 2019, 2020, 2021],
			labels: {
				style: {
				  colors: "#000000"
				}
			  }
		},
		yaxis:{
			title: {
				text: 'Points Per Game',
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
			<h3 className="title">Points Per Game</h3>
		</div>
		<Chart options={options} series={series} width="80%" />
	</Container>
}

const Container = styled.div``