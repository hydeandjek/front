import React from 'react';
import { Badge, ListGroupItem } from 'reactstrap';
import styles from './sass/RoomListItem.module.scss';
import classNames from 'classnames';

const RoomListItem = ({
  roomId,
  userName,
  message,
  unreadCount,
  active,
  onClickItem,
}) => {
  const clickHandler = () => {
    onClickItem(roomId);
  };

  return (
    <>
      <ListGroupItem
        className={classNames(styles['list-item'], {
          [styles['list-item-active']]: active,
        })}
        onClick={clickHandler}
      >
        <div className={styles.header}>
          <p>{userName}</p>
          <Badge
            className={styles.badge}
            color={unreadCount > 0 ? 'warning' : undefined}
          >
            {unreadCount > 100 ? '100+' : unreadCount}
          </Badge>
        </div>
        <div className={styles.message}>{message}&nbsp;</div>
      </ListGroupItem>
    </>
  );
};

export default RoomListItem;
