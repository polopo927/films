import React from 'react'
import './App.css'
import { Card } from './components/Card'

function App() {

	const dayList = [
		{ day: 'Понедельник', film: 'Фильм1' },
		{ day: 'Вторник', film: 'Фильм2' },
		{ day: 'Среда', film: 'Фильм3' },
		{ day: 'Четверг', film: 'Фильм4' },
		{ day: 'Пятница', film: 'Фильм5' },
		{ day: 'Суббота', film: 'Фильм6' },
		{ day: 'Воскресенье', film: 'Фильм7' }
	]

	return (
		<div className='films'>
			{dayList.map((day, index) => (
				<Card key={index} day={day.day} film={day.film} />
			))}
		</div>
	)
}

export default App
