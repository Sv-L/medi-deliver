import styled from 'styled-components';

export const ContainerStyles = styled.div`
  margin: 0 auto;
  padding:0 20px;
  border: solid 1px green;
 
  @media screen and (max-width: 319px) {
    width: 100%;
  }

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 375px;
  }


  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 768px;
    /* padding:0 32px; */
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    /* padding:0 132px; */
  }
`;