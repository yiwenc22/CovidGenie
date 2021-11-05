import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Text, View, TextInput, Button, Pressable, StyleSheet, Modal, } from 'react-native';

export default function Feedback() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const [modalVisible, setModalVisible] = useState(false);

  console.log(watch("example"));

  return (
      
      <View style={{ marginTop: 100, alignItems: 'center' }}>
              <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View>
            <Text style={styles.modalText}>Feedback Sent</Text>
            <Button title="Close" onPress={handleSubmit(onSubmit),() => setModalVisible(false)}/>
          </View>
        </View>
      </Modal>
        <Text style={{ alignItems: 'center', fontSize: 45, marginTop: 125, fontWeight: '500' }}>Feedback</Text>
        <Text style={{ alignItems: 'center', fontSize: 16, marginTop: 20, fontWeight: '400' }}>Email</Text>
        <TextInput style={{ alignItems: 'center', borderWidth: 1, borderRadius: 5, width: 300, height: 30}} 
        //{...register("example")} 
        placeholder="Email"
        />
        <Text style={{ alignItems: 'center', fontSize: 16, marginTop: 20, fontWeight: '400' }}>Problem</Text>
        <TextInput style={{ alignItems: 'center', borderWidth: 1, borderRadius: 5, width: 300, height: 30}}
        //{...register("example")}  
        placeholder="Problem"
        />
        <Text style={{ alignItems: 'center', fontSize: 16, marginTop: 20, fontWeight: '400' }}>Description</Text>
        <TextInput  multiline numberOfLines={4} style={{ alignItems: 'center', borderWidth: 1, borderRadius: 5, width: 300, height:100, marginBottom: 30 }} 
        //{...register("example")} 
        placeholder="Description"
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit),() => setModalVisible(true)}/>
    </View>
  );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20
    },
    modalView: {
      margin: 25,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 500,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 20,
        height: 20
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
        marginTop: 25,
      fontSize: 25
    }
  });
  