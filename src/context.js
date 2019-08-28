import React, { Component } from "react";
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) =>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(c => c.id !== action.payload)
            };
            case 'ADD_CONTACT':
              return {
                ...state,
                contacts: [action.payload, ...state.contacts]
              }
            case 'UPDATE_CONTACT':
              return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? contact = action.payload : contact)
              }
        default:
            return state;
    }
}

export class Provider extends Component {
  state = {
    contacts: [
      // { id: 1, name: "John Doe", email: "email", phone: "123" },
      // { id: 2, name: "Karen Williams", email: "email", phone: "123" },
      // { id: 3, name: "Henry Johnson", email: "email", phone: "123" }
    ],
    dispatch: action => {
        this.setState(state => reducer(state, action))
    }
  };

  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(response => this.setState({
  //     contacts: response.data
  //   }));
  // }

  async componentDidMount(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    this.setState({contacts: res.data});
  }

  render() {
    return <Context.Provider value={this.state}>
        {this.props.children}
    </Context.Provider>;
  }

}
 
export const Consumer = Context.Consumer;