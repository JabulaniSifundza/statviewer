import React, {useState, useEffect} from 'react';
import {useContext} from 'react';
import {StatisticalContext} from '../context/Statscontext';


export default function PlayerSearch(){

	const [search, setSearch] = useState();
	const {searchByName} = useContext(StatisticalContext);

	useEffect(()=>{
		setSearch();
	}, [search])


	return (
		<div>
			<input type="text" placeholder="Search Player by Fullname" value={search} onChange={(e) => setSearch(e.target.value)} />
			<button className="searchButton" onClick={()=> searchByName(search)}>Search</button>
		</div>
	)
}

