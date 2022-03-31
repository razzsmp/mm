import React from "react";
import Server, { Switch, Add } from "./Server";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import firebase from "../../firebase";
 
componentDidMount () {
    const { id } = this.props.match.params;
}

class Auth extends React.Component {
  state = {
    registerError: null,
    loginError: null,
    forgotpassError: null
  };
  componentDidMount() {}

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
 
 invitetoserver = (id) => {
    this.setState({ loginError: null });
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
      })
  };
 
   render() {
    return (
      <div className="auth">
        <div className="wrapper">
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              timeout={500}
              classNames="alert"
            >
              <Switch>
                <Route path="/invite:id">
                  <Login login={this.invitetoserver} error={this.state.loginError} />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

 
export default invite;
