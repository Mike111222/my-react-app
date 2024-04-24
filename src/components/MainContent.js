import React from "react";

function MainContent() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "night";
    }
    return (
        <main>
            <h3 style= {{color: "#FF8C00"}}>Good { timeOfDay }! </h3>
            
        </main>
    )
}

export default MainContent;