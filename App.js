import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList  } from 'react-native';
import Items from './Item';


export default function App() {
  const [textIP, setProduct] = useState([
    {
        STT: '1',
        name: 'C#',
    },
    ]);



  const [text, onChangeText] = React.useState("nhap noi dung");
  return (
    <View style={styles.container}>
    <View style={{justifyContent:'space-between', flexDirection:'row',backgroundColor:'#00bfff',}}>
    
    <View style={{paddingTop:60,}}>
    <SafeAreaView  style={{borderWidth: 1,width:200, backgroundColor:'#ffffff'}}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      </SafeAreaView>
    </View>
    <View style={{paddingTop:50, marginLeft:20,}}>
      <TouchableOpacity>
      <Image style={{width:50, height:50}} source={require('./assets/plus.png')} />
      </TouchableOpacity>
    </View>
      
      
    </View>
    <View style={{ flex:20,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#00000030',}}>
    <FlatList 
             data={textIP}
             keyExtractor={(item) => item.name}
             renderItem={({item})=> <Items data ={item}/>}
            />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1/3,
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
