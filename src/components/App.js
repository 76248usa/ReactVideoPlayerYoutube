/*import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from './VideoDetail';


class App extends React.Component {
 state = {videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
        videos: response.data.items
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video});
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos} />       
      </div>
    );
  }
}

export default App;*/

import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
    this.onTermSubmit("children's stories");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
       videos: response.data.items,
       selectedVideo: response.data.items[0]
       });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <div div class="ui grid">
        <div div class="ui row">
        <div class="eleven wide column"> 
        <VideoDetail video={this.state.selectedVideo} />
        </div>
       
        <div class="five wide column">
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
        </div>
       
        </div>
        </div>
      </div>
    );
  }
}

export default App;

