import React from 'react'
import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import css from '../components/App.module.css'
import ContactList from '../components/ContactsList/ContactList';

const Contacts = () => {
  return (
          
    <div className={css.ContactList__style}>
        <Form  />

        <h2 className={css.ContactList__titleBlue}>Contacts</h2>
          <Filter />
          <ContactList/>
        
        </div>
        
  )
}

export default Contacts
