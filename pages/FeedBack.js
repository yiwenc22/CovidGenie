import React, { useEffect, useCallback } from 'react';
import { useForm } from "react-hook-form";
import { Text, View, TextInput, Button, StyleSheet, } from 'react-native';

export default function Feedback() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const onSubmit = useCallback(formData => {
    reset({ email: '' });
    reset({ problem: '' });
    reset({ description: '' });
    alert('Forms Have Be Sent');

  }, []);
  const onChangeField = useCallback(
      name => text => {
        setValue(name, text);
      },
      []
  );

  useEffect(() => {
    register('email');
    register('problem');
    register('description');
  }, [register]);

  return (
      <View style={styles.centeredView}>
        <Text style={{ alignItems: 'center', fontSize: 45, marginTop: 25, fontWeight: '500' }}>Feedback</Text>
        <Text style={{ alignItems: 'center', fontSize: 16, marginTop: 20, fontWeight: '400' }}>Email</Text>
        <TextInput
            {...register("email", { required: false })}
            style={{ alignItems: 'center', borderWidth: 1, borderRadius: 5, width: 300, height: 50}}
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="Email"
            onChangeText={onChangeField('email')}
        />
        <Text style={{ alignItems: 'center', fontSize: 16, marginTop: 20, fontWeight: '400' }}>Problem</Text>
        <TextInput
            {...register("problem", { required: false })}
            style={{ alignItems: 'center', borderWidth: 1, borderRadius: 5, width: 300, height: 50}}
            placeholder="Problem"
            onChangeText={onChangeField('problem')}
        />
        <Text style={{ alignItems: 'center', fontSize: 16, marginTop: 20, fontWeight: '400' }}>Description</Text>
        <TextInput
            {...register("description", { required: false })}
            multline
            style={{ alignItems: 'center', borderWidth: 1, borderRadius: 5, width: 300, height:50, marginBottom: 30 }}
            placeholder="Description"
            onChangeText={onChangeField('description')}
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
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
});

