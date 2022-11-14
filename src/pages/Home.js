import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HomeSingleData from './HomeSingleData'
import HomeMainData from './HomeMainData'



const Home = () => {

  const [data, setData] = useState([]);
  const obtenerData = async () => {
    const res = await axios.get(`http://54.152.183.8:5000/api/v1/data`);
    const data = await res.data.data;
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    obtenerData()
  }, [])


  return (
    <div>

      {data.map((data, index) => (
        index === 0 ? (<div>
          <h1>  <HomeMainData props={data} /></h1>
          <br></br>
        </div>) : (<div>
          <HomeSingleData props={data} />
        </div>)
      ))}

    </div>
  )
}

export default Home