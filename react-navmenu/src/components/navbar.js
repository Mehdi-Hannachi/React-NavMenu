import React from "react";

function navbar(props) {
  return (
    <ul className="navbar">
      {props.menu.map(el => (
        <li className="dropdown">
          {el.title}
          {!el.dropdown ? null : (
            <ul className="dropdown-content">
              {el.dropdown.map(el => (
                <li>{el}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default navbar;
