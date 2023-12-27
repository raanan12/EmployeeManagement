import { StyleSheet, Text, TouchableOpacity,View,Image } from 'react-native'
import React from 'react'

export default function Empoly(props) {
  return (
    <TouchableOpacity onPress={()=>{props.setEmpolyShow(props.val);props.setShow(true)}} style={styles.main}>
      <Image  source={require("./imges/propsUser.png")} />
      <View>
        <Text style={styles.text}> name :{props.val.userName}</Text>
        <Text style={styles.text}> id : {props.val.id}</Text>
        <Text style={styles.text}> class : {props.val.class}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main:{
    margin: 15,
    borderRadius: 10,
    height:140,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'white',
    borderColor:'rgb(35,163,198)',
    borderWidth:2,
    padding:10
}
,text:{
  fontSize:16,
  color:'rgb(35,163,198)'
}
})