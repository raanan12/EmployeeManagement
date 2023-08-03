import { StyleSheet, Text, TouchableOpacity,View } from 'react-native'
import React from 'react'

export default function Empoly(props) {
  return (
    <TouchableOpacity onPress={()=>{props.setEmpolyShow(props.val);props.setShow(true)}} style={styles.main}>
      <Text style={styles.text}>{props.val.userName}</Text>
      <Text style={styles.text}>{props.val.id}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:'rgb(74, 74, 74)',
    fontWeight:'bold',
    borderColor:'black',
    borderWidth:2,
    borderStyle:'solid',
    margin:5,
    padding:20,
    borderRadius:4
}
,text:{
  fontSize:15,
  color:'#ffffff'
}
})