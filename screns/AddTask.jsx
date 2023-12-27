import React,{useState,useContext} from 'react'
import { Alert, StyleSheet, Text, View ,TextInput,TouchableOpacity } from 'react-native'
import {Button} from 'react-native-paper'
import { SelectList } from 'react-native-dropdown-select-list'
import Alldata from '../contextApi'


export default function AddTask() {
    let date = new Date()
    const {addTask}= useContext(Alldata)
    const [name1,setName1]=useState('')
    const [description,setDescription]=useState('') 
    const [class1,setClass1]=useState('')
    const data = [
        {key:'1', value:'all'},
        {key:'2', value:'r&b'},
        {key:'3', value:'Qa'},
    ]

    const valid =async ()=>{
        if(name1.length > 2 && class1.length > 1 && description.length !== 0){
            let res = await addTask(name1,description,class1)
            if(res == true){
                setName1('')
                setDescription('')
                Alert.alert('add task')
            }
            else{
                Alert.alert('not add task')
            }
        }
    }
  return (
      <View style={styles.main3}>
          <View style={{ backgroundColor: 'rgb(35,163,198)', height: 230, width: '100%', position: 'absolute', bottom: 0 }}>

          </View>
          <View style={styles.main2}>

              <Text style={styles.title}>AddTask</Text>
              <TextInput value={name1} onChangeText={setName1} style={styles.input1} placeholder='entet title of task'/>
              <TextInput value={description} onChangeText={setDescription} style={styles.input1}  placeholder='entet description of task'/>
              <TouchableOpacity style={styles.button} onPress={valid}>
                <Text style={styles.text}>
                    Add task
                </Text>
              </TouchableOpacity>
              <SelectList dropdownItemStyles={{ borderColor: 'rgb(35,163,198)', borderBottomWidth: 2, margin: 8 }} dropdownStyles={styles.inputIn}  maxHeight={130} search={false} boxStyles={styles.input1} setSelected={(val) => setClass1(val)} data={data} save="value" />
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    main3:{
        flex:1,
        alignItems:'center',
        position:'relative'
    },
    main2:{
        backgroundColor:'white',
        top:20,
        position:'absolute',
        height:430,
        width:'90%',
        borderRadius:10,
        borderRightWidth:1,
        borderColor:'gray',
        display:'flex',
        flexDirection:'column',
        alignItems:'center' 
    },
    title:{
        fontSize:35,
        textAlign:'center',
        // fontWeight:700,
        marginBottom:30
    },
    input1:{
        width:280,
        height:50,
        margin:10,
        borderColor: 'rgb(35,163,198)',
        borderWidth:2, 
        backgroundColor: 'white',  
        fontSize:17,
        marginBottom:10,
        borderRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        display:'flex',
        alignItems:'center',
        paddingLeft:15
    },
    button:{
        backgroundColor:'rgb(35,163,198)',
        height:45,
        width:280,
        borderRadius:10,
        margin:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:0
    },
    text:{
        color:'white',
        fontSize:18,
        fontWeight:'600'
    },
    inputIn:{
        backgroundColor: 'white', 
        borderColor: 'rgb(35,163,198)',
        borderWidth:2,
        position:'absolute',
        top:55,
        width:280,
        left:10
    },
    title:{
        marginTop:20,
        fontSize:35,
        textAlign:'center',
        marginBottom:30,
        color:'rgb(35,163,198)'
    },
})