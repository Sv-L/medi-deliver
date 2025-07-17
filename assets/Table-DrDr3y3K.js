import{d as h,j as r}from"./index-vi98oyZx.js";const b=h.div`
overflow-x: auto;
padding: 20px 0;
table{
border: 1px solid rgba(29, 30, 33, 0.1);
  border-collapse: collapse;
  background: var(--background-3);
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  white-space: nowrap;
}

  caption {
    border: 0px solid rgba(29, 30, 33, 0.08);
    border-radius: 8px 8px 0 0;
    padding: 20px;
    background: var(--background);
    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    text-align: start;
  }
  th {
    border: 1px solid rgba(29, 30, 33, 0.1);
    color: rgba(29, 30, 33, 0.4);
    padding: 14px;
  }
  td {
    border: 1px solid rgba(29, 30, 33, 0.1);
    padding: 14px;
    
  }
  img{
    width: 24px;
    height: 24px;
  }
`,u=({caption:i,tableSchemas:d,data:p,columnsTitel:x=!0,styles:s})=>r.jsx(b,{children:r.jsxs("table",{children:[i&&r.jsx("caption",{children:i}),x&&r.jsx("thead",{children:r.jsx("tr",{children:d.map((e,a)=>r.jsx("th",{children:Object.keys(e)[0]},a))})}),r.jsx("tbody",{children:p.map((e,a)=>r.jsx("tr",{children:d.map((g,n)=>{var l;const t=Object.values(g)[0],c=Array.isArray(t)&&((l=t[1])==null?void 0:l.img);let o;return s&&(o=s(e,n)),r.jsx("td",{style:o,children:c?r.jsxs(r.Fragment,{children:[r.jsx("img",{src:e[t[1].img],alt:"avatar"}),e[t[0]]]}):e[t]},n)})},a))})]})});export{u as T};
