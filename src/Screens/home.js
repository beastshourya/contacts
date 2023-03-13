import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const placeHolder = () => {
    navigation.navigate("Form");
  };

  const Contacts = useSelector((state) => state.myContacts);

  const [data, setData] = useState(Contacts);

  const searchName = (input) => {
    let data = Contacts;
    let searchData = data.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setData(searchData);
    console.log("hello world");
    console.log(searchData);
    console.log("working");
  };

  const dispatch = useDispatch();

  return (
    <View style={Stylesa.complete}>
      <View style={Stylesa.headerContainer}>
        <Text style={Stylesa.headerText}>LIST OF CONTACTS</Text>
        <View style={Stylesa.add}>
          <TouchableOpacity onPress={placeHolder}>
            <MaterialIcons name="add" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        placeholder="Search Contacts"
        style={Stylesa.searchBar}
        onChangeText={searchName}
      />

      <View style={Stylesa.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ContactDetails", item)}
              >
                <Text style={Stylesa.text}>
                  {item.name.slice(0, 15) + " " + item.email.slice(0, 15)}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const Stylesa = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
  },
  headerText: {
    fontSize: 20,
    marginTop: 12,
    marginLeft: 10,
  },

  add: {
    marginLeft: "87%",
    marginTop: 5,
    position: "absolute",
  },
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    borderBottomWidth: 1,
    padding: 10,
  },
  complete: {
    flex: 1,
  },
  searchBar: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
    margin: 6,
  },
});
