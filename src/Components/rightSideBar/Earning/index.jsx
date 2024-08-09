import React from 'react'
import { EarningWrap } from './Earning.styles'
import {earingData} from "../../../Constant/Data"
const Earning = () => {
  return (
    <EarningWrap>
        <div className="wrapper">
            <span className='heading'>Estimate Earning</span>
            <span className='heading'>01 Jan 2024</span>
            {earingData.map((val,ind)=>
                (
                <div className="wrapper card" key={ind}>
               <div className="textHolder">
               <span className="text">{val.text}</span>
               <span className="price">{val.price}</span>
               </div>
               <img src={val.img} alt="price" />
            </div>))}
            
        </div>
    </EarningWrap>
  )
}

export default Earning