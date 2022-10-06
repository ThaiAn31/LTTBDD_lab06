import React, {useState, useEffect} from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

function TextItem(props){
const {data} = props;
return(
  <View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',}}>
        <Text>{data.STT}</Text>
        <Text style={{marginLeft:20,}}>{data.name}</Text>
        </View>
      <View >
        <TouchableOpacity>
            <Text style={{borderWidth:1, backgroundColor:'#ff0000'}}>Remove</Text>
        </TouchableOpacity>
      </View>
        </View>
    
  </View>  
);
};
export default TextItem;

