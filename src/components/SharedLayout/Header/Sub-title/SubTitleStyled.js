import styled from 'styled-components';

export const SubTitleStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: var(--btn-disabled-text);

  a::after {
    content: '';
    margin-left: 8px;
    display: inline-block;
    width: 1px;
    height: 18px;
    background-color: var(--btn-disabled-text);

    vertical-align: middle;
  }
`;
