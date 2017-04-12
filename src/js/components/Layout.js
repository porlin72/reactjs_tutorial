import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import TextInput from "./UIComponent/TextInput"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      name: "Enter your name"
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  changeName(name) {
    this.setState({name});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} name={this.state.name} />
        <TextInput changeName={this.changeName.bind(this)} name={this.state.name} />
        <Footer />
      </div>
    );
  }
}
