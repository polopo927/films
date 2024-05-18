import React, { useState } from "react";

export const Card = ({ place, film, date, notes }) => {

	const [isNotesVisible, setIsNotesVisible] = useState(false)

	const toggleNotes = () => {
		setIsNotesVisible(!isNotesVisible)
	}

	return (
		<div className='card'>
			<div>{place}
			{notes && (
				<div>
					<button onClick={toggleNotes}>
						{isNotesVisible ? '!' : '!'}
					</button>
					{isNotesVisible && <div className="notes">{notes}</div>}
				</div>
			)}
			</div>
			<a href="#">{film}</a>
			<div>{date}</div>
		</div>
	)
}

