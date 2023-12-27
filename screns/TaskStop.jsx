import { StyleSheet, Text, View ,} from 'react-native'
import React from 'react'
import {Button} from 'react-native-paper'

export default function TaskStop(props) {
  return (
    <View style={styles.main}>
        <Text style={styles.titleStyle}>{props.val.nameTask}</Text>
        <Text style={styles.textStyle}>{props.val.descripton}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(35,163,198)',
        marginBottom: 5,
    },
    main:{
        margin: 10,
        padding:8,
        borderRadius: 10,
        elevation: 5,
        display:'flex',
        flexDirection:'column',
        backgroundColor: 'white',
        borderColor:'rgb(35,163,198)',
        borderWidth:2,
        minHeight:100,
        paddingBottom:0
    },
    buttonStyle:{
        alignItems:"center",
        height:60,
        paddingTop:8,
    },
    textStyle:{
        fontSize: 16,
        color: 'black',
        paddingLeft:10
    }
})