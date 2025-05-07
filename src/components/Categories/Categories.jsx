import "./Categories.css";
export default function Categories({ categories }) {
    return (
        <div className="btn-container">
            {categories.map((category) => {
                return (
                    <div>
                        <button type="button" className="btn">
                            {category}
                        </button>
                    </div>
                );
            })}
            ;
        </div>
    );
}
