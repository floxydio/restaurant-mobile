import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from "react"


export default function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Username' onChangeText={(e) => setUsername(e)} />
      <TextInput secureTextEntry={true} style={styles.input} placeholder='Password' onChangeText={(e) => setPassword(e)} />
      <Pressable onPress={() => alert(`Username: ${username}, password: ${password}`)} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10, width: 200, marginTop: 50, alignItems: "center", height: 40 }}>
        <Text style={{
          color: "white",
          fontWeight: "bold",
        }}>Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 0.3,
    borderRadius: 10,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
