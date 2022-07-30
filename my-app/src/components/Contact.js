import { Component } from "react";
import { contacts } from "../const/const";
import "../Style/contact.scss";

export default class Contact extends Component {
  render() {
    const name = this.props.match.params.id;
    let user = [];
    contacts.map(el => el.firstName === name ? user = el : "")
    function imgGender(gender) {
      if (gender === "male") {
        return <p className="male"></p>;
      } else if (gender === "female") {
        return <p className="female"></p>;
      } else {
        return <p className="nonGender"></p>;
      }
    }
    return (
        <div className="main-content">
          <div className="main-content__info">
          <p className="gender">{imgGender(user.gender)}</p>
              <p className="firstName">
                {user.firstName} {user.lastName}
              </p>
              <p className="phone">{user.phone}</p>
              <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="main-content__other">
            <p><strong>Хоббі:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, dolorum.</p>
            <p><strong>Ким працює:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, dolorum.</p>
            <p><strong>Адреса: </strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, dolorum.</p>
            <p><strong>Faceboock:</strong> <a href={"https://www.facebook.com"}>https://www.facebook.com</a></p>
            <p><strong>Instagram:</strong> <a href={"https://www.instagram.com/"}> https://www.instagram.com/</a></p>
          </div>
        </div>
    );
  }
}
