import React, { useState, useRef } from "react";
import "./AccordionItem.css"


const AccordionItem = ():JSX.Element => {
  const [isActive, setIsActive ] = useState(false);

  const collapseRef = useRef();

  return (
    <div className="wu-accordion-item">
      <div className='wu-accordion-header'>
        <button className={`wu-accordion-button ${isActive ? 'open' : ''}`} onClick={() => { setIsActive((prev) => !prev)}}>
          <h1>Lorem ipsum dolor</h1>
        </button>
      </div>
      <div className={`wu-accordion-collapse collapse ${isActive ? 'show' : ''}`}>
        <div className='wu-accordion-body'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora sed delectus harum molestiae asperiores neque quod, labore perferendis similique placeat veniam. Quam eveniet enim provident. Nam asperiores consequatur ab veniam.</p>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem