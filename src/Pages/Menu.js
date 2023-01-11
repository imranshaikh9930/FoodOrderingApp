import React from 'react';
import { data } from "../Data/data";
import MenuItem from '../Components/MenuItem';
import "../Styles/Menu.css";


function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {
                    data.map((item, id) => {
                        return (
                            <MenuItem
                                key={id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            
                            />
                        );
                    })
                }
            </div>
      </div>
  
  )
}

export default Menu