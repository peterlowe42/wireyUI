import React from 'react';
import { useState } from 'react';
import "./HeaderNav.css"

export interface HeaderNavProps {
  navLabel: string,
  children: JSX.Element[],
}

const HeaderNav = ({ children, navLabel }:HeaderNavProps):JSX.Element => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="wu-header">
      <nav aria-label={navLabel} className="wu-header__nav">
        <button className="wu-header-toggle" onClick={() => setNavOpen((prev) => !prev)}>
        </button>
        <ul className={`wu-navlist ${navOpen ? 'navOpen' : ''}`}>
          { children }
        </ul>
      </nav>
    </header>
  )   
}

export default HeaderNav;