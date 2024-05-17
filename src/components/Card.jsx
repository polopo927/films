import React from "react";


export const Card = ({day, film}) => {

	return (
		<div className='card'>
			<div>{day}</div>
			<a href="#">{film}</a>
		</div>
	)
}

