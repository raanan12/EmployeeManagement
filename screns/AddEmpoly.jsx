import { Alert, StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from 'react-native'
import {Button} from 'react-native-paper'
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
          <View style={{backgroundColor:'rgb(35,163,198)',height:230,width:'100%',position:'absolute',bottom:0}}>

          </View>

          <View style={styles.main2}>
              <Text style={styles.title}>Add empoly</Text>
              <TextInput onChangeText={setName1} value={name1} mode='flat' placeholder='Entar name' style={styles.input1} />
              <TextInput onChangeText={setId} value={id} mode='flat' placeholder='Enter id' style={styles.input1} />
              <TouchableOpacity style={styles.button} onPress={valid}>
                  <Text style={styles.text}>add Empoly</Text>
                  <Image style={styles.img} source={require("./imges/addUW.png")}/>
              </TouchableOpacity>
              <SelectList dropdownItemStyles={{ borderColor: 'rgb(35,163,198)', borderBottomWidth: 2, margin: 8 }} dropdownStyles={styles.inputIn} maxHeight={130} search={false} boxStyles={styles.input1} setSelected={(val) => setClass1(val)} data={data} save="value" />
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
        marginTop:20,
        fontSize:35,
        textAlign:'center',
        marginBottom:30,
        color:'rgb(35,163,198)'
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
    inputIn:{
        backgroundColor: 'white', 
        borderColor: 'rgb(35,163,198)',
        borderWidth:2,
        position:'absolute',
        top:55,
        width:280,
        left:10
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
    img:{
        height:35,
        width:35
    }
})