import React from 'react';

function TableRow(props) {
    // destructuring - desctructuring can be used for arrays and objects
    // objects - const {propertyname} = object;
    const { item } = props;


    return (
        <tr key={props.item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.fees}</td>
            <td>{item.course}</td>
            <td>{item.gender}</td>
        </tr>
    );
}

export default TableRow;