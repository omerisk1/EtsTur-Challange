import React from 'react'

function Festival({word}) {
  const filter = word.filter(x => x.category==="Festival")
  return (
    <div>
      {filter.map((data, index) => (
        <h1 key={index}>{data.eventName}</h1>
      ))}
    </div>
  )
}

export default Festival