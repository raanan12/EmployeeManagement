import { StyleSheet, Text, View ,SafeAreaView,ScrollView} from 'react-native'
import React,{useContext} from 'react'
import Alldata from '../contextApi'
import TaskStop from './TaskStop'

export default function TasksPerformed() {
    const {taskStop}=useContext(Alldata)
  return (
    <SafeAreaView style={{paddingBottom:50}}>
      <ScrollView style={{paddingBottom:20}}>
      {
        taskStop.map((val)=>{
          return <TaskStop val={val}/>
        })
      }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})