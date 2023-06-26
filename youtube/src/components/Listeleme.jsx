import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import { options } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const Listeleme = ({VideInfo}) => {
 
    const params = useParams()
    
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get(`https://youtube138.p.rapidapi.com/video/related-contents/?id=${params.videoId}`, options)
          .then((res) => setList(res.data.contents)) 
          .catch((error) => console.log(error));
          
      }, [params.videoId])

    
  return (
    <div>
      
        {!list && <p>Loading..</p>}
            {list &&
              list.map((video, i) => {
                if (video.type !== 'video') return;
                return <VideoCard key={i} videoInfo={video} />;
              })}
        
    </div>
  )
}

export default Listeleme







