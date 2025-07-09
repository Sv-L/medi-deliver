import styled from "styled-components";

export const CustomersDataStyled = styled.div `

overflow-x: auto;

table{
border: 1px solid var(--btn-disabled-box);
border-radius:0 0 8px 8px;
width:100%;
}


caption{
padding:20px;
font-weight: 600;
font-size: 18px;
line-height: 133%;
text-align: left;
border: 0px solid var(--background-4);
border-radius: 8px 8px 0 0;
height: 64px;
background: var(--background);

}

th{
    font-weight: 500;
font-size: 14px;
line-height: 129%;
color: var(--btn-disabled-text);
}

td{
font-weight: 500;
font-size: 16px;
line-height: 112%;
padding:20px;

div{
display: flex;
align-items: center;
gap: 8px;
}

img{
border-radius: 30px;
width: 36px;
height: 36px;
}
}

`