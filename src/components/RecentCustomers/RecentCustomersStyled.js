import styled from 'styled-components';

export const RecentCustomersStyled = styled.table`
  width: 335px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-collapse: collapse;
  background: var(--background-3);
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;

  caption {
    border: 0px solid rgba(29, 30, 33, 0.08);
    border-radius: 8px 8px 0 0;
    padding: 20px;
    background: var(--background);
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    text-align: start;
  }
  th {
    border: 1px solid rgba(29, 30, 33, 0.1);
    color: rgba(29, 30, 33, 0.4);
    padding: 14px;
  }
  td {
    border: 1px solid rgba(29, 30, 33, 0.1);
    padding: 14px;
  }
  img {
    width: 18px;
    height: 18px;
    margin-bottom: 8px;
  }
`;

export const RecentCustomersButtonStyled = styled.button`
  border-radius: 14px;
  width: 335px;
  height: 8px;
  background: #f1f1f1;
  position: relative;
  /* &.toggled {
    background: #000;
  } */

  div {
    width: 50%;
    height: 100%;
    border-radius: 14px;
    background: #e6e6e6;
    position: absolute;
    top: 0;
    left: 0;
  }

  &.toggled div {
    left: auto;
    right: 0;
  }
`;
