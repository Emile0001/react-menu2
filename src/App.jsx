import React, { useState } from "react";
import "./App.css";
import menu from "./data";
import Title from "./components/Title/Title";
import Menu from "./components/Menu/Menu";

function App() {
    const [menuItems, setMenuItems] = useState(menu);

    return (
        <main>
            <section>
                <Title text="Menu" />
            </section>
            <section>
                <Menu menuItems={menuItems} />
            </section>
        </main>
    );
}

export default App;
