import { useState } from 'react'
import { AccordionItem } from '../AccordionItem';


export const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const handleItemClick = (index) => {
   setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
 
  return (
   <div>
     {data.map((item, index) => (
     <AccordionItem
      key={index}
      question={item.question}
      answer={item.answer}
      isOpen={activeIndex === index}
      onClick={() => handleItemClick(index)}
     />
    ))}
   </div>
  )
 };
