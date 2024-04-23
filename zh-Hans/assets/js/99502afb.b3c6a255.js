"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[5141],{8680:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var a=o(4848),r=o(8453);const s={sidebar_position:3},t="ob-operator \u90e8\u7f72",c={id:"manual/deploy-ob-operator",title:"ob-operator \u90e8\u7f72",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72 ob-operator\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/manual/300.deploy-ob-operator.md",sourceDirName:"manual",slug:"/manual/deploy-ob-operator",permalink:"/ob-operator/zh-Hans/docs/manual/deploy-ob-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/ob-operator/tree/master/docsite/docs/manual/300.deploy-ob-operator.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"manualSidebar",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/ob-operator/zh-Hans/docs/manual/quick-start-of-ob-operator"},next:{title:"ob-operator \u5347\u7ea7",permalink:"/ob-operator/zh-Hans/docs/manual/ob-operator-upgrade"}},l={},i=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u4f7f\u7528 Helm \u90e8\u7f72",id:"\u4f7f\u7528-helm-\u90e8\u7f72",level:2},{value:"\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u90e8\u7f72",id:"\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u90e8\u7f72",level:2},{value:"\u67e5\u770b\u90e8\u7f72\u7ed3\u679c",id:"\u67e5\u770b\u90e8\u7f72\u7ed3\u679c",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"ob-operator-\u90e8\u7f72",children:"ob-operator \u90e8\u7f72"}),"\n",(0,a.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72 ob-operator\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,a.jsxs)(n.p,{children:["ob-operator \u4f9d\u8d56 cert-manager\u3002\u5728\u90e8\u7f72 ob-operator \u4e4b\u524d\uff0c\u786e\u4fdd\u60a8\u5df2\u5b89\u88c5 cert-manager\u3002cert-manager \u7684\u5b89\u88c5\u65b9\u6cd5\u8bf7\u53c2\u8003\u5bf9\u5e94\u7684 ",(0,a.jsx)(n.a,{href:"https://cert-manager.io/docs/installation/",children:"\u5b89\u88c5\u6587\u6863"}),"\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528-helm-\u90e8\u7f72",children:"\u4f7f\u7528 Helm \u90e8\u7f72"}),"\n",(0,a.jsxs)(n.p,{children:["ob-operator \u652f\u6301\u4f7f\u7528 Helm \u90e8\u7f72\u3002\u5728\u4f7f\u7528 Helm \u547d\u4ee4\u90e8\u7f72 ob-operator \u4e4b\u524d\uff0c\u786e\u4fdd\u60a8\u5df2\u5b89\u88c5 ",(0,a.jsx)(n.a,{href:"https://github.com/helm/helm",children:"Helm"}),"\u3002Helm \u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u90e8\u7f72 ob-operator\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"helm repo add ob-operator https://oceanbase.github.io/ob-operator/\nhelm install ob-operator ob-operator/ob-operator --namespace=oceanbase-system --create-namespace --version=2.1.0\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["namespace\uff1a\u547d\u540d\u7a7a\u95f4\uff0c\u53ef\u6839\u636e\u9700\u8981\u81ea\u5b9a\u4e49\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"oceanbase-system"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"version\uff1aob-operator \u7248\u672c\u53f7\uff0c\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7684\u7248\u672c\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u90e8\u7f72",children:"\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u90e8\u7f72"}),"\n",(0,a.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u90e8\u7f72 ob-operator\u3002\u6839\u636e\u60a8\u7684\u9700\u6c42\u9009\u62e9\u7a33\u5b9a\u7248\u672c\u6216\u5f00\u53d1\u7248\u672c\u7684\u914d\u7f6e\u6587\u4ef6\u3002"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u7a33\u5b9a\u7248\u672c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/oceanbase/ob-operator/2.1.0_release/deploy/operator.yaml\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5f00\u53d1\u7248\u672c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/oceanbase/ob-operator/master/deploy/operator.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u4e00\u822c\u5efa\u8bae\u4f7f\u7528\u7a33\u5b9a\u7248\u672c\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\u679c\u60a8\u60f3\u4f7f\u7528\u5f00\u53d1\u4e2d\u7684\u7248\u672c\uff0c\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u5f00\u53d1\u7684\u914d\u7f6e\u6587\u4ef6\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u67e5\u770b\u90e8\u7f72\u7ed3\u679c",children:"\u67e5\u770b\u90e8\u7f72\u7ed3\u679c"}),"\n",(0,a.jsx)(n.p,{children:"\u90e8\u7f72\u6210\u529f\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b CRD \u7684\u5b9a\u4e49\uff0c\u4ee5\u786e\u8ba4\u90e8\u7f72\u662f\u5426\u6210\u529f\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl get crds\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u8f93\u51fa\u4e0e\u4ee5\u4e0b\u793a\u4f8b\u76f8\u4f3c\uff0c\u5219\u8868\u793a\u90e8\u7f72\u6210\u529f\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"NAME                                            CREATED AT\nobparameters.oceanbase.oceanbase.com             2023-11-12T08:06:58Z\nobservers.oceanbase.oceanbase.com                2023-11-12T08:06:58Z\nobtenantbackups.oceanbase.oceanbase.com          2023-11-12T08:06:58Z\nobtenantrestores.oceanbase.oceanbase.com         2023-11-12T08:06:58Z\nobzones.oceanbase.oceanbase.com                  2023-11-12T08:06:58Z\nobtenants.oceanbase.oceanbase.com                2023-11-12T08:06:58Z\nobtenantoperations.oceanbase.oceanbase.com       2023-11-12T08:06:58Z\nobclusters.oceanbase.oceanbase.com               2023-11-12T08:06:58Z\nobtenantbackuppolicies.oceanbase.oceanbase.com   2023-11-12T08:06:58Z\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u786e\u8ba4 ob-operator \u90e8\u7f72\u6210\u529f\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"kubectl get pods -n oceanbase-system\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff0c\u5f53\u770b\u5230\u6240\u6709\u5bb9\u5668\u90fd ready \u65f6\u5e76\u4e14 status \u4e3a Running\uff0c \u5219\u8868\u793a\u90e8\u7f72\u6210\u529f\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"NAME                                            READY   STATUS    RESTARTS   AGE\noceanbase-controller-manager-86cfc8f7bf-4hfnj   2/2     Running   0          1m\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>c});var a=o(6540);const r={},s=a.createContext(r);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);