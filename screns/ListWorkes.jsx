import { StyleSheet, Text, View ,SafeAreaView,ScrollView} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import Alldata from '../contextApi'
import Work from './Work'

export default function ListWorkes() {
  const {works} = useContext(Alldata)
  const {userConenct} = useContext(Alldata)
  const [arrTask,setArrTask]=useState(works.filter((val)=>val.forClass == 'all' || val.forClass == userConenct.class))
  
  useEffect(()=>{
    setArrTask(works.filter((val)=>val.forClass == 'all' || val.forClass == userConenct.class))
  },[works])
  const show = ()=>{
    if(arrTask.length <1){
      return <Text style={styles.text}>There are no tasks available at the moment</Text>
    }
    else{
      return arrTask.map((val,index)=>{
        return <Work val = {val} index = {index} />
      })
    }
  }

  return (
    <SafeAreaView style={{paddingBottom:50}}>
    <ScrollView style={{paddingBottom:20}}>
      {
        show()
      }
         </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text:{
    color:'#0f384f',
    fontSize:17,
    fontWeight:'700',
    padding:10,
  }
})