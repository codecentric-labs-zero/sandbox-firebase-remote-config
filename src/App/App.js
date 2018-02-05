import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import Welcome from '../Welcome/Welcome';
import WelcomeNew from '../Welcome/WelcomeNew';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showNewWelcomePage: false
    };
  }

  componentWillMount() {
    if (__DEV__) {
      firebase.config().enableDeveloperMode();
    }
    firebase.config().setDefaults({
      newWelcomePage: false,
    });
    firebase.config().fetch(0)
      .then(() => {
        return firebase.config().activateFetched();
      })
      .then((activated) => {
        if (!activated) {
          console.log('Fetched data not activated')
        } else {
          firebase.config().getValue('showNewWelcomePage').then((result) =>
            this.setState({ showNewWelcomePage: result.val() })
          );
        }
      })
      .catch(console.error);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.showNewWelcomePage ? <WelcomeNew /> : <Welcome />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
