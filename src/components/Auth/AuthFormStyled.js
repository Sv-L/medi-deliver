import styled from 'styled-components';
import background from '../../assets/images/elements.png'


export const LodinFormStyles = styled.form`
padding: 16px 0;

background: url(${background});
background-repeat: no-repeat;
background-position: bottom 0 right 0;

 input{
    width: 100%;
    height: 44px;
    padding: 18px 12px;
    border: 1px solid rgba(29, 30, 33, 0.1);
    border-radius: 60px;
    background: var(--background-3);

    /* &:first-child{
        margin-bottom: 16px;
    } */

 }

 p{
text-align: center;
padding: 8px;
font-weight: 400;
font-size: 12px;
line-height: 150%;
color: var(--accent-2);
 }

  button{
    margin: 40px 0 218px 0;
    width: 100%;
    height: 44px;
    border-radius: 60px;
    padding: 14px;
    background-color: var(--accent);
    border: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: var(--background-3);
     transition: var(--transition);

    &:hover{
        background-color: var(--btn-hover-box);
        transition: var(--transition);
    }
    }
`