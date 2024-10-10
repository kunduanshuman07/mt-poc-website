import React from 'react'
import Wrapper from '../components/Wrapper'
import useFetchData from '../hooks/useFetchData'
import Criticality from '../components/Criticality';

const CompSituation = () => {
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { data, error, loading } = useFetchData(`${BASE_URL}/time-accounts/fetch-time-accounts`)
  return (
    <Wrapper error={error} loading={loading} skeletonHeight={"210px"} skeletonTitle={"Loading Time Accounts"} noData={data?.length === 0}>
      <div style={{display: "flex", flexDirection: "column", border: "1px solid #d9d9d9", borderRadius: "10px", backgroundColor: "white"}}>
        <Criticality title={"Surface Temperature"} valueString={"74 °C"} value={74} compare={100} color={'success'}/>
        <Criticality title={"Vibration"} valueString={"4.4 mm/s"} value={4.4} compare={10} color={'warning'}/>
        <Criticality title={"Current"} valueString={"94 A"} value={94} compare={200} color={'error'}/>
      </div>
    </Wrapper>
  )
}

export default CompSituation