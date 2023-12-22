import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styles from './sass/AdminChatSide.module.scss';
import RoomListItem from './RoomListItem';

const AdminChatSide = () => {
  const lists = [
    { userName: '김춘식', message: 'test1', unreadCount: 50, roomId: '1' },
    { userName: '김춘식', message: 'test2', unreadCount: 101, roomId: '2' },
    { userName: '김춘식', message: 'test3', unreadCount: 0, roomId: '3' },
    {
      userName: '김춘식',
      message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      unreadCount: 0,
      roomId: '4',
    },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
    { userName: '김춘식', message: 'test5', unreadCount: 0, roomId: '5' },
  ];
  return (
    <div className={styles['side']}>
      <div className={styles['side-header']}>
        <p>채팅방</p>
      </div>
      <ListGroup className={styles['room-list']}>
        {lists.map((l) => {
          return (
            <RoomListItem
              userName={l.userName}
              message={l.message}
              unreadCount={l.unreadCount}
            />
          );
        })}
      </ListGroup>
    </div>
  );
};

export default AdminChatSide;
