import { Accordion } from '../Accordion'

export const Card = ({ day, film, notes }) => {

	return (
		<div className='card'>
			<div>{ day }</div>
			<a href="#">{ film }</a>
			{ notes && 
				<div className="notes">
					<Accordion data={[{ question: 'Заметка', answer: notes }]}/>
				</div>
			}
		</div>
	)
}

