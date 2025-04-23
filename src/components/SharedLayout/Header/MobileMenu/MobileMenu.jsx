import { useState } from 'react';
import Modal from '../../../Modal';
import Menu from '../../../../assets/images/menu-burger.svg';
import SideBar from '../SideBar';
import LogoutBtn from '../LogoutBtn';
import { MobileMenuButtonStyles } from './MobileMenuStyles';

const MobileMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const onShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <>
      <MobileMenuButtonStyles onClick={onShowMenu}>
        <img src={Menu} alt="menu" />
      </MobileMenuButtonStyles>
      {isShowMenu && (
        <Modal closeModal={onShowMenu} className={'mobMenu'}>
          <SideBar />
          <LogoutBtn />
        </Modal>
      )}
    </>
  );
};

export default MobileMenu;
