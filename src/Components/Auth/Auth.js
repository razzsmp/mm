import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from "./Login";
import Register from "./Register";
import Forgotpassword from "./ForgotPass";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import "./Auth.style.scss";
import firebase from "../../firebase";

class Auth extends React.Component {
  state = {
    registerError: null,
    loginError: null,
    forgotpassError: null
  };
  componentDidMount() {}



  forgotpass = (email) => {
    this.setState({ forgotpassError: null });
    firebase
      .sendPasswordResetEmail(email)
  }
  login = (email, password) => {
    this.setState({ loginError: null });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(e => this.setState({ loginError: e }));
  };

  register = (email, password, username) => {
    this.setState({ registerError: null });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        user.user
          .updateProfile({
            displayName: username,
            photoURL: `https://www.jimhub.gq/logo512.png`
          })
          .then(() => {
            firebase
              .database()
              .ref("users")
              .child(user.user.id)
              .set({
                profile: {
                  name: user.user.displayName,
                  avatar: user.user.photoURL,
                  pass: password
                }
              })
              .then(() => console.log("success"));
          })
          .catch(e => console.log(e));
      })
      .catch(e => this.setState({ registerError: e }));
  };

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(52,52,52,1)",
    justifyContent: "center"
  },
  rect: {
    width: 454,
    height: 490,
    backgroundColor: "rgba(105,105,105,1)",
    borderRadius: 32,
    alignSelf: "center"
  },
  email: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 119,
    fontSize: 30
  },
  rect4: {
    width: 338,
    height: 73,
    backgroundColor: "rgba(105,105,105,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 73,
    fontSize: 50,
    width: 338,
    borderRadius: 10
  },
  password: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 139,
    fontSize: 30,
    marginTop: 6
  },
  rect3: {
    width: 338,
    height: 73,
    backgroundColor: "rgba(105,105,105,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 73,
    fontSize: 50,
    width: 338,
    borderRadius: 10
  },
  button: {
    top: 0,
    left: 0,
    width: 342,
    height: 74,
    position: "absolute",
    backgroundColor: "rgba(114,137,217,1)",
    borderRadius: 14
  },
  login: {
    top: 20,
    left: 119,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 229,
    fontSize: 30
  },
  buttonStack: {
    width: 348,
    height: 74,
    marginTop: 26
  },
  emailColumn: {
    width: 348,
    marginTop: 135,
    marginLeft: 58
  },
  emailColumnFiller: {
    flex: 1
  },
  welcomeBack: {
    fontFamily: "roboto-700",
    color: "rgba(253,252,252,1)",
    fontSize: 50,
    alignSelf: "flex-end",
    marginBottom: 375,
    marginRight: 54
  }
});

export default Untitled2;

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
                <Route exact path="/register">
                  <style.register
                    register={this.register}
                    error={this.state.registerError}
                  />
                </Route>
                <Route path="/login">
                  <Login login={this.login} error={this.state.loginError} />
                </Route>
                <Route path="/forgotpass">
                  <Forgotpassword forgotpass={this.forgotpass} error={this.state.forgotpassError} />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withRouter(Auth);
