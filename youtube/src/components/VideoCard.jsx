import React from 'react';
import {BsPatchCheckFill} from "react-icons/bs";
import millify from "millify";
import {Link} from "react-router-dom"

const VideoCard = ({videoInfo}) => {
    
    const {video} = videoInfo;
    // console.log(video);
  return (
    //Kullanici karta basarsa onu detay sayfasına yönlendir
    //parametre Olarak linke videonun idsini koy
   <Link className="w-full" to={`/watch/${video.videoId}`}>
    <div className='cursor-pointer ml-5' >
   
    <img className='w-full rounded my-4' src={video.thumbnails[0].url} />
    <div className='flex gap-3'>
    <img className='rounded-full w-[50px] h-[50px]' src={video.author.avatar[0].url} alt="" />
    <div>
    <p title={video.descriptionSnippet}>{video.title}</p>
    <p className='flex items-center'><span>{video.author.title}</span> 
    
    {video.author?.badges[0]?.text === "Doğrulandı" && (
      <BsPatchCheckFill className='mx-2 text-blue-600'/>
    )}
   </p>
   <div className="flex gap-3">
   <p title={video.stats.views}>{millify(video.stats.views)}</p>
   <p>{video.publishedTimeText }</p>

   </div>
    </div>
    </div>
    
    </div>
    </Link>
    
    
  )
}

export default VideoCard;
