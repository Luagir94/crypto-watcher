import React,{useState} from 'react'
import './index.scss'

import CryptoDisplay from '../CryptoDisplay'
import CryptoSearcher from '../CryptoSearcher'
const CryptoConteiner = () => {

  return (
   
    <div className='CryptoConteiner'>
<CryptoSearcher />
<CryptoDisplay />


    </div>
  )
}

export default CryptoConteiner