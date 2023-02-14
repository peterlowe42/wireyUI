import React from "react"
import "./NavLink.css"

export interface NavLinkProps {
  label: string,
  href: string,
}

const NavLink = (props:NavLinkProps):JSX.Element => {
  return (
    <li className="wu-navItem">
      <a className="wu-navLink" href={props.href}>{props.label}</a>
    </li>
  )
}

export default NavLink