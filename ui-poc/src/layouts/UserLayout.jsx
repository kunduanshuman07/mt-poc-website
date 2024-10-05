import React from 'react'
import Header from '../trails/Header'
import Title from '../trails/Title'
import MiddleContent from '../trails/MiddleContent'
import BottomContent from '../trails/BottomContent'

const UserLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Title />
      <Header />
      <MiddleContent />
      <BottomContent/>
    </div>
  )
}

export default UserLayout