import React, { useState } from "react";
import "./App.css";
import menu from "./data";
import Title from "./components/Title/Title";
import Menu from "./components/Menu/Menu";
import Categories from "./components/Categories/Categories";

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const allCategories = ["all", ...tempSet];
//one liner
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
    const [menuItems, setMenuItems] = useState(menu);
    const [categories, setCategories] = useState(allCategories);
    console.log(categories);

    return (
        <main>
            <section>
                <Title text="Menu" />
            </section>
            <section>
                <Categories categories={categories} key={categories} />
            </section>
            <section>
                <Menu menuItems={menuItems} />
            </section>
        </main>
    );
}

export default App;
