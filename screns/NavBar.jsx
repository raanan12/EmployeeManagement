import { StyleSheet, Text, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Button} from 'react-native-paper'
import React,{useContext} from 'react'
import Alldata from '../contextApi'

export default function NavBar(props) {
  const nav = useNavigation()
  const {setFlag1}= useContext(Alldata)
  const {flag1}= useContext(Alldata)
  return (
    <View style={styles.main}>
        <Button onPress={()=>{setFlag1(!flag1);props.setShow(0);props.setShowNav(false) }} >  All works</Button>
        <Button onPress={()=>{setFlag1(!flag1);props.setShow(1);props.setShowNav(false)}} style={styles.buttonStyle} >my works</Button>
        <Button onPress={()=>{props.setShow(2);props.setShowNav(false)}} style={styles.buttonStyle}>History</Button>
        <Button onPress={()=>{props.setShow(3);props.setShowNav(false)}} style={styles.buttonStyle}>Employee details</Button>
        <Button onPress={()=>{nav.navigate('signIn')}} style={styles.buttonStyle}>Exite</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        top:40,
        right:0,
        position:"absolute",
        width:150,
        padding:4,
        borderBottomLeftRadius:4,
        backgroundColor:'black',
        zIndex: 1
    },
    textStyle:{
        color:'white'
    },
    buttonStyle:{
        borderRadius:0,
        borderColor:'white',
        borderTopWidth:2,
        borderStyle:'solid',
        color:'white',
    }
})