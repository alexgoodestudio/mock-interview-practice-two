import React, {useState, useEffect} from 'react'
import ListCoin from './Coin'

function App() {

  const [coin, setCoin] = useState([])

  useEffect(() =>{
    fetch("https://api.coingecko.com/api/v3/coins/")
    .then(response => response.json())
    .then(data => setCoin(data) )
  },[])

  return (
    <div >
      {coin.map((c) => <ListCoin key={c.id} coin={c} />)}
    </div>
  );
}

export default App;
