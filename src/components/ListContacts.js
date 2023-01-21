import PropTypes from "prop-types";
import {useState} from "react";

const ListContacts = ({balabeezo, onDeleteContact}) => {

    const[query, setQuery] = useState("");
    const updateQuery = (input) => {
        setQuery(input.trim());
    }

    return (
        <div className="list-contacts">
            <div className="list-contacts-top">
                <input className="search-contacts" type="text" placeholder="Search" value={query} onChange={(event) => updateQuery(event.target.value)}/>
            </div>
            <ol className="contact-list">
                {balabeezo.map((contact) => (<li key={contact.id} className="contact-list-item">
                    <div className="contact-avatar"
                         style={{
                             backgroundImage: `url(${contact.avatarURL})`,

                         }}>
                    </div>
                    <div className="contact-details">
                        <p>
                            {contact.name}
                        </p>
                        <p>
                            {contact.handle}
                        </p>
                    </div>
                    <button className="contact-remove" onClick={() => onDeleteContact(contact)}>Remove</button>
                </li>))}
            </ol>
        </div>
    );
};

ListContacts.protoTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};

export default ListContacts;