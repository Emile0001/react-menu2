import React from "react";
import "./Menu.css";

import MenuItems from "../MenuItems/MenuItems";

function Menu({ menuItems }) {
    return (
        <div className="section-center">
            {menuItems.map((items) => (
                <MenuItems key={items.id} {...items} />
            ))}
        </div>
    );
}

export default Menu;
