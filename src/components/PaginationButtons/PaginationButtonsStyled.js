import styled from "styled-components";

export const PaginationButtonsStyled = styled.div`

display:flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap:8px;
padding: 20px;

button{
    width: 19px;
    height: 19px;
    background-color:var(--background);
    transition:var(--transition);
    border-radius:50%;

    &.active{
        background-color:var(--accent);
    }

    &:focus, &:hover{
        outline: none;
        background-color:var(--accent);
        transition:var(--transition);
    }

}
`