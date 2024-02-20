import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchData = async()=>{
  try {
    const {data} = await axios.get("https://catfact.ninja/fact")
    return data;
  } catch (error) {
    throw Error("Unable to fetch")
  }
}

const ReactQuery = () => {
    const {data, error} = useQuery({queryKey:["cat"], queryFn: fetchData})
    // console.log(data.fact);

  return (
    <div>
        This is react Query 
        <p>
            {data?.fact}
        </p>
    </div>
  )
}

export default ReactQuery