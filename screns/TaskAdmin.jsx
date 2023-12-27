import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useContext,useState} from 'react'
import Alldata from '../contextApi'
import {Button} from 'react-native-paper'

export default function TaskAdmin(props) {
  const {deleteTask} =useContext(Alldata)
  return (
    <View style={styles.main}>
    <View>
        <Text style={styles.title}>{props.val.nameTask}</Text>
        <Text style={styles.textStyle}>id : {props.val.id}</Text>
        <Text style={styles.textStyle}>{props.val.descripton}</Text>
        <Text style={styles.textStyle}>class: {props.val.forClass}</Text>
    </View>
    <TouchableOpacity style={styles.button} onPress={()=>{deleteTask(props.val.id)}} >
        <Text style={styles.buttonText}>
        Remove a task
        </Text>
        <Image style={styles.img} source={require("./imges/remov.png")}/>
    </TouchableOpacity>
</View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(35,163,198)',
        marginBottom: 5,
    },
    textStyle:{
        marginLeft:18,
        fontSize: 14,
        color: 'black',
    },
    main:{
        padding:8,
        margin: 10,
        borderRadius: 10,
        elevation: 5,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor: 'white',
        borderColor:'rgb(35,163,198)',
        borderWidth:2,
        minHeight:140,
        paddingBottom:0
    },
    button: {
        backgroundColor: 'rgb(35,163,198)',
        height:35,
        width:140,
        borderRadius:10,
        display:'flex',
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'space-around',
        marginBottom:8,
        marginTop:8
      },
      buttonText: {
        color: 'white', // צבע כיתוב הכפתור
        fontSize: 14,
        fontWeight: 'bold',
        paddingRight:8
      },
      img:{
        height:23,
        width:23
      }
})