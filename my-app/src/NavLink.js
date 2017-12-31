import React, { Component } from 'react';

class NavLink extends Component {
constructor(props) {
    super(props);
    this.linkText = props.linkText;
    this.href = props.href;
    this.class = props.class;
}

    render() {
      return (
        <a href={this.href} class={this.class}> {this.linkText} </a>
      );
    }
  }

  export default NavLink