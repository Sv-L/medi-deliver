import { Link } from 'react-router-dom';
import Logo from './Logo';
import SubTitle from './Sub-title';
import Title from './Title';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import MobileMenu from './MobileMenu/MobileMenu';
import { HeaderStyled } from './HeaderStyled';

const Header = () => {
  const width = window.innerWidth;
  const pc = width > 1440;

  return (
      <HeaderStyled>
        <MobileMenu />
        <Link to={'/'}>{<Logo />}</Link>
        <div>
          <Title />
          <SubTitle />
        </div>
        {pc && <LogoutBtn />}
      </HeaderStyled>
  );
};

export default Header;
