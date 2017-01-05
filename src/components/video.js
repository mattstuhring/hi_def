import React from 'react';

const Video = (props) => {
  if(props.videos.length === 0) {
    return <div>...Loading</div>;
  }

  const url = `https://www.youtube.com/embed/${props.videos[0].id.videoId}?rel=0&showinfo=0&autohide=1`;

  return (
    <div className="col-md-10 col-md-offset-1">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Video;
