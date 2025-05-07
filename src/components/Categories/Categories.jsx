import React from "react";
import "./Categories.css";

export default function Categories({ categories, filteredCategories }) {
    return (
        <div className="btn-container">
            {categories.map((category) => {
                return (
                    <button
                        type="button"
                        className="btn"
                        key={category}
                        onClick={() => {
                            filteredCategories(category);
                        }}
                    >
                        {category}
                    </button>
                );
            })}
            ;
        </div>
    );
}
