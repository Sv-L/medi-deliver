import { useDispatch, useSelector } from 'react-redux';
import { logOutAPI } from '../../../../api/auth/authApi';
import {getId} from '../../../../redux/auth/authSelectors';
import LogOut from '../../../../assets/images/logout.svg'

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const id = useSelector(getId);

  return (
    <button
      onClick={() => {
        dispatch(logOutAPI());
      }}
    >
      <img src={LogOut} alt="Logout"/></button>
  );
};

      
export default LogoutBtn;
