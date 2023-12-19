import { StyleSheet, Text, View ,} from 'react-native'
import React from 'react'
import {Button} from 'react-native-paper'

export default function TaskStop(props) {
  return (
    <View style={styles.main}>
        <Text style={styles.textStyle}>title: {props.val.nameTask}</Text>
        <Text style={styles.textStyle}>{props.val.descripton}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle:{
        // fontWeight:900,
        color:'rgb(255, 255, 255)'
    },
    main:{
        backgroundColor:'rgb(74, 74, 74)',
        // fontWeight:'bold',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        borderColor:'black',
        borderWidth:2,
        borderStyle:'solid',
        margin:5,
        padding:5,
        borderRadius:4
    },
    buttonStyle:{
        alignItems:"center",
        height:60,
        paddingTop:8,
    }
})