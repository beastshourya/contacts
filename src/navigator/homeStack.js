import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/home";
import Form from "../Screens/form";
import ContactDetails from "../Screens/contactDetails";
import EditScreen from "../Screens/EditScreen";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Contacts",
      headerStyle: {
        backgroundColor: "#3366ff",
        height: 70,
      },
      headerTintColor: "white",
    },
  },
  Form: {
    screen: Form,
    navigationOptions: {
      title: "",
      headerStyle: {
        backgroundColor: "#3366ff",
        height: 70,
      },
    },
  },
  ContactDetails: {
    screen: ContactDetails,
    navigationOptions: {
      title: "",
      headerStyle: {
        backgroundColor: "#3366ff",
        height: 70,
      },
    },
  },
  EditScreen: {
    screen: EditScreen,
    navigationOptions: {
      title: "",
      headerStyle: {
        backgroundColor: "#3366ff",
        height: 70,
      },
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
