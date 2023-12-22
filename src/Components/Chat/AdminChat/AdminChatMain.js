import React from 'react';
import AdminChatSide from './AdminChatSide';
import AdminChatContent from './AdminChatContent';
import styles from './sass/AdminChatMain.module.scss';
import ChattingModal from '../../Modal/ChattingModal';

const AdminChatMain = () => {
  return (
    <div className={styles.content}>
      <AdminChatSide />
      <AdminChatContent />
    </div>
  );
};

export default AdminChatMain;
