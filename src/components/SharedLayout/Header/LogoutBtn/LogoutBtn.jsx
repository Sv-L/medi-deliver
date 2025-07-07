import { useDispatch, useSelector } from 'react-redux';
import { logOutAPI } from '../../../../api/auth/authApi';
import { getId } from '../../../../redux/auth/authSelectors';
import LogOut from '../../../../assets/images/logout.svg?react';
import { LogoutBtnStyled } from './LogoutBtnStyled';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const id = useSelector(getId);

  return (
    <LogoutBtnStyled
      onClick={() => {
        dispatch(logOutAPI());
      }}
    >
      <LogOut/>
    </LogoutBtnStyled>
  );
};

export default LogoutBtn;
