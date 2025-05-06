import "./Title.css";

function Title({ text }) {
    return (
        <div>
            <h2 className="title">{text || "Enter Title"}</h2>
            <div className="title-underline"></div>
        </div>
    );
}

export default Title;
