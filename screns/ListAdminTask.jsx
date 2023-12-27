import { StyleSheet, Text, View ,SafeAreaView,ScrollView} from 'react-native'
import React,{useContext} from 'react'
import Alldata from '../contextApi'
import TaskAdmin from './TaskAdmin'

export default function ListAdminTask() {
    const {works} = useContext(Alldata)  
  return (
    <SafeAreaView style={{paddingBottom:50}}>
    <ScrollView style={{paddingBottom:20}}>
      {
        works.map((val,index)=>{
            return <TaskAdmin  val = {val} index = {index}/>
        })
      }
         </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})