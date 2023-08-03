import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import Alldata from '../contextApi'
import React,{useContext,useState} from 'react'
import Empoly from './Empoly'
import SHowEmpolyAdmin from './SHowEmpolyAdmin'

export default function LisrEmpoly() {
  const {allEmpoly}=useContext(Alldata)
  const [show,setShow]=useState(false)
  const [empolyShow,setEmpolyShow]=useState()
  const show1 = ()=>{
    if(show == true){
        return <SHowEmpolyAdmin setShow={setShow} empolyShow={empolyShow}/>
    }
  }
  return (
      <SafeAreaView style={{ paddingBottom: 50  }}>
          <ScrollView style={{ paddingBottom: 5,position:'relative' }}>
              {allEmpoly.map((val) => {
                  return <Empoly val={val} setShow={setShow} setEmpolyShow={setEmpolyShow} />
                })}
          </ScrollView>
          {show1()}
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({})