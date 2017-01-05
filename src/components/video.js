import React from 'react';

const Video = (props) => {
  if(!props.video) {
    return <div>...Loading</div>;
  }

  console.log(props.video);

  const url = `https://www.youtube.com/embed/${props.video.id.videoId}?rel=0&showinfo=0&autohide=1`;

  return (
    <div className="col-md-10 col-md-offset-1">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Video;
