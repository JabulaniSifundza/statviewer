import React from 'react';
import styled from "styled-components";
import {useContext} from 'react';
import {StatisticalContext} from '../context/Statscontext';
import Chart from 'react-apexcharts';

export default function StatOverview(){
	const {points, minutes, assists} = useContext(StatisticalContext);

	const series =[{
		name: "Points Per Game",
		type: 'area',
		data: points 
	},
	{
		name: "Assists Per Game",
		type: 'bar',
		data: assists	
	},
	{
		name: "Minutes Per Game",
		type: 'line',
		data: minutes	
	}]

	const options = {
		chart:{
			height: 500,
			type: 'line',
			stacked: false,
		},
		stroke: {
			width: [0, 2, 5],
			curve: 'smooth'
		},
		plotOptions: {
			bar: {
			  columnWidth: '40%'
			}
		},
		fill: {
			opacity: [0.75, 0.95, 1],
			gradient: {
			  inverseColors: false,
			  shade: 'light',
			  type: "vertical",
			  opacityFrom: 0.65,
			  opacityTo: 0.25,
			  stops: [0, 100, 100, 100]
			}
		},
		labels: ['2017', '2018', '2019', '2020', '2021'],
		colors:["#33348E", " #d4af37", "#CC2228"],
		markers: {
			size: 0
		},
		xaxis: {
        	type: 'year',
			labels: {
				style: {
				  colors: "#33348E"
				}
			  }
        },
		yaxis: {
			title: {
			  text: 'Average',
			},
			min: 0,
			labels: {
				style: {
				  colors: "#CC2228"
				}
			  }
		},
		tooltip: {
			shared: true,
			intersect: false,
		}

	}

	return <Container>
		<div className="titleCont">
			<h3>Points, Assists and Minutes Per Game</h3>
		</div>
		<Chart options ={options} series={series}  width="88%" />
	</Container>
}

const Container = styled.div``