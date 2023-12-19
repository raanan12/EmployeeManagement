import { StyleSheet, Text, View } from 'react-native'
import Alldata from '../contextApi'
import React,{useContext} from 'react'
export default function PropsUser() {
    const {userConenct}=useContext(Alldata)
    const {taskStop}=useContext(Alldata)
  return (
    <View style={styles.main}>
        <Text style={{fontSize:30,marginTop:20}}>Employee details</Text>
    <View style={styles.main3}>
      <Text style={styles.title}>name : {userConenct.userName}</Text>
      <Text style={styles.title}>id : {userConenct.id}</Text>
      <Text style={styles.title}>class : {userConenct.class}</Text>
      <Text style={styles.title}>tasks performed : {taskStop.length} </Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center'
    },
    main3:{
      marginTop:50,  
      width:300,
    },
    title:{
        fontSize:22,
        // fontWeight:300,
        marginBottom:30,
        borderBottomColor:'black',
        borderBottomWidth:2,
        borderStyle:"solid"
    },

})