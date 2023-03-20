import { interpolate } from "react-native-reanimated";
import { ADD_CONTACT,UPDATE_CONTACT,DELETE_CONTACT } from "../store/actionType";
import { mainReducer } from "../store/reducers";
import { initialState } from "../store/reducers";

describe('mainReducers', () =>{
it('should handle ADDCONTACTS', () => {
    expect(mainReducer(undefined, {
            type: ADD_CONTACT,
            payload: {name:'Harsh', key:'1', lastName:'kumar', phone_no:'9431123344' }
    })).toEqual(
        {
            ...initialState,
            myContacts: [{key: 1,
                name: 'rahul',
                lastName: 'kumar',
                phone_no: 9431154433,},{name:'Harsh', key:'1', lastName:'kumar', phone_no:'9431123344' }],
            filteredContacts:[{key: 1,
                name: 'rahul',
                lastName: 'kumar',
                phone_no: 9431154433,},{name:'Harsh', key:'1', lastName:'kumar', phone_no:'9431123344' }],
            
        }
    );
});
} ); 


describe('mainReducers', () =>{
    it('should handle DELETES', () => {
        expect(mainReducer(undefined, {
                type: DELETE_CONTACT,
                key: 1
        })).toEqual(
            {
                ...initialState,
                myContacts: [],
                filteredContacts:[],
                
            }
        );
    });
    } ); 



describe('mainReducers', () =>{
it('should handle ADDCONTACTS', () => {
    expect(mainReducer(undefined, {
            type: UPDATE_CONTACT,
            payload: {key: 1,
                name: 'rahul',
                lastName: 'verma',
                phone_no: 9431154433,}
    })).toEqual(
        {
            ...initialState,
            myContacts: [{key: 1,
                name: 'rahul',
                lastName: 'verma',
                phone_no: 9431154433,}],
            filteredContacts:[{key: 1,
                name: 'rahul',
                lastName: 'verma',
                phone_no: 9431154433,}],
            
        }
    );
});
} ); 
