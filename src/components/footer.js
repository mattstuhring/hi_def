import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid footer-background">
      <div className="row footer">
        <div className="col-sm-4">
          <p><strong>HiDef</strong> - Simplified video player</p>
        </div>
        <div className="col-sm-4 col-sm-offset-4 pull-right">
          <p>Created By:<a href="https://github.com/mattstuhring/youtube_redux"> Matt Stuhring</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
