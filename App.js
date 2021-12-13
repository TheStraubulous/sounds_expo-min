import React, { Component } from 'react';
import { Button, Image, Sound, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import sb_crazy from './assets/spongebob-crazy.gif';
import { Audio } from 'expo-av';

export default class App extends Component {
  async componentDidMount() {
      Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playsThroughEarpeiceAndroid: true,
      });
    
      this.sound = new Audio.Sound();

      const status = {
        shouldPlay: false
      };

      this.sound.loadAsync(require('./assets/derp.m4a'), status, false);
    }
      playSound() {
        this.sound.playAsync();
      }
      
      render() {
        return (
          
          <View style={styles.container}>
            <Button
              title="imma buttin git-test3'"
              color="#3CBBB1"
              onPress={this.playSound.bind(this)} />
          </View>
        );
      }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sb_crazy: {
    width: 640,
    height: 356,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 21,
    marginHorizontal: 15,
  },
});