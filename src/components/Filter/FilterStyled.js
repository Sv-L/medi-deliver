import styled from 'styled-components';

export const FilterStyled = styled.div`
  padding: 40px 0 20px;
  display: flex;
  gap: 14px;
  align-items: center;

  input {
    width: 215px;
    height: 44px;
    border: 1px solid var(--btn-disabled-box);
    border-radius: 60px;
    text-align: center;
    line-height: 150%; 
    outline: none;
    transition: var(--transition);

    &::placeholder{
        font-size: 12px;
        color: var(--btn-disabled-text);
    }

    &:focus, &:hover {
      border-color: var(--accent);
      transition: var(--transition);
    }
  }

  button {
    display: flex;
    gap: 2px;
    align-items: center;
    border-radius: 60px;
    padding: 13px 30px;
    width: 112px;
    height: 44px;
    background: var(--accent);
    color: var(--background-3);

    &:focus, &:hover {
     background-color: var(--btn-hover-box);
      transition: var(--transition);
    }
  }
`;
