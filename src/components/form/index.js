import React, { useState } from 'react';

import './form.scss';

function Form(props){

  const [methodValue, setMethodValue] = useState('')
  const [urlValue, setURLValue] = useState('')

  const handleURLInput = e => {
    let {value} = e.target
    console.log(value)
    setURLValue(value)
  }

  const handleMethodInput = e => {
    let method = e.target.id
    console.log(method)
    setMethodValue(method)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: methodValue,
      url: urlValue,
    };
    props.handleApiCall(formData);
  }


    return (
      <>
        <form onSubmit={handleSubmit}>
          <label>
            <span>URL: </span>
            <input onChange={handleURLInput} name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span onClick={handleMethodInput} id="get">GET</span>
            <span onClick={handleMethodInput} id="post">POST</span>
            <span onClick={handleMethodInput} id="put">PUT</span>
            <span onClick={handleMethodInput} id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
}

export default Form;
