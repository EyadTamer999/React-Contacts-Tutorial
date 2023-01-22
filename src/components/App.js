import "../css/App.css";
import ListContacts from "./ListContacts";
import {useState} from "react";
import *  as ContactsAPI from "../utils/ContactsAPI"
import {useEffect} from "react";
import {getAll} from "../utils/ContactsAPI";

const App = () => {
    //create function that allows us to set state for later contact manipulation like remove
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const getContacts = async () =>{
            const res = await ContactsAPI.getAll();
            setContacts(res);
        };

        getContacts();
    }, []);

    const removeContact = (contact) => {
        setContacts(contacts.filter((rm) => rm.id !== contact.id));
        //the filter method removes the contact that is passed through as argument
    };



    //returns a div that has our React component with the passed arguments contacts that we created in App.js

    return (
        <div>
            <ListContacts balabeezo={contacts} onDeleteContact={removeContact}/>
        </div>
    )
};


export default App;
