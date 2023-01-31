import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {
  const [tickets, setTickets] = useState(0);
  const [price, setPrice] = useState("");

  const calculate = () => {
    if (tickets < 0){
      alert("Please input an integer value greater than 0");
    }else if (tickets == 0){
      setPrice("");
    }else{
      setPrice("Ticket Cost: $" + (tickets*99.99).toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ticket Vault</Text>
      <TextInput placeholder='Number of Tickets' style={styles.textInput} onChangeText={text=>setTickets(parseInt(text))}></TextInput>
      <Pressable onPress={calculate}>
        <Text style={styles.button}>Find The Cost</Text>
      </Pressable>
      <Text style={styles.output}>{price}</Text>
      <Image source={require("./components/images/concert.png")} style={styles.image}></Image>

      <StatusBar style='auto'></StatusBar>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },

  header:{
    fontSize: 60,
    marginTop: 120,
    marginBottom: 30,
  },

  textInput:{
    color: 'black',
    fontSize: 35,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },

  button:{
    backgroundColor:'#f98b88',
    padding: 5,
    fontSize: 35,
    margin: 30,
  },

  output:{
    fontSize:35,

  },

  image:{
    width: '100%',
    marginTop: 30,
  },
});
