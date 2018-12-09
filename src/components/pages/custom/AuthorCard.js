import React from 'react';

const AuthorCard = () => {
  // noinspection JSUnresolvedFunction
  let imagePath = require('../../../images/stock_headshot.jpg');
  return (
      <div className="ui fluid card">
        <div className="image">
          <img src={imagePath} alt=""/>
        </div>
        <div className="content">
          <a href="#" className="header">Author Name</a>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam architecto asperiores corporis cumque
            debitis distinctio eaque eius officiis perspiciatis porro, quas qui quis rem sed sequi ullam! Architecto,
            quibusdam?
          </div>
        </div>
      </div>
  );
};

export default AuthorCard;
