import styled from 'styled-components';

export const LogoutBtnStyled = styled.button`
display: flex;
      align-items: center;
      justify-content: center; 
  margin-top: 50px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: var(--accent);
  transition: var(--transition);

  &:hover{
    background-color: var(--btn-hover-box);
    transition: var(--transition);
  }

  svg {
  width: 100%;
  height: 100%; 
  display: block; 
}
`;
