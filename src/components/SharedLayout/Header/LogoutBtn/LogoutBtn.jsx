import { useDispatch, useSelector } from 'react-redux';
import { logOutAPI } from '../../../../api/auth/authApi';
import { getId } from '../../../../redux/auth/authSelectors';
import LogOut from '../../../../assets/images/logout.svg';
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
      <img src={LogOut} alt="Logout" />
    </LogoutBtnStyled>
  );
};

export default LogoutBtn;
