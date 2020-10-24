import { firebase } from '@react-native-firebase/auth';
import React from 'react';
import Providers from './navigation';

firebase.initializeApp();

const App = () => {
  return <Providers />;
}

export default App;