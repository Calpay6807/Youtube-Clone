import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
import { options } from '../utils/constants'
import ReactPlayer from 'react-player'
import millify from 'millify'
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai"
import { AiFillDislike } from "react-icons/ai"
import { TbShare3 } from "react-icons/tb"
import { BsDownload } from "react-icons/bs"
import { categories } from '../utils/constants'
import Listeleme from '../components/Listeleme'
import StringArea from '../components/StringArea'

const VideoDetail = () => {
  const params = useParams()
  const [video, setVideo] = useState(null)
  

  useEffect(() => {
    axios.get(`https://youtube138.p.rapidapi.com/video/details/?id=${params.videoId}`, options)
      .then((res) => setVideo(res.data))
      .catch((error) => console.log(error));

     
  }, [params.videoId])

  if (!video) return <div>Loading..</div>

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between justify-center gap-5 p-3 sm:p-5 md:p-12">
      <div className='flex flex-col lg:max-w-[900px]'>

        <div className='oynat'>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${params.videoId}`} height={"450px"}  width={'100%'} controls={true}/>
        </div>
        <h1 className='p-2 font-bold'>{video.title}</h1>
        <div className='flex gap-3 items-center'>
          <img className='rounded-full w-[50px] h-[50px]' src={video.author.avatar[0].url} alt="" />
          <p className='flex items-center'><span>{video.author.title}</span> </p>
          {video.author?.badges[0]?.text === "Doğrulandı" && (
            <BsPatchCheckFill className='mx-2 text-blue-600'/>
          )}

          <div className='btn flex gap-4 '>
            <button className='rounded-full  bg-slate-500 px-4 flex items-center gap-2'><span><AiFillLike /></span>{millify(video.stats.likes)} |
              <AiFillDislike />
            </button>
            <button className='flex items-center gap-2 py-1 rounded bg-slate-500 px-2'><span><TbShare3 /></span>Paylaş</button>
            <button className='flex items-center gap-2 py-1 rounded bg-slate-500 px-2'> <span><BsDownload /></span>indir</button>
            <button className='rounded bg-slate-500 px-2'>...</button>
          </div>
        </div>

        <div className='flex gap-3'>
          {millify(video.stats.views)},
          <p>{video.publishedDate}</p>
        </div>
       
        <p className='rounded my-2 bg-gray-800 p-3 w-[750px]'>
        <StringArea  text={video.description} max={200}/>
        </p>

      </div>
      <div>
      <Listeleme/>
     
      </div>
    </div>
  )
}

export default VideoDetail
