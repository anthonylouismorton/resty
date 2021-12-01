import React from 'react';
import "./header.scss"

function Header(props) {
    return (
      <header>
        <h1>RESTy</h1>
        <button onClick={()=> props.dispatch({type: 'SHOW', payload: false})}>Search</button>
        <button onClick={()=> props.dispatch({type: 'SHOW', payload: true})}>History</button>
      </header>
    );
}

export default Header;
