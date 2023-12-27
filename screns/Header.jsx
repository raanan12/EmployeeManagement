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
      <View style={styles.user}>
        <Image style={styles.img} source={require("./imges/user3.png")}/>
        <Text style={styles.textStyle}>{user.userName}</Text>
      </View>
      <TouchableOpacity onPress={() => {props.setShowNav(!props.showNav)}}>
          <Image style={styles.bottun} source={require("./imges/menU.png")} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        height:55,
        display:'flex',
        flexDirection:"row-reverse",
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:15,
        backgroundColor:'rgb(35,163,198)',
    }
    ,
    textStyle:{
        fontWeight:'800',
        color:'white',
        fontSize:20
    },
    bottun:{
      margin:5,
      height:36,
      width:36,
      elevation:8,
  
    },
    user:{
      display:'flex',
      flexDirection:'row-reverse',
      alignItems:'center',
      width:110,
      justifyContent:'space-between'
    },
    img:{
      height:35,
      width:36
    }
})