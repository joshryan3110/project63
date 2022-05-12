import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Search, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(){
    super()
    this.state={word:"", isSearchPressed:""}
  }

  render(){
    return(
      <TextInput style={styles.textBox}
          onChangeText={text=>{
            this.setState({
              word:text,
              isSearchPressed: false,
              word: "Loading...",
              lexicalCategory:" ",
              examples: [],
              definition:" ",
            })
          }}
          value={this.state.word}
      />,


      <TouchableOpacity 
        style={styles.buttonColor}
        onPress={()=>{
          this.setState({ isSearchPressed: true })
          this.getWord{this.state.word}
        }}
      /> 

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBox: {
    borderWidth: 2,
    marginTop: 300,
    width: "70%",
    height: 50,
    textAlign:"center",
    alignSelf:"center"
  },

  buttonColor: {
    alignSelf:"center",
    marginTop:50,
    backgroundColor:"green",
    width:"50%",
    height:50
  },

  buttonText: {
    textAlign:"center",
    marginTop:5,
    fontSize:30
  },
});
