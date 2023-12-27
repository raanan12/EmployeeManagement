import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import Alldata from '../contextApi'
import React,{useContext,useState} from 'react'
import Header from './Header'
import ListWorkes from './ListWorkes'
import ListWorkesAction from './ListWorkesAction'
import NavBar from './NavBar'
import TasksPerformed from './TasksPerformed'
import PropsUser from './PropsUser'


export default function Main() {
  const [show,setShow]=useState(0)
  const [showNav,setShowNav]=useState(true)
  const showNow = () =>{
    if(showNav == true){
        return <NavBar setShowNav={setShowNav} setShow={setShow}/>
    }
  }
  const {userConenct} = useContext(Alldata)
  const show1 = ()=>{
    if(show == 0){
      return <ListWorkes/>
    }
    else if(show ==1){
      return <ListWorkesAction/>
    }
    else if(show == 2){
      return <TasksPerformed/>
    }
    else if(show == 3){
      return <PropsUser/>
    }
  }
  return (
    <View style={styles.main}>
      <Header style={{zIndex: 1}} setShow={setShow} setShowNav={setShowNav} showNav={showNav}/>
      {show1()}
      {showNow()}
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    position:'relative',
    flex:1
  }
})