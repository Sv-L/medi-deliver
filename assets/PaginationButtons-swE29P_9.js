import{r as a,d as p,a as u,u as x,e as h,h as d,j as e}from"./index-vi98oyZx.js";const v=t=>a.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M12.8334 1.75H1.16675L5.83341 7.26833V11.0833L8.16675 12.25V7.26833L12.8334 1.75Z",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),b=p.div`
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
`,g=t=>t.filter,k=({placeholder:t,onClick:i})=>{const s=u(g),r=x(),o=h();a.useEffect(()=>()=>{r(d(""))},[o,r]);const c=l=>{const n=l.currentTarget.value.trim();r(d(n))};return e.jsxs(b,{children:[e.jsx("input",{placeholder:t,onChange:c,value:s}),e.jsxs("button",{onClick:i,children:[e.jsx(v,{}),"Filter"]})]})},f=p.div`

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
`,w=({activeBtn:t,setActiveBtn:i,buttonCount:s,fetch:r})=>{const o=x(),c=u(g);return a.useEffect(()=>{o(r({page:t,name:c}))},[t,o,r]),e.jsx(f,{children:Array.from({length:s},(l,n)=>e.jsx("button",{className:n+1===t?"active":"",onClick:()=>i(n+1)},n))})};export{k as F,w as P,g};
