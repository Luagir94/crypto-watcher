import React from 'react'
import './index.scss'
import { ArrowBigUpLine, ArrowBigDownLine } from 'tabler-icons-react';

const CryptoCards = ({props, btcVal}) => {

  return (
    <div key={props.id}  className='CryptoCards'>
      <span className="CryptoCards__data mobile">Rank:</span>
      <span className="CryptoCards__data">#{props.rank}</span>
      <span className="CryptoCards__data mobile">Symbol:</span>
      <span className="CryptoCards__data">{props.symbol}</span>
      <span className="CryptoCards__data mobile">Name:</span>
      <span className="CryptoCards__data">{props.name}</span>
      <span className="CryptoCards__data mobile">Price u$d:</span>
      <span className="CryptoCards__data">u$d {props.price_usd}</span>
      <span className="CryptoCards__data mobile">Price BTC:</span>
      <span className="CryptoCards__data">BTC {props.price_btc}</span>
      <span className="CryptoCards__data mobile">Market Cap u$d:</span>
      <span className="CryptoCards__data ">u$d {parseFloat(props.market_cap_usd).toFixed('2')}</span>
      <span className="CryptoCards__data mobile">Volume Last 24hs:</span>
      <span className="CryptoCards__data ">u$d {props.volume24.toFixed('2')} / BTC {(props.volume24/parseFloat(btcVal)).toFixed('2')}</span>
      <span className="CryptoCards__data mobile">% Last 1h:</span>
      <span className={`CryptoCards__data ${props.percent_change_1h.includes("-") ? "devaulated" : "apreciated"}`}>{props.percent_change_1h}%{props.percent_change_1h.includes("-") ? <ArrowBigDownLine size={20}strokeWidth={2}color={'red'}/> : <ArrowBigUpLine size={20}strokeWidth={2}color={'green'}/>}</span>
      <span className="CryptoCards__data mobile" >% Last 24hs:</span>
      <span className={`CryptoCards__data ${props.percent_change_24h.includes("-") ? "devaulated" : "apreciated"}`}>{props.percent_change_24h}%{props.percent_change_24h.includes("-") ? <ArrowBigDownLine size={20}strokeWidth={2}color={'red'}/> : <ArrowBigUpLine size={20}strokeWidth={2}color={'green'}/>}</span>
      <span className="CryptoCards__data mobile">% Last 7d:</span>
      <span className={`CryptoCards__data ${props.percent_change_7d.includes("-") ? "devaulated" : "apreciated"}`}>{props.percent_change_7d}%{props.percent_change_7d.includes("-") ? <ArrowBigDownLine size={20}strokeWidth={2}color={'red'}/> : <ArrowBigUpLine size={20}strokeWidth={2}color={'green'}/>}</span>
    </div>
  )
}

export default CryptoCards