import React from 'react'
import HeaderGrid from '../components/HeaderGrid'
import Header from '../components/Header'
import MiddleContent from '../components/MiddleContent'
import BottomContent from '../components/BottomContent'

const UserLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <HeaderGrid />
      <MiddleContent />
      <BottomContent/>
    </div>
  )
}

export default UserLayout