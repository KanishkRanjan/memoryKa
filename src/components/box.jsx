import React from "react";

import "../style/box.css"

const Box = ({ image, text , clickHandler}) => {
    return (
        <div className="box" onClick={clickHandler}>
            {image}
            <div className="txt">{text}</div>
        </div>
    );
};

export default Box;
