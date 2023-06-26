import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { options } from '../utils/constants'
import VideoCard from '../components/VideoCard'
import SideNav from '../components/SideNav'


const SearchResult = () => {
  // Urlden Arama Terimi Alma 
   const [searchParams, setSearchParams] = useSearchParams()
    const[search,setSearch] = useState(null)
    // get methodu ilearama terimini alma
  const query = searchParams.get("search_query")
   

    useEffect(() => {
      //null atasraak ekrana loading koydum 
      setSearch(null)
      // arama terimiyle alakalı videoları çekme
axios.get(`https://youtube138.p.rapidapi.com/search/?q=${query}`, options)
.then((res) => setSearch(res.data.contents))
    },[query])
  return (
    <div className='flex'>
    <SideNav/>
    <div className='flex flex-col items-center w-full  p-4 gap-5 '>
    {!search && <p>"Loading...."</p>}
    <div className='max-w-[600px]'>
    {
        search && 
        search.map((content, i ) =>{
            if (content.type !== 'video') return;
            return <VideoCard key={i} videoInfo={content} />;
        })
    }
    </div>
   
    </div>
    </div>
  )
}

export default SearchResult

