import React from "react";


export default class TextInput extends React.Component {
  
  handleChange(e) {
    const name = e.target.value;
    this.props.changeName(name);
  }

  render() {
    return (
    	<div>
    		<input value={this.props.name} onChange={this.handleChange.bind(this)}/>
    	</div>
    );
  }
}
