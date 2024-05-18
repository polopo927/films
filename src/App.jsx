import React, { useState, useEffect } from 'react'
import './App.css'
import { Card } from './components/Card'
import { getList } from './components/request'

function App() {
	const [topList, setTopList] = useState([])

	useEffect(() => {
		getList('/data.json')
			.then(data => setTopList(data.toplist))
			.catch(e => console.log(e))
	}, [])


	return (
		<div className='films'>
			{topList.map((top, index) => (
				<Card
				key={index}
				place={top.place}
				film={top.film}
				date={top.release_date}
				notes={top.notes}
				/>
			))}
		</div>
	)
}

export default App
