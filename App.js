import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/signUpForm';
import SignInForm from './components/signInForm';

export default class App extends React.Component {
  componentDidMount(){
    const config = {
      apiKey: "AIzaSyCq_v9zXd7s58WI7cc26a728TPxTDnvK74",
      authDomain: "one-time-password-dc7c9.firebaseapp.com",
      databaseURL: "https://one-time-password-dc7c9.firebaseio.com",
      projectId: "one-time-password-dc7c9",
      storageBucket: "one-time-password-dc7c9.appspot.com",
      messagingSenderId: "58797919890"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
          <SignUpForm />
          <SignInForm />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
