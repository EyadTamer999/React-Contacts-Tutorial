import PropTypes from "prop-types";
import {useState} from "react";

const ListContacts = ({balabeezo, onDeleteContact}) => {

    const [query, setQuery] = useState("");
    const updateQuery = (input) => {
        setQuery(input.trim());
    };

    const clearQuery = () => {
        updateQuery("");
    };

    const showingContacts = query === "" ? balabeezo : balabeezo.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="list-contacts">
            <div className="list-contacts-top">
                <input className="search-contacts" type="text" placeholder="Search" value={query}
                       onChange={(event) => updateQuery(event.target.value)}/>
            </div>

            {
                showingContacts.length !== balabeezo.length && (
                    <div className="showing-contacts">
                        <span>
                            Now Showing {showingContacts.length} of {balabeezo.length}
                        </span>
                        <button onClick={clearQuery}>
                            Show all
                        </button>
                    </div>
                )
            }

            <ol className="contact-list">
                {showingContacts.map((contact) => (<li key={contact.id} className="contact-list-item">
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