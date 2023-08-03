import { StyleSheet, Text, View ,SafeAreaView,ScrollView} from 'react-native'
import React,{useContext,useState} from 'react'
import Alldata from '../contextApi'
import Work from './Work'

export default function ListWorkes() {
  const {works} = useContext(Alldata)
  const {userConenct} = useContext(Alldata)
  const [arrTask,setArrTask]=useState(works.filter((val)=>val.forClass == 'all' || val.forClass == userConenct.class))
  console.log(works);
  return (
    <SafeAreaView style={{paddingBottom:50}}>
    <ScrollView style={{paddingBottom:20}}>
      {
        arrTask.map((val,index)=>{
            return <Work val = {val} index = {index}/>
        })
      }
         </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})