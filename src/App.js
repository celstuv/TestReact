import React from "react";
import { render } from "react-dom";
import "./styles.css";
import Client from "./Client";
import ClientForm from "./ClientForm";

class App extends React.Component {
  // A connaitre mais les dev react n'aiment  pas
  //clientInput = React.createRef();

  state = {
    //propriété
    clients: [
      { id: 1, nom: "Céline GANA" },
      { id: 2, nom: "July BRISSON" },
      { id: 3, nom: "Helder LEAL" }
    ]
  };

  //Méthodes :
  handleDelete = (id) => {
    //Copie de mon tableau
    const clients = this.state.clients.slice();
    //Trouver l'index du client sur lequel j'ai cliqué
    const index = clients.findIndex((client) => client.id === id);

    clients.splice(index, 1);

    this.setState({ clients: clients });
  };

  handleAdd = (client) => {
    //Copie de mon tableau de client
    //const clients = this.state.clients.slice();
    //autre façon de l'écrire
    const clients = [...this.state.clients];

    //Intégration du nouveau client dans le tableau
    clients.push(client);
    this.setState({ clients: clients });
  };

  render() {
    const title = "Liste de clients";

    return (
      <div className="App">
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map((client) => (
            //propriété détails =props
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}
export default App;
