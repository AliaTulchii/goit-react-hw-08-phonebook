import React from 'react';
import PropTypes from 'prop-types'
import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import getFilter from 'features/filter/getFilter';
import  { selectContacts } from 'features/contact/getContact';


const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(getFilter);

    const getFiltered = () => {
        if (!filter) {
            return contacts;
          }
          const normalizedFilter = filter.toLowerCase();
          const filteredContacts = contacts.filter(
            ({ name, number }) =>
              name.toLowerCase().trim().includes(normalizedFilter) ||
              number.trim().includes(normalizedFilter)
          );
        
          if (normalizedFilter && !filteredContacts.length) {
            alert(`No contacts matching your request`);
          }
          return filteredContacts;
    }
        
        
    
    const filtered = getFiltered();
    

    if (contacts.length === 0) return null

    return (
        <ul>
            {filtered.map((contact) => (
            <ContactListItem
              key={contact.id}
              contact={contact}
          />))}
        </ul>
    )
}

export default ContactList;


ContactList.propTypes = {
    contacts: PropTypes.string,
    onDelete: PropTypes.func,
}