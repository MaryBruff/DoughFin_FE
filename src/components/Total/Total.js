import React from 'react'
import './Total.css'
import UpArrow from '../../assets/icons/up-arrow.svg'

const Total = ({ arrow, totalType, totalAmount, totalPercentage }) => {
  const firstChar = totalPercentage.charAt(0);
  const percentage = firstChar === '-' ? 'percentage-down' : 'percentage-up'
  return (
    <summary className='totals-container'>
      <div className='totals-flex'>
        <div className={ arrow === UpArrow ? 'up-arrow' : 'down-arrow' }>
          <img src={arrow} alt='up arrow' />
        </div>
        <div className='totals-text-flex'>
          <p className='totals-text'>{totalType}</p>
          <p className='totals-amount'>${totalAmount}</p>
        </div>
        <div className={percentage}>
          
          <p className={`${percentage}-text`}>{totalPercentage * 100}%</p>
        </div>
      </div>
    </summary>
  )
}

export default Total