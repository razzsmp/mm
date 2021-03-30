import React from 'react';
import VerifyEmail from './VerifyEmail';

import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

// mode - The user management action to be completed
// oobCode - A one-time code, used to identify and verify a request
// apiKey - Your Firebase project's API key, provided for convenience

const Action = (props) => {

  // Get the action to complete.
  const mode = props.location.query.mode;
  console.log("mode", mode);

  // Get the one-time code from the query parameter.
  const actionCode = props.location.query.oobCode;
  console.log("actionCode", actionCode);

  // (Optional) Get the API key from the query parameter.
  // const apiKey = props.location.query.apiKey;

  // Handle the user management action.
  switch (mode) {
    case 'recoverEmail':
      // Display reset password handler and UI.
      return (
        <View>
          <Text> Should handle recover email </Text>
        </View>
      );
    case 'resetPassword':
      // Display email recovery handler and UI.
      return (
        <View>
          <Text> Should handle recover email </Text>
        </View>
      );
    case 'verifyEmail':
      // Display email verification handler and UI.
      console.log("I reached Action.js");
      return <VerifyEmail actionCode={actionCode} />;
    default:
      // Error: invalid mode.
      return (
        <View>
          <Text>Error encountered</Text>
          <Text>The selected page mode is invalid.</Text>
        </View>
      );
  }
}

export default Action;
