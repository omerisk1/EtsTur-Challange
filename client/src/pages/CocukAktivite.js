import React from 'react'

function Opera({ word }) {
  const filter = word.filter(x => x.category==="Çocuk Aktivite")
  return (
    <div>
      {filter.map((data, index) => (
        <h1 key={index}>{data.eventName}</h1>
      ))}
    </div>
  )
}

export default Opera