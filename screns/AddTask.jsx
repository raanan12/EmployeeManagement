import React,{useState,useContext} from 'react'
import { Alert, StyleSheet, Text, View  } from 'react-native'
import {TextInput,Button} from 'react-native-paper'
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
      <Text style={styles.title}>AddTask</Text>
      <TextInput value={name1} onChangeText={setName1} style={styles.input1} mode='flat' label='entet title of task'></TextInput>
      <TextInput value={description} onChangeText={setDescription} style={styles.input1} mode='flat' label='entet description of task'></TextInput>
      <SelectList maxHeight={130}  search={false} boxStyles={styles.input1} setSelected={(val) => setClass1(val)} data={data} save="value"/>
      <Button onPress={valid} style={{marginTop:30}} mode='contained'>add task</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    main3:{
      flex:1,
      alignItems:'center',
    },
    title:{
        fontSize:35,
        textAlign:'center',
        // fontWeight:700,
        marginBottom:30
    },
    input1:{
        width:300,
        margin:10
    }
})