import { ADD_CONTACT,DELETE_CONTACT,UPDATE_CONTACT,SEARCH_CONTACT } from "./actionType";

const initialState = {
  myContacts: [
    {key: 1,
    name: 'rahul',
    lastName: 'kumar',
    phone_no: 9431154433,}
  ],
  filteredContacts: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        myContacts: [...state.myContacts, action.payload],
        filteredContacts: [...state.myContacts, action.payload],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        myContacts: state.myContacts.filter((item) => item.key !== action.key),
        filteredContacts: state.myContacts.filter(
          (item) => item.key !== action.key
        ),
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        myContacts: state.myContacts.map((contact) =>
          contact.key == action.payload.key ? action.payload : contact
        ),

        filteredContacts: state.myContacts.map((contact) =>
          contact.key == action.payload.key ? action.payload : contact
        ),
      };
    case SEARCH_CONTACT:
      return {
        ...state,
        filteredContacts: state.myContacts.filter((item) => {
          return item.name.toLowerCase().includes(action.payload.toLowerCase());
        })
      };

    default:
      return state;
  }
};


