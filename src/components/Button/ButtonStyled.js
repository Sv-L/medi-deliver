import styled from 'styled-components';

export const ButtonStyled = styled.button`

display:flex;
align-items: center;
gap:12px;
background: none;

&.filter {
    gap: 2px;
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
&.add-product {
    svg{
        height:42px;
        width:42px;
        border-radius:50%;
        background-color:var(--accent);
        transition:var(--transition);
        /* path{
            stroke:red;
        }     */
    }
    &:hover {
        svg {
            background-color:var(--btn-hover-box);
            transition:var(--transition);
        }
    }
    
    &.edit{
        svg{
            background-color:var(--accent);
        }
    }
}

&.submit{
background: var(--accent);
border-radius: 60px;
width: 146px;
height: 44px;
color:var(--background-3);
justify-content:center;
    }

    &.cancel{
border-radius: 60px;
width: 146px;
height: 44px;
color:var(--btn-disabled-text);
justify-content:center;
background: var(--btn-disabled-box);
    }
`