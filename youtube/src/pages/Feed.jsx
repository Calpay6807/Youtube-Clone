import { useContext } from "react"
import SideNav from "../components/SideNav"
import { YoutubeContext } from "../context/YoutubeContext"
import VideoCard from "../components/VideoCard"
const Feed = () => {
  const {searchResult}= useContext(YoutubeContext)
  return (
    <div className="flex">
      <SideNav/>
      <div className="videos">
   {!searchResult ? (<p>Loading..</p>) : (
    searchResult.map((video, i) => {
      //eğer elemanın tipi video değilse hiçbirşey yapma
      if(video.type !== "video") return;
      return <VideoCard key={i}  videoInfo={video}/>
    })
   )}
      </div>
    </div>
  )
}

export default Feed
