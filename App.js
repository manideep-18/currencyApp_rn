/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  ScrollView,Text,View,SafeAreaView,StyleSheet, TextInput,TouchableOpacity, Alert
} from 'react-native';

const currencyPerRupee={
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.000004
}

const App = () => {
  const [inputValue,setInputValue]=useState(0)
  const [resultValue,setResultValue]=useState(0)

  const buttonPressed=(currencyKey)=>{
    if(!inputValue){
      Alert('Please enter a value')
    }

    const result=parseFloat(inputValue)*currencyPerRupee[currencyKey]
    setResultValue(result.toFixed(2))
  }

  return (
    <>
    <ScrollView backgroundColor="#1b262c" keyboardShouldPersistTaps="handled" contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputText} placeholder="Enter Value" keyboardType="numeric" placeholderTextColor="#c1c1c1" value={inputValue} onChangeText={(inputValue)=>{setInputValue(inputValue)}}></TextInput>
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupee).map((eachKey)=>(
            <TouchableOpacity key={eachKey} style={styles.convertButton} onPress={()=>{buttonPressed(eachKey)}}>
              <Text style={styles.convertButtonText}>
                {eachKey}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
     </>
  )}

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1b262c"
  },
  resultContainer:{
    height:70,
    marginTop:80,
    justifyContent:"center",
    borderColor:"#bbe1fa",
    borderWidth:2,
    alignItems:"center"
  },resultValue:{
    fontSize:30,
    color:"#FFF",
    fontWeight:"bold"
  },
  inputContainer:{
    height:70,
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#bbe1fa",
    borderWidth:2,
  },
  inputText:{
    fontSize:30,
    color:"#FFF",
    fontWeight:"bold"
  },
  convertButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:10
  },
  convertButton:{
    height:100,
    width:"33.3%",
    alignItems:"center",
    justifyContent:"center",
    borderWidth:2,
    borderColor:"#bbe1fa",
    marginTop:10,
    backgroundColor:"#0f4c75"
  },
  convertButtonText:{
    color:"#FFF",
    fontSize:15
  }
})