import React from "react";
import "./MenuItems.css";
function MenuItems({ title, price, img, desc }) {
    return (
        <article className="menu-item">
            <img src={img} alt={title} className="img img-cover" />
            <div className="item-info">
                <header>
                    <h5>{title} </h5>
                    <span className="item-price">R{price}</span>
                </header>

                <p className="item-text">{desc}</p>
            </div>
        </article>
    );
}
export default MenuItems;
