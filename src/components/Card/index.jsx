import { Accordion } from '../Accordion'

export const Card = ({ day, film, notes }) => {

	return (
		<div className='card'>
			<div className='card__release'>{ day }</div>
			<a className='card__film' href="#">{ film }</a>
			{ notes && 
				<div className="card__notes">
					<Accordion data={[{ question: 'Заметка', answer: notes }]}/>
				</div>
			}
		</div>
	)
}

