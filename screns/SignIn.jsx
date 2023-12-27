import { Alert, StyleSheet, Text, View,TextInput ,Image,TouchableOpacity,I18nManager} from 'react-native'
import React,{useState,useContext} from 'react'
import Alldata from '../contextApi'
import {useNavigation} from '@react-navigation/native'
import ScalableText  from 'react-native-text';





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
      <View style={styles.heder}>
        <Image style={styles.imgH} source={require("./imges/empolis.png")} />
        <ScalableText style={styles.title}>Log in</ScalableText>
      </View>
      <View style={styles.mainIN}>
        <View style={styles.input1}>
          <TextInput style={styles.input2} onChangeText={setName1} value={name1} placeholder='Entar name' placeholderTextColor='rgb(225,225,225)' />
          <Image style={styles.img} source={require("./imges/user3.png")} />
        </View>

        <View style={styles.input1}>
          <TextInput style={styles.input2} onChangeText={setId} value={id} placeholder='Entar id' placeholderTextColor='rgb(225,225,225)' />
          <Image style={styles.img} source={require("./imges/id4.png")} />
        </View>
        <TouchableOpacity style={styles.buttonS} onPress={valid}>
          <ScalableText style={styles.textButton}>Log in</ScalableText>
        </TouchableOpacity>
        <View style={styles.under}>
          <ScalableText style={styles.line}>_______</ScalableText>
          <ScalableText style={styles.textU}>welcome</ScalableText>
          <ScalableText style={styles.line}>_______</ScalableText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main3:{
      flex:1,
      alignItems:'center',
      backgroundColor:'rgb(35,163,198)',
      direction:'ltr'
    },
    mainIN:{
      display:'flex',
      alignItems:'center',
      marginTop:40,
      direction:'ltr',
      
    },
    title:{
      fontSize:34,
      textAlign:'center',
      fontWeight:'600',
      color:'white'
    },
    input1:{
      width:300,
      height:60,
      margin:10,
      borderColor: 'white',
      borderWidth:2, 
      backgroundColor: 'rgb(35,163,198,1)',  
      fontSize:17,
      marginBottom:10,
      borderRadius:10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
    },
    input2:{
      width:220,
      fontSize:18,
      color:'white',
      fontWeight:'700',
    },
    buttonS:{
      height:56,
      width:300,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontWeight:'600',
      fontSize:20,
      marginTop:40,
      backgroundColor:'white',
      borderRadius:8,
      alignSelf:'flex-start',
      margin:10,
    },
    textButton:{
      color:'rgb(35,163,198)',
      fontSize:26,
      fontWeight:'600',
    },
    img:{
      height:35,
      width:35
    },
    under:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:60,
      height:30,
      width:300,
    },
    line:{
      fontSize:18,
      color:'white',
      direction:'ltr',
      height:30,
      marginBottom:10
    },
    textU:{
      color:'white',
      fontSize:18
    },
    heder:{
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      justifyContent:"space-around",
      marginTop:30,
      height:100,
    },
    imgH:{
      height:55,
      width:55
    }
})