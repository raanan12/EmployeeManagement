import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native'
import {Button , Appbar} from 'react-native-paper'
import Alldata from '../contextApi'
import React,{useContext,useState} from 'react'

export default function Header(props) {
  const {userConenct} = useContext(Alldata)
  const user = userConenct
  const [show,setShow]=useState(false)


  return (
    <View style={styles.main}>
      <Text style={styles.textStyle}>{user.userName}</Text>
      <TouchableOpacity onPress={() => {props.setShowNav(!props.showNav)}}>
          <Image style={styles.bottun} source={require("./imges/men.png")} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        height:45,
        display:'flex',
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:15,
        backgroundColor:'#0a2634',
    }
    ,
    textStyle:{
        fontWeight:'900',
        color:'white'
    },
    bottun:{
      margin:5,
      height:36,
      width:36,
      elevation:8,
  
    }
})