import { StyleSheet, Text, View } from 'react-native'
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
      <Appbar.Action color={'white'} icon="menu" onPress={() => {props.setShowNav(!props.showNav)}} />
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        height:40,
        display:'flex',
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:15,
        backgroundColor:'black',
    }
    ,
    textStyle:{
        fontWeight:900,
        color:'white'
    },
})