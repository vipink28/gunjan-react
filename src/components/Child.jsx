import React from 'react';

function Child(props) {
    // props = {title: "Child 1"}
    // props.children - children property in props is used to pass the content between the opening and closing tag of the component.
    // console.log(props);
    return (
        <div style={{ backgroundColor: props.color }}>
            <h2>{props.heading}</h2>
            <div>
                {props.children}
            </div>
            {
                props.showHeading ?
                    <h4>React Child Component</h4> : ""
            }
        </div>
    );
}

export default Child;