import React from 'react'

const Progressbar = ({value,max}) => {
  return (
    <div>
        <h5>Progressbar</h5>
        <progress value={value} max={max} style={{height:"30px"}}></progress>
        <span>{(value/max)*100}%</span>

    </div>
  )
}

export default Progressbar