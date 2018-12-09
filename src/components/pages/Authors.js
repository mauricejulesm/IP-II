import React from 'react';
import AuthorCard_Heritier from "./custom/AuthorCard_Heritier";
import AuthorCard_Suleiman from "./custom/AuthorCard_Suleiman";
import AuthorCard_Maurice from "./custom/AuthorCard_Maurice";
import AuthorCard_Aloys from "./custom/AuthorCard_Aloys";
import AuthorCard_Bernard from "./custom/AuthorCard_Bernard";

const Authors = () => {
  return (
      <main className='ui segment'>
        <h2 className="ui center aligned icon header">
          <i className="circular users icon"/>
          Authors
        </h2>
        <div className="ui three column grid segment">
          <div className="column"><AuthorCard_Heritier/></div>
          <div className="column"><AuthorCard_Suleiman/></div>
          <div className="column"><AuthorCard_Maurice/></div>
        </div>

        <div className="ui two column grid segment">
          <div className="column"><AuthorCard_Aloys/></div>
          <div className="column"><AuthorCard_Bernard/></div>
        </div>
      </main>
  );
};

export default Authors;
