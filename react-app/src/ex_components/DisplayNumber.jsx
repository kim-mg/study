import React, { useEffect, useState } from 'react';

export default function DisplayNumber(props) {
    return (
        <div>
            <h1>Display Number</h1>
            <input type="text" value={props.number} readOnly></input>
            {props.unit}
        </div>
    );
}