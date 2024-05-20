"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[9883],{7438:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var t=r(4848),a=r(8453);const n={sidebar_position:4},i="Upgrade",s={id:"manual/ob-operator-upgrade",title:"Upgrade",description:"This topic describes how to upgrade ob-operator.",source:"@site/docs/manual/400.ob-operator-upgrade.md",sourceDirName:"manual",slug:"/manual/ob-operator-upgrade",permalink:"/ob-operator/docs/manual/ob-operator-upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/ob-operator/tree/master/docsite/docs/manual/400.ob-operator-upgrade.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"manualSidebar",previous:{title:"Deploy",permalink:"/ob-operator/docs/manual/deploy-ob-operator"},next:{title:"Configure",permalink:"/ob-operator/docs/manual/configuration-of-ob-operator"}},p={},l=[{value:"Upgrade ob-operator by using Helm",id:"upgrade-ob-operator-by-using-helm",level:2},{value:"Upgrade ob-operator by using configuration files",id:"upgrade-ob-operator-by-using-configuration-files",level:2}];function u(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"upgrade",children:"Upgrade"}),"\n",(0,t.jsx)(o.p,{children:"This topic describes how to upgrade ob-operator."}),"\n",(0,t.jsx)(o.h2,{id:"upgrade-ob-operator-by-using-helm",children:"Upgrade ob-operator by using Helm"}),"\n",(0,t.jsxs)(o.p,{children:["For more information about the chart for upgrading ob-operator, visit ",(0,t.jsx)(o.a,{href:"https://atlassian.github.io/data-center-helm-charts/userguide/upgrades/HELM_CHART_UPGRADE/",children:"Helm chart upgrade"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"upgrade-ob-operator-by-using-configuration-files",children:"Upgrade ob-operator by using configuration files"}),"\n",(0,t.jsx)(o.p,{children:"If you upgrade ob-operator by using configuration files, you only need to reapply the configuration files of the new version of ob-operator. ob-operator is upgraded after it restarts."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Deploy the stable version of ob-operator"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/oceanbase/ob-operator/2.2.1_release/deploy/operator.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Deploy the developing version of ob-operator"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/oceanbase/ob-operator/master/deploy/operator.yaml\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,o,r)=>{r.d(o,{R:()=>i,x:()=>s});var t=r(6540);const a={},n=t.createContext(a);function i(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);