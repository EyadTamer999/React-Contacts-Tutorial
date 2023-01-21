import "../css/App.css";
import ListContacts from "./ListContacts";
import {useState} from "react";

const App = () => {
    //create function that allows us to set state for later contact manipulation like remove
    const [contacts, setContacts] = useState(
        //initial state is basically the state that we start with.
        [
            {
                id: "karen",
                name: "Karen Isgrigg",
                handle: "karen_isgrigg",
                avatarURL: "http://localhost:5001/karen.jpg",
            },
            {
                id: "richard",
                name: "Richard Kalehoff",
                handle: "richardkalehoff",
                avatarURL: "http://localhost:5001/richard.jpg",
            },
            {
                id: "tyler",
                name: "Tyler McGinnis",
                handle: "tylermcginnis",
                avatarURL: "http://localhost:5001/tyler.jpg",
            },
        ]
    );

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
