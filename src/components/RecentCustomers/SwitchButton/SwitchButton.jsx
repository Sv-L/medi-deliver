import { SwitchButtonStyled } from './SwitchButtonStyled';

const SwitchButton = ({ toggled, setToggled }) => {
  return (
    <SwitchButtonStyled
      className={toggled ? 'toggled' : ''}
      onClick={() => setToggled(!toggled)}
    ></SwitchButtonStyled>
  );
};

export default SwitchButton;
