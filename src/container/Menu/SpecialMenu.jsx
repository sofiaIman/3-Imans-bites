import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Food to put you in a good mood</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_drink  flex__center">
        <p className="app__specialMenu-menu_heading">Drinks & Mojitos</p>
        <div className="app__specialMenu_menu_items">
          {data.drinks.map((drink, index) => (
            <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tags={drink.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_meals  flex__center">
        <p className="app__specialMenu-menu_heading">Meals</p>
        <div className="app__specialMenu_menu_items">
          {data.meals.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;