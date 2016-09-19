import React, { Component } from 'react';
import firebase, { reference } from '../firebase';
import moment from 'moment';

export default class Message extends Component {

  render() {
    const props = this.props.message;
    return (
      <li className="SingleMessage" key={props.key}>
        <span className="MessageDate">
          {props.createdAt}
        </span>
        <span className="UserName">
          {props.user.displayName}
        </span>
        <p className="MessageContent">
          {props.content}
        </p>
      </li>
    );
  }
}

//   render() {
//     const props = this.props.message;
//     return (
//       <li className="SingleMessage" key={props.key}>
//         <span className="MessageDate">
//           {props.createdAt}
//         </span>
//         <span className="UserName">
//           {props.user.displayName}
//         </span>
//         <p className="MessageContent">
//           {props.content}
//         </p>
//       </li>
//     );
//   }
// }

