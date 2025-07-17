import styled from 'styled-components';

export const SwitchButtonStyled = styled.button`
  margin-top: 20px;
  border-radius: 14px;
  width: 335px;
  height: 8px;
  background: #f1f1f1;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    width: 50%;
    height: 100%;
    border-radius: 14px;
    background: #e6e6e6;
    position: absolute;
    top: 0;
    left: 0;
    transition: var(--transition);
  }

  &.toggled::before {
    left: auto;
    right: 0;
  }
`;