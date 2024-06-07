import { RiArrowDropDownLine } from 'react-icons/ri'
import { useRef } from 'react'
import cl from 'classnames'
import './index.css'


export const AccordionItem = ({ question, answer, isOpen, onClick }) => {
	const contentHeight = useRef()
	return (
		<div className="wrapper" >
			<button className={cl('question-container', isOpen && 'active')} onClick={onClick} >
				<p className='question-content'>{question}</p>
				<RiArrowDropDownLine className={cl('arrow', isOpen && 'active')} />
			</button>

			<div ref={contentHeight} className="answer-container" style={
				isOpen
					? { height: contentHeight.current.scrollHeight }
					: { height: "0px" }
			}>
				<p className="answer-content">{answer}</p>
			</div>
		</div>
	)
}