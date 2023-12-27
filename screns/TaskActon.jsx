import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useContext} from 'react'
import Alldata from '../contextApi'
import ScalableText  from 'react-native-text';


export default function TaskActon(props) {
  const {stopeTask}=useContext(Alldata)
  return (
    <View style={styles.main}>
          <View>
              <ScalableText style={styles.title}> {props.val.nameTask}</ScalableText>
              <ScalableText style={styles.textStyle}>{props.val.descripton}</ScalableText>
          </View>
          <View style={styles.action}>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>{stopeTask(props.index)}}>
             <ScalableText style={styles.textButoon}>finished the task</ScalableText>
             <Image style={styles.img} source={require("./imges/stopT.png")}/>
          </TouchableOpacity>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 18,
        color: 'black',
        paddingLeft:18
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(35,163,198)',
        marginBottom: 5,
    },
    main:{
        paddingTop:10,
        paddingLeft:8,
        margin: 10,
        borderRadius: 10,
        elevation: 5,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor: 'white',
        borderColor:'rgb(35,163,198)',
        borderWidth:2,
        minHeight:140,
        paddingBottom:0
    },
    buttonStyle:{
        backgroundColor: 'rgb(35,163,198)',
        height:35,
        width:180,
        borderRadius:10,
        display:'flex',
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'space-around',
    },
    action:{
        width:'100%',
        display:'flex',
        alignItems:'flex-start',
        padding:10
    },
    textButoon:{
        color: 'white', // צבע כיתוב הכפתור
        fontSize: 14,
        fontWeight: 'bold',
    },
    img:{
        height:20,
        width:20
    }
})