import React from "react";
import "./Accordion.css"

export interface AccordionProps {
  children: JSX.Element[]
}

const Accordion = ({children}:AccordionProps):JSX.Element => {

  return (
    <div className="wu-accordion">
      {children}
    </div>
  )
}

export default Accordion