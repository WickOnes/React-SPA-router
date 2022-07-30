import { Component } from "react";
import {
  PostAuthor,
  ANAKIN_IMAGE,
  RAY_IMAGE,
  Chewbacca_IMG,
  Loreal_IMG,
} from "./PostAuthor";

export default class Publication extends Component {
  render() {
    return (
        <div className="publication">
          <PostAuthor
            author={{
              name: "Anakin skywalker",
              photo: ANAKIN_IMAGE,
              nickname: "@dart_vader",
            }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date={"26 февр."}
            like={"598"}
          />
          <PostAuthor
            author={{
              name: "Chewbacca",
              photo: Chewbacca_IMG,
              nickname: "@Big_boss",
            }}
            content="WTF?Luke...?"
            image={Loreal_IMG}
            date={"26 февр."}
            like={"100000"}
          />
        </div>
    );
  }
}
