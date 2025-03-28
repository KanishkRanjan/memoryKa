import React from "react";
import Box from "./box"; 

import "../style/mainScreen.css"



const MainScreen = ({levelChooser}) => {
    return (
        <>
            <h2>🚀 Welcome to memoryKa 🚀</h2>
            <div className="levelSelector">
                <Box text="Easy" clickHandler={() => levelChooser("easy")} image={<h2> 🙂</h2>} />
                <Box text="Medium" clickHandler={() => levelChooser("medium")} image={<h2>🤓</h2>} />
                <Box text="Hard"  clickHandler={() => levelChooser("hard")} image={<h2>🤬</h2>} />
            </div>
        </>
    );
};

export default MainScreen;
