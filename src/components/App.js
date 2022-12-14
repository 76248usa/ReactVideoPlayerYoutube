import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('buildings');
   
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

    const onVideoSelect = (video) => {
      setSelectedVideo(video);
    };

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={onTermSubmit} />

        <div div class="ui grid">
        <div div class="ui row">
        <div class="eleven wide column"> 
        <VideoDetail video={selectedVideo} />
        </div>
       
        <div class="five wide column">
        <VideoList
          onVideoSelect={onVideoSelect}
          videos={videos}
        />
        </div>
       
        </div>
        </div>
      </div>
    );
  }

export default App;

