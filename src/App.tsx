import React, { useState, useEffect } from 'react';
import TokenList from './components/TokenList';
import {IData} from './interface/interfaces';
import config from './config/config';
import axios from 'axios'

const defaultData: IData[] = [];

const App: React.FC = () => {
    
  const [data, setData]: [
    IData[], 
    (data: IData []) => void
  ] = useState(defaultData);  

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = useState<boolean>(true);

  const fetchData = () => {
    axios
    .get<IData[]>(`${config.api.myserverurl}/api/tokens`)
    .then((response) =>{
      setData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error)
      setLoading(false);
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)

  return (
    <div>
      {!loading && <TokenList allTokensData={data}/>}
    </div>
  );
}

export default App;
