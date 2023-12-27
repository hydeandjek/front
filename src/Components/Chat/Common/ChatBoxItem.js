import React from 'react';
import styles from './sass/ChatBoxItem.module.scss';
import classNames from 'classnames';

const ChatBoxItem = ({ userName, message, date, isMe }) => {
  //console.log(isMe);
  return (
    <div
      className={classNames(styles['chat-item'], {
        [`${styles['chat-item-reverse']}`]: isMe,
      })}
    >
      <div className={`${styles['chat-message']}`}>
        <div className={styles['chat-header']}>
          <div>{userName}</div>
          <div>{date}</div>
        </div>
        <hr />
        <div>{message}</div>
      </div>
    </div>
  );
};

export default ChatBoxItem;
