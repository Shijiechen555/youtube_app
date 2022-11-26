import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import useVideos from "./hook/useVideos";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


const App = () => {
    const [selectedVideo, setSelectedVideos] = useState(null);
    const[videos, search] = useVideos('buildings');

    useEffect(() => {
        setSelectedVideos(videos[0]);
    }, [videos]);

    return (
        <div className='ui container'>
            <SearchBar onFormSubmit={search} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail
                            video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList
                            onVideoSelect={(video) => setSelectedVideos(video)}
                            videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );

};



// const onVideoSelect = async (video) => {
//     await setSelectedVideos(video);
//     console.log(selectedVideo);
// };





export default App;