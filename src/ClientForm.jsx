import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    nouveauClient: ""
  };

  //affichage de la saisie dans l'input
  handleChange = (event) => {
    //Enregistrer la valeur saisie dans l'input
    this.setState({ nouveauClient: event.currentTarget.value });
    //console.log(event.currentTarget.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    //personnalisation de l'id
    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    //Création d'un id et nom
    //const client = {id: id, nom: nom};
    this.props.onClientAdd({ id, nom });
    this.setState({ nouveauClient: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          /*ref={this.clientInput}*/ onChange={this.handleChange}
          value={this.state.nouveauClient}
          type="text"
          placeholder="Ajouter un client"
        />
        <button>Confirmer</button>
      </form>
    );
  }
}
export default ClientForm;
