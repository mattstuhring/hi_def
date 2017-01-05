import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect} 
      />
    );
  });

  return (
    <div className="row">
      <div className="col-md-12">
        { videoItems }
      </div>
    </div>
  );
};

export default VideoList;
