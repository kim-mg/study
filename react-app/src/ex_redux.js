import React, { useState } from 'react';
import './ex_redux.css';

import AddNumberRoot from './ex_components/AddNumberRoot';
import DisplayNumberRoot from './ex_components/DisplayNumberRoot';

function Redux() {
    var [number, setNumber] = useState(0);
    return (
        <div className="App">
            <h1>Hello World</h1>
            <AddNumberRoot></AddNumberRoot>
            <DisplayNumberRoot></DisplayNumberRoot>
        </div>
    );
}

export default Redux