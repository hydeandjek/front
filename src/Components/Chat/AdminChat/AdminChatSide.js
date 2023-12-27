import React, { useContext, useEffect, useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styles from './sass/AdminChatSide.module.scss';
import RoomListItem from './RoomListItem';
import AdminChatContext from '../../../utils/AdminChatContext';

const AdminChatSide = () => {
  const { roomList, activeRoomId, onSetActiveRoomId } =
    useContext(AdminChatContext);
  const [lists, setLists] = useState(roomList);

  useEffect(() => {
    //console.log(roomList);
    onSetActiveRoomId('');
  }, []);

  useEffect(() => {
    //console.log(roomList);
    setLists(roomList);
  }, [roomList]);

  const clickHandler = (roomId) => {
    //console.log('itemClicked', roomId);
    onSetActiveRoomId(roomId);
  };

  return (
    <div className={styles['side']}>
      <div className={styles['side-header']}>
        <p>채팅방</p>
      </div>
      <ListGroup className={styles['room-list']}>
        {lists.map((l, i) => {
          const active = l.roomId === activeRoomId;
          return (
            <RoomListItem
              key={i}
              roomId={l.roomId}
              userName={l.userName}
              message={l.message}
              unreadCount={l.unreadCount}
              active={active}
              onClickItem={clickHandler}
            />
          );
        })}
      </ListGroup>
    </div>
  );
};

export default AdminChatSide;

/*  */
