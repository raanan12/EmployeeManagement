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
        <Button textColor='white' onPress={()=>{setFlag1(!flag1);props.setShow(0);props.setShowNav(false) }} >  All works</Button>
        <Button textColor='white' onPress={()=>{setFlag1(!flag1);props.setShow(1);props.setShowNav(false)}} style={styles.buttonStyle} >my works</Button>
        <Button textColor='white' onPress={()=>{props.setShow(2);props.setShowNav(false)}} style={styles.buttonStyle}>History</Button>
        <Button textColor='white' onPress={()=>{props.setShow(3);props.setShowNav(false)}} style={styles.buttonStyle}>Employee details</Button>
        <Button textColor='white' onPress={()=>{nav.navigate('signIn')}} style={styles.buttonStyle}>Exite</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        top:40,
        right:0,
        position:"absolute",
        padding:4,
        borderBottomLeftRadius:4,
        backgroundColor:'#0a2634',
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
        width:'100%',
        textAlign:'center'
    }
})