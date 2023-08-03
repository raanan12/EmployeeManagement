import { Alert, StyleSheet, Text, View } from 'react-native'
import {TextInput,Button} from 'react-native-paper'
import Alldata from '../contextApi'
import React,{useState,useContext} from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

export default function AddEmpoly() {
    const [name1,setName1]=useState('')
    const [id,setId]=useState('')
    const {addEmpoly}=useContext(Alldata)
    const [class1,setClass1]=useState('')
    
    const data = [
        {key:'1', value:'all'},
        {key:'2', value:'r&b'},
        {key:'3', value:'Qa'},
    ]

    const valid = async ()=>{
        if(name1.length > 2 && id.length==9){
            let res = await addEmpoly(name1,id,class1)
            if(res == true){
                setName1('')
                setId('')
                Alert.alert('the user add')
            }
            else{
                Alert.alert('not valid')
            }
        }
        else{
            Alert.alert('No valid values ​​were entered')
        }
    }
  return (
    <View style={styles.main3}>
        <Text>aaa</Text>
      <Text style={styles.title}>add empoly</Text>
      <TextInput onChangeText={setName1} value={name1} mode='flat' label='entar name' style={styles.input1}/>
      <TextInput onChangeText={setId} value={id} mode='flat' label='enter id' style={styles.input1}/>
      <SelectList maxHeight={130}  search={false} boxStyles={styles.input1} setSelected={(val) => setClass1(val)} data={data} save="value"/>
      <Button onPress={valid} mode='contained'>add empoly</Button>
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
        fontWeight:700,
        marginBottom:30
    },
    input1:{
        width:300,
        margin:10
    }
})