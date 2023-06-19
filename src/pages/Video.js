import React, { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'
import "./video.css"

function Video({ likes, comments, shares, name, description, music, url }) {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handleStart(){
        if(!play){
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
        setPlay(!play)
        
    }

  return (
    <div className='video'>
        <video 
            className='video__player'
            ref={videoRef}
            onClick={handleStart}
            loop
            src={ url }
        ></video>
        <VideoSidebar 
            likes={likes}
            comments={comments}
            shares={shares}
        />
        <VideoFooter 
            name={name}
            description={description}
            music={music}
        />
    </div>
  )
}

export default Video