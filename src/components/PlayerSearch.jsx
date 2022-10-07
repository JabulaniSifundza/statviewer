import React, {useState, useEffect} from 'react';
import {useContext} from 'react';
import {StatisticalContext} from '../context/Statscontext';
import styled from "styled-components";


export default function PlayerSearch(){

	const [search, setSearch] = useState();
	const {searchByName} = useContext(StatisticalContext);

	useEffect(()=>{
		setSearch();
	}, [search])


	return (
		<Container>
			<input type="text" placeholder="Search Player by Fullname" value={search} onBlur={(e) => setSearch(e.target.value)} />
			<button className="searchButton" onClick={()=> searchByName(search)}>Search</button>
		</Container>
	)
}

const Container = styled.div`
margin-left:;
margin-top: 30px;
input{
	border-bottom: 2px solid #000000;
	border-right: none;
	border-left: none;
	border-top: none;
	color: #000000;
	background-color: #FFFFFF;
	width: 300px;
	height: 40px;
	font-size: 1.25rem;
	
}
.searchButton{
	background-color: #CC2228;
	color: #FFFFFF;
	width: 120px;
	height:45px;
	border: none;
	border-radius: 12px;
	margin-left: 20px;
	font-size: 1.15rem;
	font-weight: 500;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
`

