import { TouchableOpacity, View, Text, StyleSheet,Image } from 'react-native';
import React, { useContext } from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Alldata from '../contextApi';
import ScalableText  from 'react-native-text';

export default function Work(props) {
  const { taceTasc, userConenct } = useContext(Alldata);
  let date = new Date(props.val.date)
  return (
    <Card style={styles.card}>
      <Card.Content>
        <ScalableText style={styles.title}>{props.val.nameTask}</ScalableText>
        <ScalableText style={styles.description}>{props.val.descripton}</ScalableText>
        {/* <Text style={{color:'#aaaaaa'}}>upload date:  {date.getDate()} / {date.getMonth()} / {date.getFullYear()}</Text> */}
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
        <TouchableOpacity  style={styles.button} onPress={() => {taceTasc(userConenct.id, props.val.id)}}>
           <Image style={styles.img} source={require('./imges/tackT1.png')}/>
           <Text style={styles.buttonText}>Take the Task</Text>
        </TouchableOpacity>
      </Card.Actions>
      
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(35,163,198)',
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    color: 'black',
  },
  cardActions: {
    marginTop:18,
    alignSelf:'flex-start'
  },
  button: {
    backgroundColor: 'rgb(35,163,198)',
    height:35,
    width:140,
    borderRadius:10,
    display:'flex',
    flexDirection:'row-reverse',
    alignItems:'center',
    justifyContent:'space-around',
  },
  buttonText: {
    color: 'white', // צבע כיתוב הכפתור
    fontSize: 14,
    fontWeight: 'bold',
  },
  img:{
    height:23,
    width:23
  }
});
