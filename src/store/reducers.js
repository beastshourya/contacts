import { ADDCONTACTS, DELETES, SEARCH, UPDATE } from "./actionType";

const initialState = {
  myContacts: [],
  filteredContacts: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDCONTACTS:
      return {
        ...state,
        myContacts: [...state.myContacts, action.payload],
        filteredContacts: [...state.myContacts, action.payload],
      };

    case DELETES:
      return {
        ...state,
        myContacts: state.myContacts.filter((item) => item.key !== action.key),
        filteredContacts: state.myContacts.filter(
          (item) => item.key !== action.key
        ),
      };
    case UPDATE:
      return {
        ...state,
        myContacts: state.myContacts.map((contact) =>
          contact.key == action.payload.key ? action.payload : contact
        ),

        filteredContacts: state.myContacts.map((contact) =>
          contact.key == action.payload.key ? action.payload : contact
        ),
      };
    case SEARCH:
      return {
        ...state,
        filteredContacts: state.myContacts.filter((item) => {
          return item.name.toLowerCase().includes(action.payload.toLowerCase());
        }),
        filteredContacts: state.myContacts.filter((item) => {
          return item.lastName
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };

    default:
      return state;
  }
};
