import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useContext} from 'react'
import Alldata from '../contextApi'
import Header from './Header'
import AdminNavBar from './AdminNavBar'
import AddEmpoly from './AddEmpoly'
import AddTask from './AddTask'
import ListAdminTask from './ListAdminTask'
import LisrEmpoly from './LisrEmpoly'


export default function MainAdmin() {
  const [show,setShow]=useState(0)
  const [showNav,setShowNav]=useState(false)
  const {givAllEmpoly}=useContext(Alldata)
  const {setFlag}=useContext(Alldata)
  const {flag}=useContext(Alldata)

  const showNavN = ()=>{
    if(showNav == true){
        return <AdminNavBar setShowNav={setShowNav} setShow={setShow}/>
    }
  }

  const show1 =()=>{
    if(show ==1){
      return <AddTask/>
    }
    else if (show == 2){
      return <ListAdminTask/>
    }
    else if(show == 3){
      givAllEmpoly()
      return <LisrEmpoly/>
    }
    else if(show === 4){
      return <AddEmpoly/>
    }
  }
  return (
    <View style={styles.main}>
      <Header setShow={setShow} setShowNav={setShowNav} showNav={showNav}/>
      {show1()}
      {showNavN()}
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    position:'relative',
    flex:1,
  }
})