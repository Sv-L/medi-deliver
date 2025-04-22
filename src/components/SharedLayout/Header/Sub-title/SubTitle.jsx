import { Link, Links } from 'react-router-dom';
import { SubTitleStyled } from './SubTitleStyled';

const SubTitle = () => {
  return (
    <SubTitleStyled>
      <Link to={'/dashboard'}>dashboard</Link>
      <p>vendor@gmail.com</p>
    </SubTitleStyled>
  );
};

export default SubTitle;
