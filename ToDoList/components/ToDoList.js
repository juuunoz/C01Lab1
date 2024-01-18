import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTaskForm from './AddTask.js';

const ToDoList = ({titles}) => {
    const [toDos, setToDos] = useState(titles.map((title) => ({ id: uuidv4(), name: title })));    

    const addToDo = (title) => {
        const newToDo = { id: uuidv4(), name: title };
        setToDos((prevToDo) => [...prevToDo, newToDo]);
    };

    const removeToDo = (id) => {
        const newToDo = toDos.filter((currentToDo) => currentToDo.id != id);
        setToDos((prevToDo) => newToDo);
    };

    return (
        <View style={styles.container}>
          {toDos.map((toDo) => (
            <View key={toDo.id}>
              <Text style={styles.text}>{toDo.name}</Text>
              <View style={styles.buttonContainer}>
                <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
              </View>
            </View>
          ))}
          <AddTaskForm onAddTask={addToDo} />
        </View>
      );
    };

    const styles = StyleSheet.create({
        todoListContainer: {
            margin: 10,
        },
        todoItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            marginVertical: 5,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
        },
    });
    
    export default ToDoList;