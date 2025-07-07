import styled from 'styled-components';

export const SideBarStyled = styled.ul`
display: flex;
flex-direction: column;
gap: 14px;

li{
  height: 38px;
  width: 38px;

}
a{
  display: flex;
      align-items: center;
      justify-content: center; 
      height: 100%; 
      width: 100%;
      transition: var(--transition);

      &.active{
        circle{   
    fill: var(--accent);
    transition: var(--transition);
    }
      }


    svg{
      height: 100%;
        width: 100%; 
        display: block; 
    }
     
    circle{   
    fill: var(--background-3);
    }

    path{
      fill: var(--text);
    }

    &:hover{
      path{
        fill: var(--accent);
        transition: var(--transition);
      }
        
      }
}
`;
