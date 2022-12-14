import React, { useEffect, useState } from "react";
import youtube from "../../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        onTermSubmit(defaultSearchTerm);
    }, []);

    const onTermSubmit = async (term) => {
        // console.log(term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    };
    return [videos,onTermSubmit]
};


export default useVideos;