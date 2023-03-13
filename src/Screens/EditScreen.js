import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { UPDATE } from "../store/actionType";
import { MaterialIcons } from "@expo/vector-icons";

export default function Form({ navigation }) {
  const Contacts = useSelector((state) => state.myContacts);



  const [firstName, setFirstName] = useState(navigation.getParam("name"));
  const [lastName, setLastName] = useState(navigation.getParam("lastName"));
  const [phone_no, setPhone_no] = useState(navigation.getParam("phone_no"));

  const dispatch = useDispatch();

  const contact = {
    key: navigation.getParam("key"),
    name: firstName,
    email: lastName,
    phone_no: phone_no,
  };

  const changeTextName = (text) => {
    if (text.length < 30) setFirstName(text);
    else {
      Alert.alert("OOPS!", "First name must be less than 30 characters", [
        { text: "Understood" },
      ]);
    }
  };

  const changeTextNameLast = (text) => {
    if (text.length < 30) setLastName(text);
    else {
      Alert.alert("OOPS!", "Last name must be less than 30 characters", [
        { text: "Understood" },
      ]);
    }
  };

  const changeTextNumber = (text) => {
    if (text.length <= 10) setPhone_no(text);
    else {
      Alert.alert("OOPS!", "Number cannot be greater than 10 characters", [
        { text: "Understood" },
      ]);
    }
  };

  const saveFinal = () => {

    if (
      Contacts.find((a) => a.name === firstName) &&
      Contacts.find((a) => a.email === lastName) &&
      Contacts.find((a) => a.phone_no === phone_no)
    )
      Alert.alert("OOPS!", "Contact already present.", [
        { text: "Understood" },
      ]);
    else {
      dispatch({ type: UPDATE, payload: contact });
      navigation.navigate("Home");
    }
  };

  return (
    <View style={Stylesa.form}>
      <View style={Stylesa.namesContainer}>
        <View style={Stylesa.person}>
          <MaterialIcons name="person" size={40} color="black" />
        </View>
        <TextInput
          style={Stylesa.nameInput1}
          placeholder="First name"
          defaultValue={navigation.getParam("name")}
          onChangeText={changeTextName}
        />
      </View>
      <TextInput
        style={Stylesa.nameInput}
        placeholder="Last name"
        defaultValue={navigation.getParam("lastName")}
        onChangeText={changeTextNameLast}
      />
      <View style={Stylesa.contactContainer}>
        <View style={Stylesa.call}>
          <MaterialIcons name="call" size={40} color="black" />
        </View>
        <TextInput
          style={Stylesa.nameInput1}
          placeholder="Phone no."
          onChangeText={changeTextNumber}
          defaultValue={navigation.getParam("phone_no")}
          keyboardType="numeric"
        />
      </View>
      <View style={Stylesa.save}>
        <Button title="Update" onPress={saveFinal} color="#3366ff" />
      </View>
    </View>
  );
}

const Stylesa = StyleSheet.create({
  namesContainer: {
    flexDirection: "row",
  },

  nameInput: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 300,
    marginLeft: 50,
  },
  nameInput1: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 300,
  },
  form: {
    margin: 10,
  },
  save: {
    padding: 20,
    margin: 20,
    width: 300,
    marginLeft: 50,
  },
  contactContainer: {
    flexDirection: "row",
  },
  person: {
    marginTop: 15,
  },
  call: {
    marginTop: 15,
  },
});
