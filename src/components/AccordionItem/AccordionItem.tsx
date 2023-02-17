import React, { useState, useRef } from "react";
import SlideDown from "../SlideDown/SlideDown";
import "./AccordionItem.css"

export interface AccordionItemProps {
  header: string,
  children: JSX.Element | JSX.Element[],
}

const AccordionItem = ({ children, header }:AccordionItemProps):JSX.Element => {
  const [isActive, setIsActive ] = useState(false);

  return (
    <div className="wu-accordion-item">
      <div className='wu-accordion-header'>
        <button className={`wu-accordion-button ${isActive ? 'open' : ''}`} onClick={() => { setIsActive((prev) => !prev) }}>
          <h1 className='wu-accordion-header'>{header}</h1>
        </button>
      </div>
      <SlideDown isOpen={isActive}>
        { children }
      </SlideDown>
    </div>
  )
}

export default AccordionItem