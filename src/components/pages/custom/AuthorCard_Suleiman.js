import React from 'react';

const AuthorCard_Suleiman = () => {
  // noinspection JSUnresolvedFunction
  let imagePath = require('../../../images/author_icon.png');
  return (
      <div className="ui fluid card">
        <div className="image">
          <img src={imagePath} alt=""/>
        </div>
        <div className="content">
          <a href="#" className="header">Suleiman O. Micheal</a>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam architecto asperiores corporis cumque
            debitis distinctio eaque eius officiis perspiciatis porro, quas qui quis rem sed sequi ullam! Architecto,
            quibusdam?
          </div>
        </div>
      </div>
  );

  
};


export default AuthorCard_Suleiman;
