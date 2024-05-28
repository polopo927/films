import { useState, useEffect } from 'react'
import './App.css'
import { Card } from './components/Card'
import { getList } from './components/request'

function App() {
	const [dayList, setDayList] = useState([])

	useEffect(() => {
		getList('/data.json')
			.then(data => setDayList(data.movielist))
			.catch(e => console.log(e))
	}, [])


	return (
		<div className='films'>
			{dayList.map((day, index) => (
				<Card key={index} day={day.release_date} film={day.film} notes={day.notes} />
			))}
		</div>
	)
}

export default App
