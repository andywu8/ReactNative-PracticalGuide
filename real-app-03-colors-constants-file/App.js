import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const startGamerHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  let content = <StartGameScreen />
  if (userNumber) {
    content = <GameScreen onStartGame={startGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {/* <StartGameScreen /> */}
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
