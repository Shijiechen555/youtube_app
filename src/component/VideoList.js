import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos}) => {
    const rerenderList =videos.map((video)=>{
        return <VideoItem />;
    });
    
    return <div>{rerenderList}</div>;
};

export default VideoList;