import { StyleSheet, Text, TouchableOpacity,View } from 'react-native'
import Alldata from '../contextApi'
import React,{useContext} from 'react'
export default function PropsUser(props) {

  return (
    <View style={styles.main}>
        <Text style={{fontSize:30,fontWeight:700,marginTop:20}}>Employee details</Text>
        <Text onPress={()=>{props.setShow(false)}} style={{width:30,position:'absolute',top:20,left:20,fontSize:20,fontWeight:900}}>X</Text>
    <View style={styles.main3}>
      <Text style={styles.title}>name : {props.empolyShow.userName}</Text>
      <Text style={styles.title}>id : {props.empolyShow.id}</Text>
      <Text style={styles.title}>class : {props.empolyShow.class}</Text>
      <Text style={styles.title}>tasks performed : {props.empolyShow.arrWork.length} </Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: "rgba(97, 95, 95, 0.705)",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    main3:{
      marginTop:50,  
      width:300,
      backgroundColor:'#ffffff',
      padding:15,
      borderRadius:10
    },
    title:{
        fontSize:22,
        fontWeight:300,
        marginBottom:30,
        borderBottomColor:'black',
        borderBottomWidth:2,
        borderStyle:"solid"
    },

})