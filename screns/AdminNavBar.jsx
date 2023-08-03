import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import Alldata from '../contextApi'
import {Button} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'


export default function AdminNavBar(props) {
  const nav = useNavigation()
  const {setFlag}=useContext(Alldata)
  const {flag}=useContext(Alldata)
  return (
    <View style={styles.main}>
        <Button style={styles.buttonStyle} onPress={()=>{props.setShow(1);props.setShowNav(false) }}>add task</Button>
        <Button style={styles.buttonStyle} onPress={()=>{props.setShow(2);props.setShowNav(false);}}>remove task</Button>
        <Button style={styles.buttonStyle} onPress={()=>{props.setShow(3);props.setShowNav(false)}}>all employees</Button>
        <Button style={styles.buttonStyle} onPress={()=>{props.setShow(4);props.setShowNav(false)}}>add employe</Button>
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