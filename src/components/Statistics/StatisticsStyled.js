import styled from 'styled-components';

export const StatisticsStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 20px 0;

  li {
    a {
      border: 1px solid var(--btn-disabled-box);
      border-radius: 8px;
      padding: 14px;
      width: 158px;
      height: 98px;
      background: var(--background-3);

      div {
        display: flex;
        gap: 8px;
        margin-bottom: 32px;

        img {
          width: 18px;
          height: 18px;
        }
        h3 {
          font-weight: 400;
          font-size: 12px;
          line-height: 117%;
          color: var(--btn-disabled-text);
        }
      }

      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 125%;
        color: var(--primary-color);
      }
      &:hover {
        border: 1px solid var(--accent);
      }
    }
  }
`;
