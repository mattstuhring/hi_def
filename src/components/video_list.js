import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const video = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <div className="row">
      <div className="col-md-12">
        { video }
      </div>
    </div>
  );
};

export default VideoList;
