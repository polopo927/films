import React, { useState } from "react";

export const Card = ({ place, film, date, notes }) => {

	const arrowUp = '/up.svg'
	const arrowDown = 'down.svg'
	const [isNotesVisible, setIsNotesVisible] = useState(false)

	const toggleNotes = () => {
		setIsNotesVisible(!isNotesVisible)
	}

	return (
		<div className='card'>
			<div>{place}
			</div>
			<a href="#">{film}</a>
			<div>{date}</div>
			{notes && (
        <div>
          <button onClick={toggleNotes}>
            <img
              src={isNotesVisible ? arrowUp : arrowDown}
              alt={isNotesVisible ? "Стрелка вверх" : "Стрелка вниз"}
              className="arrow"
            />
          </button>
          <div className={`notes ${isNotesVisible ? 'notes-visible' : ''}`}>{notes}</div>
        </div>
      )}
		</div>
	)
}

