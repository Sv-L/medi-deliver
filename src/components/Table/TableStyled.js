import styled from 'styled-components';

export const TableStyled = styled.div`
overflow-x: auto;
padding: 20px 0;
table{
border: 1px solid rgba(29, 30, 33, 0.1);
  border-collapse: collapse;
  background: var(--background-3);
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  white-space: nowrap;
}

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
  img{
    width: 24px;
    height: 24px;
  }
`;
