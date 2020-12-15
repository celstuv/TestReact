import React, { Component } from "react";

class Client extends Component {
  render() {
    //const details = this.props.details;
    //const onDelete = this.props.onDelete;

    //autre manière
    const { details, onDelete } = this.props;

    return (
      //Si on avait aps mis la const, on aurait dû écrire {this.props.details.nom};
      <li>
        {details.nom} <button onClick={() => onDelete(details.id)}>X</button>
      </li>
    );
  }
}
export default Client;
