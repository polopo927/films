
import './App.css'

function App() {

	const dayList = [
		{day:'Понедельник', film:'Фильм1'},
		{day:'Вторник', film:'Фильм2'},
		{day:'Среда', film:'Фильм3'},
		{day:'Четверг', film:'Фильм4'},
		{day:'Пятница', film:'Фильм5'},
		{day:'Суббота', film:'Фильм6'},
		{day:'Воскресенье', film:'Фильм7'}
	]

	return (
		<div className='films'>
			<ul className='filmlist__items'>
				{dayList.map((day, index) =>( 
					<li key={index}>
						<div>{day.day}</div>
						<a href="#">{day.film}</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
