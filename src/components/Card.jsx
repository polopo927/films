import React, { useState } from "react";

export const Card = ({ place, film, date, notes }) => {

	const arrow = 'down.svg'
	const [isNotesVisible, setIsNotesVisible] = useState(false)

	const toggleNotes = () => {
		setIsNotesVisible(!isNotesVisible)
		console.log(isNotesVisible)
	}

	return (
		<div className='card'>
			<div className="card__place">{place}
			</div>
			<a className="card__film" href="#">{film}</a>
			<div className="card__date">{date}</div>
			{notes && (
				<div className="card__dropdown">
					<button onClick={toggleNotes} className="card__arrow">
						<img
							src={arrow}
							alt="Открыть заметки"
							className={`arrow ${isNotesVisible ? 'arrow-up' : ''}`}
						/>
					</button>
					<div className="dropdownContent" data-open={isNotesVisible}>{notes}</div>
				</div>
			)}
		</div>
	)
}

