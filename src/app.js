import { useState, useEffect, useReducer } from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';
import axios from 'axios'


function App() {
  let initialState = {
    data: null,
    loading: false,
    method: null,
    body: {},
    url: '',
    history:[],
    showHistory: false,
  }

  let reducer = (state, action) => {
    switch(action.type){
      case 'DATA':
        return{
          ...state,
          data: action.payload
        }
      case 'LOADING':
        return{
          ...state,
          loading: action.payload
        }
      case 'PARAMS':
        return{
          ...state,
          body: action.payload.body,
          url: action.payload.url,
        }
      case 'METHOD':
        return{
          ...state,
          method: action.payload,
        }
      case 'HISTORY':
        return{
          ...state,
          history: [...state.data, action.payload],
        }
        case 'SHOW':
          return{
            ...state,
            showHistory: action.payload
          }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    console.log(state.method)
    console.log(state.url)
    let action = {type: 'LOADING', payload: false}

    const callApi = async () => {
      let action = {type: 'DATA', payload: null}
      // dispatch(action)
      try {
        switch (state.method){
          case 'GET':
            // if(state.data === null){
              let {headers, data} = await axios.get(state.url)
                action.payload = {data}
                console.log(data, 'this is the data')
                dispatch(action)
            // }
            // else{
            //   let {headers, data} = await axios.get(state.url+`/${state.data}`)
            //     action.payload = {data}
            //     dispatch(action)
            // }
            break;
          case 'POST':
            state.data({
              Message: 'you clicked post'
            })
            // await axios.get(requestParams.url+`/${userData}`).then((response) => {
            //   state.data(response.data);
            // });
            break;
          case 'PUT':
            state.data({
              Message: 'you clicked put'
            })
            // await axios.get(requestParams.url+`/${userData}`).then((response) => {
            //   state.data(response.data);
            // });
            break;
          case 'DELETE':
            state.data({
              Message: 'you clicked delete'
            })
            // await axios.get(requestParams.url+`/${userData}`).then((response) => {
            //   state.data(response.data);
            // });
            break;
          default:
            console.log('You can not do that')
        }
      }
      catch(e){
        console.log(e)
      }
}
callApi();
  }, [state.method]);
  
  return (
    <>
      <Header dispatch={dispatch}/>
        <div>Request Method: {state.method}</div>
        <div>URL: {state.url}</div>
      <Form dispatch={dispatch}/>
      { state.showHistory ? <History />:<Results data={state.data} /> }
      <Footer />
    </>
  );
}

export default App;
