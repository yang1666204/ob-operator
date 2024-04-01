"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[7054],{236:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(4848),t=o(8453);const a={},i="Manage replicas",s={id:"manual/ob-operator-user-guide/tenant-management-of-ob-operator/modify-tenant-of-ob-operator/replica-management-of-ob-operator",title:"Manage replicas",description:"This topic describes how to manage tenant replicas by using ob-operator.",source:"@site/docs/manual/500.ob-operator-user-guide/200.tenant-management-of-ob-operator/200.modify-tenant-of-ob-operator/200.replica-management-of-ob-operator.md",sourceDirName:"manual/500.ob-operator-user-guide/200.tenant-management-of-ob-operator/200.modify-tenant-of-ob-operator",slug:"/manual/ob-operator-user-guide/tenant-management-of-ob-operator/modify-tenant-of-ob-operator/replica-management-of-ob-operator",permalink:"/ob-operator/docs/manual/ob-operator-user-guide/tenant-management-of-ob-operator/modify-tenant-of-ob-operator/replica-management-of-ob-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/manual/500.ob-operator-user-guide/200.tenant-management-of-ob-operator/200.modify-tenant-of-ob-operator/200.replica-management-of-ob-operator.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{},sidebar:"manualSidebar",previous:{title:"Manage resources",permalink:"/ob-operator/docs/manual/ob-operator-user-guide/tenant-management-of-ob-operator/modify-tenant-of-ob-operator/resource-management-of-ob-operator"},next:{title:"Modify other parameters",permalink:"/ob-operator/docs/manual/ob-operator-user-guide/tenant-management-of-ob-operator/modify-tenant-of-ob-operator/other-configuration-item-modifications-of-ob-operator"}},l={},c=[{value:"Modify the primary zone of a tenant",id:"modify-the-primary-zone-of-a-tenant",level:2},{value:"Procedure",id:"procedure",level:3},{value:"Modify the locality of a tenant",id:"modify-the-locality-of-a-tenant",level:2},{value:"Add replicas",id:"add-replicas",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Procedure",id:"procedure-1",level:3},{value:"Delete replicas",id:"delete-replicas",level:2},{value:"Procedure",id:"procedure-2",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"manage-replicas",children:"Manage replicas"}),"\n",(0,r.jsx)(n.p,{children:"This topic describes how to manage tenant replicas by using ob-operator."}),"\n",(0,r.jsx)(n.h2,{id:"modify-the-primary-zone-of-a-tenant",children:"Modify the primary zone of a tenant"}),"\n",(0,r.jsxs)(n.p,{children:["You can modify the ",(0,r.jsx)(n.code,{children:"priority"})," parameter of zones in the tenant configuration file to modify the primary zone of a tenant. A larger number indicates a higher priority. The minimum value is ",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The primary zone describes the preferred location of the leader. The leader handles strong-consistency read traffic and write traffic of the business. Therefore, the primary zone determines the traffic distribution of OceanBase Database. You can modify the primary zone to switch business traffic from one IDC to another or from one city to another in disaster recovery and scaling scenarios."}),"\n",(0,r.jsx)(n.h3,{id:"procedure",children:"Procedure"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Modify the tenant configuration file ",(0,r.jsx)(n.code,{children:"tenant.yaml"})," to adjust the priority value for each zone."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- zone: zone1\n  priority: 1\n- zone: zone2\n  priority: 1\n- zone: zone3\n  priority: 3\n\n# After modification\n- zone: zone1\n  priority: 3\n- zone: zone2\n  @priority 2\n- zone: zone3\n  priority: 1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The preceding configuration changes the primary zone of the tenant from ",(0,r.jsx)(n.code,{children:"zone3;zone1,zone2"})," to ",(0,r.jsx)(n.code,{children:"zone1;zone2;zone3"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command for the modification to take effect:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f tenant.yaml\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to view the custom resources of the tenant in the current Kubernetes cluster to check whether the modification is successful:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get obtenants.oceanbase.oceanbase.com -n oceanbase -o yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If the value of the corresponding parameter in the ",(0,r.jsx)(n.code,{children:"status.resourcePool.priority"})," section in the custom resources of the tenant is changed to the new value, the modification is successful."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"status:\n  ...\n  resourcePool:\n    - zone: zone1\n      priority: 3\n    - zone: zone2\n      @priority 2\n    - zone: zone3\n      priority: 1\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also run the following command to view the result."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get obtenants.oceanbase.oceanbase.com -n oceanbase -o wide\n"})}),"\n",(0,r.jsx)(n.p,{children:"The command output is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"NAME   STATUS    TENANTNAME   TENANTROLE   CLUSTERNAME   AGE   LOCALITY   PRIMARYZONE           POOLLIST    CHARSET\nt1     running   t1           PRIMARY      obcluster     13m   ...        zone1;zone2;zone3     ...         utf8mb4\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The result shows that the value of the ",(0,r.jsx)(n.code,{children:"PRIMARYZONE"})," field is modified to ",(0,r.jsx)(n.code,{children:"zone1;zone2;zone3"}),", which matches the priority configuration."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"modify-the-locality-of-a-tenant",children:"Modify the locality of a tenant"}),"\n",(0,r.jsxs)(n.p,{children:["To modify the locality of a tenant, you can modify the parameters in the ",(0,r.jsx)(n.code,{children:"type"})," section to specify the replica type and the number of replicas. The following replica types are supported: ",(0,r.jsx)(n.code,{children:"full"}),", ",(0,r.jsx)(n.code,{children:"logonly"}),", and ",(0,r.jsx)(n.code,{children:"readonly"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For more information, see [Modify the primary zone of a tenant](# Modify the primary zone of a tenant)."}),"\n",(0,r.jsxs)(n.p,{children:["Modify the tenant configuration file ",(0,r.jsx)(n.code,{children:"tenant.yaml"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:" type:\n    name: Full # The Full and Readonly replica types are supported.\n    replica: 1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"add-replicas",children:"Add replicas"}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You have added a zone to the cluster. For more information, see ",(0,r.jsx)(n.a,{href:"/ob-operator/docs/manual/ob-operator-user-guide/cluster-management-of-ob-operator/zone-management/add-zone",children:"Add zones to a cluster"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"procedure-1",children:"Procedure"}),"\n",(0,r.jsxs)(n.p,{children:["You can add zones to a tenant by modifying the tenant configuration file ",(0,r.jsx)(n.code,{children:"tenant.yaml"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Assume that the current cluster has four zones, ",(0,r.jsx)(n.code,{children:"zone1"}),", ",(0,r.jsx)(n.code,{children:"zone2"}),", ",(0,r.jsx)(n.code,{children:"zone3"}),", and ",(0,r.jsx)(n.code,{children:"zone4"}),", the zones corresponding to the tenant are ",(0,r.jsx)(n.code,{children:"zone1"}),", ",(0,r.jsx)(n.code,{children:"zone2"}),", and ",(0,r.jsx)(n.code,{children:"zone3"}),", and you want to scale out the tenant to four zones."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Modify the configuration file ",(0,r.jsx)(n.code,{children:"tenant.yaml"})," to add ",(0,r.jsx)(n.code,{children:"zone4"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# For example, the tenant has three zones.\npools:\n  - zone: zone1\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n  - zone: zone2\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n  - zone: zone3\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n\n# Add zone4 to the tenant.\npools:\n  - zone: zone1\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n  - zone: zone2\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n  - zone: zone3\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n  - zone: zone4\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command for the modification to take effect:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f tenant.yaml\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to view the custom resources of the tenant in the current Kubernetes cluster:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get obtenants.oceanbase.oceanbase.com -n oceanbase -o wide\n"})}),"\n",(0,r.jsx)(n.p,{children:"The following command output shows that the value of the LOCALITY field is as expected:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"NAME   STATUS    TENANTNAME   TENANTROLE   CLUSTERNAME   AGE   LOCALITY                                                       PRIMARYZONE           POOLLIST    CHARSET\nt1     running   t1           PRIMARY      obcluster     19m   FULL{1}@zone1,FULL{1}@zone2,FULL{1}@zone3,FULL{1}@zone4        ...                   ...         utf8mb4\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"delete-replicas",children:"Delete replicas"}),"\n",(0,r.jsx)(n.h3,{id:"procedure-2",children:"Procedure"}),"\n",(0,r.jsxs)(n.p,{children:["You can modify the tenant configuration file ",(0,r.jsx)(n.code,{children:"tenant.yaml"})," to delete zones from a tenant."]}),"\n",(0,r.jsxs)(n.p,{children:["Assume that the current cluster has four zones, ",(0,r.jsx)(n.code,{children:"zone1"}),", ",(0,r.jsx)(n.code,{children:"zone2"}),", ",(0,r.jsx)(n.code,{children:"zone3"}),", and ",(0,r.jsx)(n.code,{children:"zone4"}),", the zones corresponding to the tenant are ",(0,r.jsx)(n.code,{children:"zone1"}),", ",(0,r.jsx)(n.code,{children:"zone2"}),", ",(0,r.jsx)(n.code,{children:"zone3"}),", and ",(0,r.jsx)(n.code,{children:"zone4"}),", and you want to scale in the tenant to ",(0,r.jsx)(n.code,{children:"zone1"}),", ",(0,r.jsx)(n.code,{children:"zone2"}),", and ",(0,r.jsx)(n.code,{children:"zone3"}),"."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Modify the configuration file ",(0,r.jsx)(n.code,{children:"tenant.yaml"})," to delete ",(0,r.jsx)(n.code,{children:"zone4"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# For example, the tenant has four zones.\npools:\n  - zone: zone1\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n  - zone: zone2\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n  - zone: zone3\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n  - zone: zone4\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n\n# Delete zone4 from the tenant.\npools:\n  - zone: zone1\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n  - zone: zone2\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n  - zone: zone3\n    unitNum: 1\n    type:\n      name: Full\n      replica: 1\n    priority: 3\n    resource:\n      ...\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command for the modification to take effect:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f tenant.yaml\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to view the custom resources of the tenant in the current Kubernetes cluster:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"kubectl get obtenants.oceanbase.oceanbase.com -n oceanbase -o wide\n"})}),"\n",(0,r.jsx)(n.p,{children:"The following command output shows that the value of the LOCALITY field is as expected:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"NAME   STATUS    TENANTNAME   TENANTROLE   CLUSTERNAME   AGE   LOCALITY                                     PRIMARYZONE     POOLLIST    CHARSET\nt1     running   t1           PRIMARY      obcluster     25m   FULL{1}@zone1,FULL{1}@zone2,FULL{1}@zone3    ...             ...         utf8mb4\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>s});var r=o(6540);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);