import React from "react";

const VideoDetail = ({video}) => {
    if(!video){
        return 'loading...'
    }
    
    return(
        <div>{video.snippet.description}</div>
    )
};

export default VideoDetail;