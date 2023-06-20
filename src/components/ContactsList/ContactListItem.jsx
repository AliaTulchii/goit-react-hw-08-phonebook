import React from 'react';
import css from './ContactsList.module.css'
import { FaTrashAlt } from 'react-icons/fa'
import person from './person.png'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'features/contact/contacts-operations';

const ContactListItem = ({ contact }) => {
    const dispatch = useDispatch();

    const deleteContactHandler = (id) => {
        dispatch(deleteContact(id))
    }

    return (
        <li 
            className={css.ContactsList__item}>     
            <img src={person} alt={contact.name} className={ css.ContactList__img } />
            <p className={css.ContactsList__text}>{contact.name}</p>
                <p className={css.ContactsList__textWhite}>{contact.number}</p>
                <button
                    className={css.ContactsList__button}
                    onClick={()=>deleteContactHandler(contact.id)}
                ><FaTrashAlt /></button>
            </li>)
   
}

export default ContactListItem

ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    )
}