import React, { Component } from 'react';

export default class Message extends Component {

  render() {

    const message = this.props.message;
    const user = this.props.user;
    return (
      <li className="SingleMessage" key={message.key}>
        <span className="MessageDate">
          {message.createdAt}
        </span>
        <span className="UserName">
          {user.displayName}
        </span>
        <p className="MessageContent">
          {message.content}
        </p>
      </li>
    );
  }
}

//   render() {
//     return (
//       <li className="SingleMessage" key={this.props.id}>
//         <span className="MessageDate">
//           {this.props.messageDate}
//         </span>
//         <span className="UserName">
//           {this.props.username}
//         </span>
//         <p className="MessageContent">
//           {this.props.messageContent}
//         </p>
//       </li>
//     );
//   }
// }


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

