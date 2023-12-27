import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Button} from 'react-native-paper'
import React,{useContext} from 'react'
import Alldata from '../contextApi'

export default function NavBar(props) {
  const nav = useNavigation()
  const {setFlag1}= useContext(Alldata)
  const {flag1}= useContext(Alldata)
  return (
      <View style={styles.main}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => { setFlag1(!flag1); props.setShow(0); props.setShowNav(false) }}>
              <Text style={styles.textStyle}>
                  Take a task
              </Text>
              <Image style={styles.img} source={require("./imges/allTask.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => { setFlag1(!flag1); props.setShow(1); props.setShowNav(false) }}>
              <Text  style={styles.textStyle}>
                  My task
              </Text>
              <Image style={styles.img} source={require("./imges/myTask.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => { props.setShow(2); props.setShowNav(false) }}>
              <Text style={styles.textStyle}>
                  Tasks I performed
              </Text>
              <Image style={styles.img} source={require("./imges/taskStop.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => { props.setShow(3); props.setShowNav(false) }}>
              <Text   style={styles.textStyle}>
                  Employee details
              </Text>
              <Image style={styles.img} source={require("./imges/propsUser.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} textColor='white' onPress={() => { nav.navigate('signIn') }}>
              <Text  style={styles.textStyle}>
                  Exite
              </Text>
             <Image style={styles.img} source={require("./imges/ex.png")} />
          </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    main:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'flex-start',
        top:55,
        width:'100%',
        height:'100%',
        right:0,
        position:"absolute",
        borderBottomLeftRadius:4,
        backgroundColor:'white',
        padding:8
    },
    textStyle:{
        color:'rgb(35,100,300)',
        fontSize:16,
        fontWeight:'600',
        textAlign:'center'
    },
    buttonStyle:{
        borderRadius:10,
        borderColor:'rgb(35,163,198)',
        borderWidth:3,
        borderStyle:'solid',
        color:'rgb(35,163,198)',
        width:120,
        margin:20,
        height:110,
        textAlign:'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        height:40,
        width:40,
        marginTop:10
    }
})