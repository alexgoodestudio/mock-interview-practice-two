import React, {useState} from 'react'
import NewString from './newString'

function ListCoin({coin}){
    const [displaySymbol, setDisplaySymbol] = useState(false)
    const [displayImage, setDisplayImage] = useState(false)

    return(
        <>
        <h3 onClick={() => setDisplaySymbol(!displaySymbol)}>{coin.name}</h3>
        {displaySymbol ? <p>{coin.symbol}</p> : " "}
        <img src={coin.image.small} alt="pic" onClick={() => setDisplayImage(!displayImage)}/>
        {displayImage ? <NewString id = {coin.id}/> : " "}
        </>
    )
    
}

export default ListCoin