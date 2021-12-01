import { useState } from 'react';
import './form.scss';

function Form(props) {

  return (
    <>
      <form 
      onSubmit={(e) => {
        e.preventDefault();
        props.dispatch({type: 'DATA', payload: e.target.value})}}>
        <label >
          <span>URL: </span>
          <input onChange={(e) => props.dispatch({type: 'PARAMS', payload: {url: e.target.value}})} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <button type='button' onClick={(e)=> props.dispatch({type: 'METHOD', payload: e.target.value})} id="GET" value="GET">GET</button>
          <button type='button' onClick={(e)=> props.dispatch({type: 'METHOD', payload: e.target.value})} id="POST" value="POST">POST</button>
          <button type='button' onClick={(e)=> props.dispatch({type: 'METHOD', payload: e.target.value})} id="PUT" value="PUT">PUT</button>
          <button type='button' onClick={(e)=> props.dispatch({type: 'METHOD', payload: e.target.value})} id="DELETE" value="DELETE">DELETE</button>
        </label>
        <textarea name='json' />
      </form>
    </>
  );
}

export default Form;
