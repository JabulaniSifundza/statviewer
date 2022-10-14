import React from 'react';
import styled from "styled-components";
import {useContext} from 'react';
import {StatisticalContext} from '../context/Statscontext';
import Chart from 'react-apexcharts';

export default function ShootingPctAvg(){
	const {shooting} = useContext(StatisticalContext);

	const series =[{
		name: "Shooting Accuracy",
		data: shooting
	}]

	const options ={
		chart:{
			height: 390,
			type: "area"
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
		stroke: {
			curve: 'smooth'
		},
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
				text: 'Shooting Accuracy',
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
			<h3 className="title">Shooting Accuracy</h3>
		</div>
		<Chart options={options} series={series} width="88%" />
	</Container>
}

const Container = styled.div``