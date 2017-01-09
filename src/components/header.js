import React from 'react';

const Header = (props) => {
  const nextPage = props.nextPage;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="page-header col-sm-12">
          <h2>Related Videos <small><a href="#" onClick={nextPage}>link</a></small></h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
