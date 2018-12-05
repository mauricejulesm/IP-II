import React from 'react';
import AuthorCard from "./custom/AuthorCard";


const Authors = () => {
  return (
      <main className='ui segment'>
        <h2 className="ui center aligned icon header">
          <i className="circular users icon"/>
          Authors
        </h2>
        <div className="ui four column grid segment">
          <div className="column"><AuthorCard/></div>
          <div className="column"><AuthorCard/></div>
          <div className="column"><AuthorCard/></div>
          <div className="column"><AuthorCard/></div>
        </div>
      </main>
  );
};

export default Authors;
