import React, { useContext } from 'react';
import AdminChatSide from './AdminChatSide';
import AdminChatContent from './AdminChatContent';
import styles from './sass/AdminChatMain.module.scss';
import { AdminChatContextProvider } from '../../../utils/AdminChatContext';
import AuthContext from '../../../utils/AuthContext';
import { useNavigate } from 'react-router';
import swal from 'sweetalert';

const AdminChatMain = () => {
  const { userRole } = useContext(AuthContext);
  const navigation = useNavigate();
  const isAdmin = userRole === 'ADMIN';

  if (!isAdmin) {
    swal('권한이 없습니다', '관리자만 접근할 수 있습니다.', 'error').then(
      () => {
        navigation('/');
      }
    );
  }
  return (
    <>
      {isAdmin && (
        <AdminChatContextProvider>
          <div className={styles.content}>
            <AdminChatSide />
            <AdminChatContent />
          </div>
        </AdminChatContextProvider>
      )}
    </>
  );
};

export default AdminChatMain;
