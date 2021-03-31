import React from "react";
import Server, { Switch, Add } from "./Server";
import firebase from "../../../../firebase";
 
const serverinvite (props) => {
 const { serverid } firebase.database.ref("servers").id
 return (
   <div>
    <h1>this is a test page</h1>
   </div>
 )
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
