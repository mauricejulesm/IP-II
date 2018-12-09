import React from 'react';

const AuthorCard_Maurice = () => {
  // noinspection JSUnresolvedFunction
  let imagePath = require('../../../images/author_icon.png');
  return (
      <div className="ui fluid card">
        <div className="image">
          <img src={imagePath} alt=""/>
        </div>
        <div className="content">
          <a href="#" className="header">Maurice Jules Mulisa</a>
          <div className="description">
            Maurice, is interested in business intelligence (BI) and Internet of Things (IOT).
            Maurice, has initiative of helping small startup businesses to use data they already have within their reach
            to make informed decisions.
          </div>
        </div>
      </div>
  );

  
};


export default AuthorCard_Maurice;
