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
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 video-list-padding">
          { videoItems }
        </div>
      </div>
    </div>
  );
};

export default VideoList;
