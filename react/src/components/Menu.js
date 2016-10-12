import React from 'react';
import Logo from './Logo';

const Menu = props => {

  let displayReturnLink = (state) => {
    if (state === "list") {
      return (
        <a onClick={props.returnToSearch}>Return to Search</a>
      )
    }
  }

  return(
    <div className="menu-bar">
      {displayReturnLink(props.component)}
      <Logo />
    </div>
  )

}

export default Menu;
