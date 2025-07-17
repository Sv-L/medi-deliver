import{a,u as h,r as c,f as l,j as e,d as p,b as n}from"./index-vi98oyZx.js";import{T as x}from"./Table-DrDr3y3K.js";import{g,a as m}from"./customersSelectors-dYkurSyo.js";const j=t=>t.transactions.items,C=()=>{const t=a(j),s=h();c.useEffect(()=>{s(l({}))},[s,l]);const r=[{Type:"type"},{Adresse:"name"},{Amount:"amount"}],o=(i,u)=>i.type==="Error"&&u===2?{textDecoration:"line-through"}:{};return t?e.jsx(x,{caption:"Income/Expenses",tableSchemas:r,data:t,columnsTitel:!1,styles:o}):e.jsx("p",{children:"Here are no Income/Expenses."})},f=p.button`
  margin-top: 20px;
  border-radius: 14px;
  width: 335px;
  height: 8px;
  background: #f1f1f1;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    width: 50%;
    height: 100%;
    border-radius: 14px;
    background: #e6e6e6;
    position: absolute;
    top: 0;
    left: 0;
    transition: var(--transition);
  }

  &.toggled::before {
    left: auto;
    right: 0;
  }
`,k=({toggled:t,setToggled:s})=>e.jsx(f,{className:t?"toggled":"",onClick:()=>s(!t)}),w=()=>{const[t,s]=c.useState(!1),r=a(g),o=h();c.useEffect(()=>{o(n({})),t&&o(n({page:2}))},[t,o,n]);const i=[{"User Info":["name",{img:"image"}]},{Email:"email"},{Spent:"spent"},,];return r?e.jsxs(e.Fragment,{children:[e.jsx(x,{caption:"Recent Customers",tableSchemas:i,data:r}),e.jsx(k,{toggled:t,setToggled:s})]}):e.jsx("p",{children:"Here are no customers."})},d="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_20_6632)'%3e%3cpath%20d='M11.5709%209.64286C14.7662%209.64286%2017.3566%208.49159%2017.3566%207.07143C17.3566%205.65127%2014.7662%204.5%2011.5709%204.5C8.37551%204.5%205.78516%205.65127%205.78516%207.07143C5.78516%208.49159%208.37551%209.64286%2011.5709%209.64286Z'%20stroke='%231D1E21'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5.78516%207.07141V14.7857C5.78516%2016.2%208.35658%2017.3571%2011.5709%2017.3571C14.7852%2017.3571%2017.3566%2016.2%2017.3566%2014.7857V7.07141'%20stroke='%231D1E21'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.3569%2010.9286C17.3569%2012.3429%2014.7854%2013.5%2011.5711%2013.5C8.35686%2013.5%205.78544%2012.3429%205.78544%2010.9286M11.4426%201.92859C9.94021%201.00143%208.19143%200.553025%206.42829%200.642876C3.22686%200.642876%200.642578%201.80002%200.642578%203.2143C0.642578%203.97288%201.38829%204.6543%202.57115%205.14288'%20stroke='%231D1E21'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.57115%2012.8572C1.38829%2012.3686%200.642578%2011.6872%200.642578%2010.9286V3.21436'%20stroke='%231D1E21'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.57115%208.99998C1.38829%208.51141%200.642578%207.82998%200.642578%207.07141'%20stroke='%231D1E21'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_20_6632'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",b="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.75%2015C15.75%2013.6935%2014.4975%2012.5827%2012.75%2012.1702M11.25%2015C11.25%2013.3425%209.2355%2012%206.75%2012C4.2645%2012%202.25%2013.3425%202.25%2015M11.25%209.75C12.0456%209.75%2012.8087%209.43393%2013.3713%208.87132C13.9339%208.30871%2014.25%207.54565%2014.25%206.75C14.25%205.95435%2013.9339%205.19129%2013.3713%204.62868C12.8087%204.06607%2012.0456%203.75%2011.25%203.75M6.75%209.75C5.95435%209.75%205.19129%209.43393%204.62868%208.87132C4.06607%208.30871%203.75%207.54565%203.75%206.75C3.75%205.95435%204.06607%205.19129%204.62868%204.62868C5.19129%204.06607%205.95435%203.75%206.75%203.75C7.54565%203.75%208.30871%204.06607%208.87132%204.62868C9.43393%205.19129%209.75%205.95435%209.75%206.75C9.75%207.54565%209.43393%208.30871%208.87132%208.87132C8.30871%209.43393%207.54565%209.75%206.75%209.75Z'%20stroke='%231D1E21'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",v=p.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 20px 0;

  li {
    a {
      border: 1px solid var(--btn-disabled-box);
      border-radius: 8px;
      padding: 14px;
      width: 158px;
      height: 98px;
      background: var(--background-3);

      div {
        display: flex;
        gap: 8px;
        margin-bottom: 32px;

        img {
          width: 18px;
          height: 18px;
        }
        h3 {
          font-weight: 400;
          font-size: 12px;
          line-height: 117%;
          color: var(--btn-disabled-text);
        }
      }

      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 125%;
        color: var(--primary-color);
      }
      &:hover {
        border: 1px solid var(--accent);
      }
    }
  }
`,E=()=>{const t=a(m);return e.jsxs(v,{children:[e.jsx("li",{children:e.jsxs("a",{children:[e.jsxs("div",{children:[e.jsx("img",{src:d,alt:"products"}),e.jsx("h3",{children:"All products"})]}),e.jsx("p",{children:"111"})]})}),e.jsx("li",{children:e.jsxs("a",{children:[e.jsxs("div",{children:[e.jsx("img",{src:d,alt:"suppliers"}),e.jsx("h3",{children:"All suppliers"})]}),e.jsx("p",{children:"222"})]})}),e.jsx("li",{children:e.jsxs("a",{children:[e.jsxs("div",{children:[e.jsx("img",{src:b,alt:"customers"}),e.jsx("h3",{children:"All customers"})]}),e.jsx("p",{children:t})]})})]})},D=()=>e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(w,{}),e.jsx(C,{})]});export{D as default};
