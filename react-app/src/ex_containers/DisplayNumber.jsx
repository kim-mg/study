import DisplayNumber from "../ex_components/DisplayNumber";
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state){
    return {
        number:state.number
    }
}
export default connect(mapReduxStateToReactProps)(DisplayNumber);
// import store from "../store";
// import { useState, useEffect } from 'react';

// export default function(props){
//     var [number, setNumber] = useState(store.getState().number);
//     useEffect(function(){
//         store.subscribe(function(){
//             setNumber(store.getState().number);
//         });
//     })
//     return (
//         <DisplayNumber number={number} unit={props.unit}></DisplayNumber>
//     );
// }