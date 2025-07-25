import styled from 'styled-components';

export const FormStyled = styled.form`
  padding-top: 20px;
  width: 335px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  input {
    width: 100%;
    height: 44px;
    padding: 18px 12px;
    border: 1px solid var(--btn-disabled-box);
    border-radius: 60px;
    color: var(--primary-color);
    background: var(--background-3);
    outline: none;
    transition: var(--transition);

    &::placeholder {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      color: var(--btn-disabled-text);
    }

    &:focus {
      border-color: var(--accent);
      transition: var(--transition);
    }
  }

  div {
    margin-top: 26px;
    display: flex;
    justify-content: center;
    gap: 8px;

  }
`;
