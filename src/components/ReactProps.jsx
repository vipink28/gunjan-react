import React from 'react';
import Child from './Child';

function ReactProps(props) {
    return (
        <div>
            <h2>React Props Component</h2>

            <Child heading="Child 1" color="red" showHeading={true} />
            <Child heading="Child 2" color="blue" showHeading={true} />
            <Child heading="Child 3" color="green" />
            <Child heading="Child 4" color="brown" showHeading={true} />
            <Child heading="Child 5" color="magenta" />



            <Child heading="Child 6" color="magenta">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea odio nemo, doloremque molestias maxime nulla inventore praesentium repellat quos quod saepe ipsam? Quaerat magnam ipsam voluptatibus, voluptatem ut labore facilis.</p>
            </Child>
        </div>
    );
}

export default ReactProps;