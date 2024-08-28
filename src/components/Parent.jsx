import React from 'react';
import MyChild from './MyChild';

function Parent(props) {
    // let title = "My Child Title";
    return (

        <div>
            <MyChild user="My Child title" />

            <MyChild user="My Child title 2" />
        </div>
    );
}

export default Parent;