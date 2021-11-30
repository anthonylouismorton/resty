import { useState, useEffect } from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios'

function App() {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [method, setMethod] = useState('');
  const [userData, setUserData] = useState({});

  
  const callApi = (formParams) => {
    console.log(formParams);
    const info = {
      method: requestParams.method,
      url: requestParams.url

    };
    setData(info);
    setRequestParams({...requestParams, ...formParams});
  }
  useEffect(() => {
  if(method === "GET"){
    console.log('in here')
    const action = async () => {
      try{
      let response = await axios.get(requestParams.url+`/${userData}`);
      setData(response.data);
      }
      catch(e){
        if(requestParams){
          e.message;
        }
      }
    }
    action();
  }
  }, [requestParams]);
  
  return (
    <>
      <Header />
      <div>Request Method: {method}</div>
      <div>URL: {requestParams.url}</div>
      <Form
        setRequestParams={setRequestParams}
        requestParams={requestParams}
        handleApiCall={callApi}
        setMethod={setMethod}
        setUserData={setUserData} />
      {data ? <Results data={data} /> : <p>loading</p> }
      <Footer />
    </>
  );
}

export default App;
