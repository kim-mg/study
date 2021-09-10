import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

// Customer Class to Hook
export default function Customer(props) {
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
                <TableCell><img src={props.image} alt="profile"/></TableCell>
                <TableCell>{props.name}</TableCell>
                <TableCell>{props.birthday}</TableCell>
                <TableCell>{props.gender}</TableCell>
                <TableCell>{props.job}</TableCell>
                <TableCell><CustomerDelete stateRefresh={props.stateRefresh} id={props.id}/></TableCell>
        </TableRow>
    );
}

/*
class Customer extends React.Component {
    render() {
        return (
            // <div>
            //     <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
            //     <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            // </div>
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
            </TableRow>
        )
    }
}
*/

// class CustomerProfile extends React.Component {
//     render() {
//         return (
//             <div>
//                 <img src={this.props.image} alt="profile"></img>
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>
//         )
//     }
// }

// class CustomerInfo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.birthday}</p>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.job}</p>
//             </div>
//         )
//     }
// }

// export default Customer;