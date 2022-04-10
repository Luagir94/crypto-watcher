import React,{useState,useEffect} from 'react'
import './index.scss'
import { Loader } from '@mantine/core';
import CryptoCards from '../CryptoCards'
import {Pagination } from '@mantine/core';
const CryptoDisplay = () => {
  const [cryptos, setCryptos] = useState(undefined);
  const [totalCryptos, setTotalCryptos] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [BTCVal, setBTCVal] = useState(undefined)
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const getCryptos = async () =>{
    const resp = await fetch(`https://api.coinlore.net/api/tickers/?start=${currentPage === 1 ? 0 : (currentPage*10)-10}&limit=10`)
    const data = await resp.json()
    console.log(data);
    setCryptos(data.data)
    setTotalCryptos(data.info.coins_num)
    if (!data) {
       console.log(data.status)
    }
    
    } 
      const getBTC = async () =>{
    const resp = await fetch('https://api.coinlore.net/api/ticker/?id=90')
    const data = await resp.json()
    console.log(data);
    setBTCVal(data[0].price_usd)
    if (!data) {
      console.log(data.status)
    }}
    
  //   } 
    useEffect(() => {
      getCryptos()
    }, [currentPage]);

    useEffect(() => {
      getBTC()
    }, []);

  return (<>
  <div className='CryptoTable'>
    <div className='CryptoHeader'>
    <span className="CryptoHeader__data">Rank</span>
    <span className="CryptoHeader__data">Display</span>
    <span className="CryptoHeader__data">Name</span>
    <span className="CryptoHeader__data">Price u$d</span>
    <span className="CryptoHeader__data">Price BTC</span>
    <span className="CryptoHeader__data">Market Cap u$d</span>
    <span className="CryptoHeader__data">Vol Last 24hs</span>
    <span className="CryptoHeader__data">% Last 1h</span>
    <span className="CryptoHeader__data">% Last 24hs</span>
    <span className="CryptoHeader__data">% Last 7days</span>
  </div>
    <div className='CryptoDisplay'>
      {cryptos && cryptos.length > 0 ?
      cryptos.map( x=> <CryptoCards props={x} btcVal={BTCVal}/>)
      :<Loader size="xl" variant="bars" />}
        
    </div>
    </div>{
      totalCryptos ?<Pagination total={totalCryptos/10} boundaries={1} siblings={1} initialPage={1} onChange={paginate} /> :<Loader size="md" variant="bars" />}
    
    
    </>
  )
}

export default CryptoDisplay