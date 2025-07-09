import{d,a as h,u as c,r as s,f as o,j as t,b as p,C as g}from"./index-DAvpA99S.js";import{g as u}from"./customersSelectors-CGBTo1Fn.js";const b=e=>new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),f=d.div`

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

`,v=()=>{const e=h(u),n=c();return s.useEffect(()=>{n(o({}))},[n,o]),e?t.jsx(f,{children:t.jsxs("table",{children:[t.jsx("caption",{children:"Customers Data"}),t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"User Info"}),t.jsx("th",{children:"Email"}),t.jsx("th",{children:"Address"}),t.jsx("th",{children:"Phone"}),t.jsx("th",{children:"Register date"})]})}),t.jsx("tbody",{children:e.map(function(r){const i=b(r.register_date);return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{children:[t.jsx("img",{src:r.image,alt:"avatar"})," ",r.name]})}),t.jsx("td",{children:r.email}),t.jsx("td",{children:r.address}),t.jsx("td",{children:r.phone}),t.jsx("td",{children:i})]},r._id)})})]})}):t.jsx("p",{children:"122"})},j=e=>s.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.createElement("path",{d:"M12.8334 1.75H1.16675L5.83341 7.26833V11.0833L8.16675 12.25V7.26833L12.8334 1.75Z",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),m=d.div`
  padding: 40px 0 20px;
  display: flex;
  gap: 14px;
  align-items: center;

  input {
    width: 215px;
    height: 44px;
    border: 1px solid var(--btn-disabled-box);
    border-radius: 60px;
    text-align: center;
    line-height: 150%; 
    outline: none;
    transition: var(--transition);

    &::placeholder{
        font-size: 12px;
        color: var(--btn-disabled-text);
    }

    &:focus, &:hover {
      border-color: var(--accent);
      transition: var(--transition);
    }
  }

  button {
    display: flex;
    gap: 2px;
    align-items: center;
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
`,w=e=>e.filter,k=({placeholder:e})=>{const n=c(),r=h(w);console.log("filter",r);const i=a=>{const x=a.currentTarget.value.trim();n(p(x))},l=()=>{n(o({page:1,limit:5,name:r}))};return t.jsxs(m,{children:[t.jsx("input",{placeholder:e,onChange:i}),t.jsxs("button",{onClick:l,children:[t.jsx(j,{}),"Filter"]})]})},y=d.div`

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
`,C=()=>{const[e,n]=s.useState(1),r=c();s.useEffect(()=>{r(o({page:e}))},[e,r,o]);const i=Math.ceil(88/5);return t.jsx(y,{children:Array.from({length:i},(l,a)=>t.jsx("button",{className:a+1===e?"active":"",onClick:()=>n(a+1)},a))})},E=()=>t.jsxs(g,{children:[t.jsx(k,{placeholder:"User Name"}),t.jsx(v,{}),t.jsx(C,{})]});export{E as default};
