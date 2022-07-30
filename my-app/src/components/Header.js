import { Component } from "react";
import Nav from "./Nav";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">
        <h1 className="title__logo">
          Book Face
        </h1>
        </div>
        <Nav />
      </div>
    );
  }
}
