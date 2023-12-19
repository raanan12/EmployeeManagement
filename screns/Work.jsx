import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Alldata from '../contextApi';

export default function Work(props) {
  const { taceTasc, userConenct } = useContext(Alldata);
  let date = new Date(props.val.date)
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.title}>{props.val.nameTask}</Title>
        <Paragraph style={styles.description}>{props.val.descripton}</Paragraph>
        <Text style={{color:'#aaaaaa'}}>upload date:  {date.getDate()} / {date.getMonth()} / {date.getFullYear()}</Text>
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
        <Button
          onPress={() => {taceTasc(userConenct.id, props.val.id)}}
          style={styles.button}
          color="#000000" // צבע כיתוב הכפתור
          >
          <Text style={styles.buttonText}>Take the Task</Text>
        </Button>
      </Card.Actions>
      
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#222222',
  },
  title: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#aaaaaa',
  },
  cardActions: {
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#444444',
  },
  button: {
    backgroundColor: '#ffffff', // צבע רקע הכפתור
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 0,
  },
  buttonText: {
    color: '#000000', // צבע כיתוב הכפתור
    fontSize: 16,
    // fontWeight: 'bold',
  },
});
