import AddNumber from "../ex_components/AddNumber";
import { connect } from "react-redux";

function mapReduxDispatchToReactProps(dispatch){
    return {
        onClick:function(size){
            dispatch({type:'INCREMENT', size:size});
        }
    }
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

// import store from "../store";

// export default function(props) {
//     return (
//         <AddNumber onClick={function(size){
//             store.dispatch({type:'INCREMENT', size:size});
//         }}></AddNumber>
//     );
// }