import React from 'react'
import LossItems from './LossItems'

const Availability = () => {
  return (
    <div style={{ padding: "10px", border: "1px solid #d9d9d9", borderRadius: "10px", display: "flex", flexDirection: "column", backgroundColor: "#f7f7f7" }}>
      <LossItems title={'Availability'} value={'US 01:25:08 / US 01:25:08'}/>
      <LossItems title={'Production'} value={'US 01:25:08 / US 01:25:08'}/>
      <LossItems title={'Quality'} value={'US 01:25:08 / US 01:25:08'}/>
    </div>
  )
}

export default Availability