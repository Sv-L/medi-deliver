import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  transition: 250ms linear;

  div {
    position: relative;
    max-height: 95%;
    position: absolute;
    background-color: #fff;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    /* border-radius: 10px; */
    /* padding: 92px 20px; */
    overflow: auto;
  }
  .mobMenu {
    padding: 92px 20px 20px;
    height: 100hv;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--text);
    transition: var(--transition);
    

  }

  .close-btn {
    width: 32px;
    height: 32px;
    position: absolute;
    right: 12px;
    top: 24px;
    background-color: transparent;
    transition: var(--transition);
    border: none;

      path{
        stroke:var(--primary-color);
      }
    
      &:hover, &:focus{
        path{
        stroke:var(--btn-hover-box);
        transition: var(--transition);
      }
      }
  }
`;
