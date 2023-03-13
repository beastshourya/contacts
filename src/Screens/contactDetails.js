import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { DELETES } from "../store/actionType";
import call from "react-native-phone-call";
import Communications from "react-native-communications";

export default function ContactDetails({ navigation }) {
  const editScreen = () => {
    navigation.navigate("EditScreen", ContactDetail);
  };

  let ContactDetail = {
    name: navigation.getParam("name"),
    lastName: navigation.getParam("email"),
    phone_no: navigation.getParam("phone_no"),
    key: navigation.getParam("key"),
  };

  const makeCall = (number) => {
    const args = {
      number: number,
      prompt: true,
    };
    call(args).catch(console.error);
  };

  const dispatch = useDispatch();

  const deleteButton = () => {
    dispatch({ type: DELETES, key: navigation.getParam("key") });
    navigation.navigate("Home");
  };

  return (
    <View style={stylesq.complete}>
      <View style={stylesq.contactContainer}>
        <View style={stylesq.box}>
          <View style={stylesq.personIcon}>
            <MaterialIcons name="person" size={40} color="black" />
          </View>
          <Text style={stylesq.firstName}>
            {navigation.getParam("name")} {navigation.getParam("email")}
          </Text>
        </View>
        <View style={stylesq.box}>
          <View style={stylesq.callIcon}>
            <MaterialIcons name="call" size={40} color="black" />
          </View>
          <Text style={stylesq.phone_no1}>
            {navigation.getParam("phone_no")}
          </Text>
        </View>
      </View>
      <View style={stylesq.icons}>
        <TouchableOpacity
          onPress={() => makeCall(navigation.getParam("phone_no"))}
        >
          <MaterialIcons name="call" size={50} color="black" />
        </TouchableOpacity>
        <Text>        </Text>
        <TouchableOpacity
          onPress={() => Communications.text(navigation.getParam("phone_no"))}
        >
          <MaterialIcons name="message" size={50} color="black" />
        </TouchableOpacity>
        <Text>        </Text>

        <View>
          <TouchableOpacity onPress={deleteButton}>
            <MaterialIcons name="delete" size={50} color="black" />
          </TouchableOpacity>
        </View>
        <Text>        </Text>
        <TouchableOpacity onPress={editScreen}>
          <MaterialIcons name="edit" size={50} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stylesq = StyleSheet.create({
  firstName: {
    fontSize: 20,
    margin: 10,
    borderWidth: 1,
    width: 300,
    padding: 15,
  },
  phone_no1: {
    fontSize: 20,
    margin: 10,
    width: 300,
    borderWidth: 1,
    padding: 15,
  },
  complete: {
    flex: 1,
  },
  icons: {
    flexDirection: "row",
    margin: 30,
    borderWidth: 1,
    padding: 20,
    paddingLeft: 35,
    borderRadius: 20,
  },
  contactContainer: {
    padding: 5,
    margin: 20,
  },
  box: {
    flexDirection: "row",
  },
  personIcon: {
    marginTop: 25,
  },
  callIcon: {
    marginTop: 30,
  },
});
