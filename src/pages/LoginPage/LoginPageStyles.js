import styled from 'styled-components';
import background from '../../assets/images/white-round-pill.png'

export const LodinPagesStyles = styled.div`

background: url(${background});
background-repeat: no-repeat;
background-position: top 160px right 20px;

h1{
margin-top: 100px;
padding: 24px 0;
font-weight: 600;
font-size: 28px;
line-height: 121%;

span{
    color: var(--accent);
}
}
`

export const LogoStyles = styled.div`
padding: 24px 0;
display: flex;
gap: 10px;
align-items: center;
`