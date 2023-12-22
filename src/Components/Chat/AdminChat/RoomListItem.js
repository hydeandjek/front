import React from 'react';
import { Badge, ListGroupItem } from 'reactstrap';
import styles from './sass/RoomListItem.module.scss';

const RoomListItem = ({ userName, message, unreadCount }) => {
  return (
    <>
      <ListGroupItem className={styles['list-item']}>
        <div className={styles.header}>
          <p>{userName}</p>
          <Badge
            className={styles.badge}
            color={unreadCount > 0 ? 'warning' : undefined}
          >
            {unreadCount > 100 ? '100+' : unreadCount}
          </Badge>
        </div>
        <div className={styles.message}>{message}</div>
      </ListGroupItem>
    </>
  );
};

export default RoomListItem;
