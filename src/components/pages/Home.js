import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  // noinspection JSUnresolvedFunction
  let imagePath = require('../../images/stock.jpg');
  return (
      <main className="ui segment">
        <div className="ui two column very relaxed grid">
          <section className="column">
            <img className="ui fluid image" src={imagePath} alt="random stock-imag"/>
          </section>
          <section className="column">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur distinctio exercitationem explicabo
              fugiat impedit libero, quia quibusdam repellat unde voluptatum? At consectetur dolorem magni maxime quidem
              ratione similique sint voluptatibus!
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, iure natus nobis omnis pariatur
              perferendis temporibus voluptas. Aliquam assumenda eaque, esse maxime minima molestiae nam nemo
              perferendis
              ratione repudiandae rerum.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem beatae consectetur culpa, debitis
              doloremque eaque incidunt libero molestiae nesciunt odit omnis quam qui quod quos reprehenderit saepe
              voluptatem voluptatibus?
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga id incidunt itaque libero minima placeat,
              provident sequi. Commodi dolore dolorem dolorum enim eveniet, itaque nostrum omnis, quas rerum sit
              voluptatibus?
            </p>

            <button className="ui fluid button"><Link to="/about">Explore our Data collections</Link></button>
          </section>
          <div className="ui vertical divider">
            and
          </div>
        </div>
      </main>
  );
};

export default Home;
