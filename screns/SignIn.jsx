import { Alert, StyleSheet, Text, View } from 'react-native'
import React,{useState,useContext} from 'react'
import {TextInput,Button} from 'react-native-paper'
import Alldata from '../contextApi'
import {useNavigation} from '@react-navigation/native'

export default function SignIn() {
  const nav = useNavigation()
  const {checkUser} = useContext(Alldata)
  const {setUserConect}= useContext(Alldata)
  const [name1,setName1]=useState('')
  const [id,setId]=useState('')

  const valid = async ()=>{
    if(name1.length > 3 && id.length == 9){
      if(name1 == 'admin' && id=='999999999'){
        setUserConect({userName:name1,id})
        setName1('')
        setId('')
        nav.navigate('admin')
      }
      else{
        let bool = await checkUser(name1,id)
        if(bool){
          setName1('')
          setId('')
          nav.navigate('home')
        }
        else{
          Alert.alert('not valid')
        }
      } 
      
    }
  }
  return (
    <View style={styles.main3}>
      <Text style={styles.title}>sign in</Text>
      <TextInput onChangeText={setName1} value={name1} mode='flat' label='entar name' style={styles.input1}/>
      <TextInput onChangeText={setId} value={id} mode='flat' label='enter id' style={styles.input1}/>
      <Button onPress={valid} mode='contained'>log in</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    main3:{
      flex:1,
      alignItems:'center'
    },
    title:{
        fontSize:35,
        textAlign:'center',
        fontWeight:700,
        marginBottom:30
    },
    input1:{
        width:300,
        margin:10
    }
})