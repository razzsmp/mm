import React from "react";
import Server, { Switch, Add } from "./Server";
import firebase from "../../../../firebase";
 
componentDidMount () {
    const { id } = this.props.match.params
}

const TotalServers = props => {
  const joinServer = id => {
    firebase
      .database()
      .ref("servers")
      .child(id)
      .once("value", snap => {
        if (snap.val()) {
          firebase
            .database()
            .ref("servers/")
            .child(id + "/users/" + props.user.uid)
            .set({
              name: props.user.displayName,
              photo: props.user.photoURL,
              role: "normal",
              uid: props.user.uid
            });
          firebase
            .database()
            .ref("users")
            .child(props.user.uid + "/servers/" + id)
            .set({ id });
        }
      });
  };

 
export default invite;
