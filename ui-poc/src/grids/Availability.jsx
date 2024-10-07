import React from 'react'
import LossItems from '../components/LossItems'
import Wrapper from '../components/Wrapper'
import useFetchData from '../hooks/useFetchData'

const Availability = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { data, error, loading } = useFetchData(`${BASE_URL}/availability/fetch-avail`)
  console.log(data)
  return (
    <Wrapper error={error} loading={loading} skeletonHeight={"75px"} skeletonTitle={"Loading Availability Loss"} noData={data?.length===0}>
      <div style={{ padding: "10px", border: "1px solid #d9d9d9", borderRadius: "10px", display: "flex", flexDirection: "column", backgroundColor: "#f7f7f7" }}>
        <LossItems title={'Availability'} value={'US 01:25:08 / US 01:25:08'} />
        <LossItems title={'Production'} value={'US 01:25:08 / US 01:25:08'} />
        <LossItems title={'Quality'} value={'US 01:25:08 / US 01:25:08'} />
      </div>
    </Wrapper>
  )
}

export default Availability