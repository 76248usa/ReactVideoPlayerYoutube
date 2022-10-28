import React from 'react';

const VideoDetail = ({video}) => {
 
        if(!video) {
          return <div>Loading...</div>
        }
        return <div>{video.snippet.title}</div>        

}

export default VideoDetail;


/*import React from 'react';

const VideoDetail = ({selectedVideo}) => {

  return <div>{selectedVideo.snippet.title}</div>;
};

export default VideoDetail;*/
