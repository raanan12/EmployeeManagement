import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useContext} from 'react'
import Alldata from '../contextApi'
import {Button} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'


export default function AdminNavBar(props) {
  const nav = useNavigation()
  const {setFlag}=useContext(Alldata)
  const {flag}=useContext(Alldata)
  return (
    <View style={styles.main}>
        <TouchableOpacity style={styles.buttonStyle}onPress={()=>{props.setShow(1);props.setShowNav(false) }}>
              <Text style={styles.textStyle}>
                  Add task
              </Text>
              <Image style={styles.img} source={require("./imges/addT.png")} />
          </TouchableOpacity>
          <TouchableOpacity  style={styles.buttonStyle} onPress={()=>{props.setShow(2);props.setShowNav(false);}}>
              <Text  style={styles.textStyle}>
                List task
              </Text>
              <Image style={styles.img} source={require("./imges/myTask.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>{props.setShow(3);props.setShowNav(false)}}>
              <Text style={styles.textStyle}>
              Show employees
              </Text>
              <Image style={styles.img} source={require("./imges/listUsers.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>{props.setShow(4);props.setShowNav(false)}}>
              <Text   style={styles.textStyle}>
                  Add empoly
              </Text>
              <Image style={styles.img} source={require("./imges/addUser.png")} />
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
        position:"absolute",
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'flex-start',
        top:55,
        width:'100%',
        height:'100%',
        right:0,
        borderBottomLeftRadius:4,
        backgroundColor:'white',
        padding:8,
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