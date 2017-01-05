import React from 'react';

const VideoListItem = (props) => {
  return (
    <div onClick={() => props.onVideoSelect(props.video)} className="col-md-3">
      <div className="thumbnail">
        <img src={props.video.snippet.thumbnails.medium.url} alt="..." />
        <div className="caption">
          <p>{props.video.snippet.title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoListItem;
