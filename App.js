import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import PhonicSoundButton from './components/PhonicSoundButton';

console.log(db["this"].chunks);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"blue"}
          centerComponent={{
            text: "Monkey-Chunky App",
            style: { fontSize: 22, color: "white" }
          }}
        >
        </Header>

        <Image style={styles.icon}
          source={{
            uri: 'coolmonkey.png'
          }}
        />

        <TextInput style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text} />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
            this.setState({ phonicSounds: db[this.state.text].phones });
          }}>
          <Text style={styles.buttonText}>Split Word</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => {
            return (
              <PhonicSoundButton
                wordChunk={this.state.chunks[index]}
                soundChunk={this.state.phonicSounds[index]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },

  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none'
  },

  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },

  displayText: {
    textAlign: 'center',
    fontSize: 30
  },

  icon: {
    width: 150,
    height: 150,
    marginLeft: 100
  },

  chunkButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    margin: 5,
    backgroundColor: 'blue'
  }
});


