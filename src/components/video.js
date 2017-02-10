import React from 'react';

const Video = (props) => {
  console.log(props, 'props');
  if(!props.video) {
    return <div>...Loading</div>;
  }

  const url = `https://www.youtube.com/embed/${props.video.id.videoId}?rel=0&showinfo=0&autohide=1`;

  console.log(url, 'url');

  return (
    <div className="container-fluid video-box">
      <div className="row">
        <div className="col-xs-6 col-xs-offset-3 video-margin">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
