import React, { useContext, useState } from 'react'
import { FlagContext } from '../context/FlagContext'

export default function DisplayComponent({children}) {
  const { currentFlag } = useContext(FlagContext)

  const numberWithCommas =(number)=> {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  return (
    <div className='text-center bg-gray-400 pt-5 pb-10 px-5 min-w-96'>
      <h1 className='text-3xl'>{children}</h1>
      <div className='mt-5'>
        <div>Country : { currentFlag ? currentFlag.name.common : 'Country' }</div>
        <div>Population : { currentFlag ? numberWithCommas(currentFlag.population) : 'Population' } </div>
        <div>Currency : { currentFlag ? Object.keys(currentFlag.currencies) : 'Currency' } </div>
        <div>Region : { currentFlag ? currentFlag.subregion : 'Region' }</div>
      </div>
    </div>
  )
}
