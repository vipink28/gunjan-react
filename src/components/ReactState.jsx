import { useState } from "react";

function ReactState() {
    var title = "Section Title";
    const handleTitle = () => {
        console.log(title);
        title = "My Section";
        console.log(title);
    }


    // syntax to create a state - const [variable, variableSetterFunction] = useState(initial value) 
    const [sectionTitle, setSectionTitle] = useState("State Section Title");
    const handleTitleUsingState = () => {
        setSectionTitle("New State Title");
    }

    const [isVisible, setIsVisible] = useState(false);
    const handleContent = () => {
        setIsVisible(true);
    }

    return (
        <div>
            <h3>React State</h3>
            <div>
                <h4>{title}</h4>

                <h4>{sectionTitle}</h4>
                {
                    isVisible ?
                        <p>Summary</p>
                        : ""
                }
                <button onClick={handleContent}>Show</button>

                <button onClick={handleTitle}>Change Title</button>
                <button onClick={handleTitleUsingState}>Change Title Using State</button>
            </div>
        </div>
    )
}

export default ReactState;