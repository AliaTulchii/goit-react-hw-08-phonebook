import React from 'react';
import css from './Message.module.css';

export const Message = () => {
  return (
    <>
      <h2 className={css.MessageTitle}>Contact list</h2>
      <p className={css.MessageText}>There are no any contacts ... </p>
    </>
  );
};