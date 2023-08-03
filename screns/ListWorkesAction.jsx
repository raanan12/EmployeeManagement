import { StyleSheet, Text, View ,SafeAreaView,ScrollView} from 'react-native'
import React,{useContext} from 'react'
import Alldata from '../contextApi'
import TaskActon from './TaskActon'
export default function ListWorkesAction() {
  const {taskAction}=useContext(Alldata)
  return (
    <SafeAreaView style={{paddingBottom:50}}>
    <ScrollView style={{paddingBottom:20}}>
      {
        taskAction.map((val,index)=>{
          return <TaskActon val={val} index={index}/>
        })
      }
          </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})