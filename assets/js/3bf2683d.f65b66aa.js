"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[1195],{6191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(4848),s=r(8453);const o={},a="Architecture",i={id:"developer/arch",title:"Architecture",description:"This document does not cover the architecture and instructions for managing the OceanBase database itself. If you want to learn more, please refer to the official documentation.",source:"@site/docs/developer/arch.md",sourceDirName:"developer",slug:"/developer/arch",permalink:"/ob-operator/docs/developer/arch",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/ob-operator/tree/master/docsite/docs/developer/arch.md",tags:[],version:"current",frontMatter:{},sidebar:"developerSidebar",next:{title:"Contributor Guidance",permalink:"/ob-operator/docs/developer/contributor-guidance"}},l={},c=[{value:"Custom Resources",id:"custom-resources",level:2},{value:"Resource Manager",id:"resource-manager",level:2},{value:"Task flow and global task manager",id:"task-flow-and-global-task-manager",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsxs)(t.p,{children:["This document does not cover the architecture and instructions for managing the OceanBase database itself. If you want to learn more, please refer to the ",(0,n.jsx)(t.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-1000000000217922",children:"official documentation"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["ob-operator follows the ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/",children:"Operator pattern of Kubernetes"}),", focusing on custom resources and their control logic. It is developed based on the Kubernetes Operator development framework, ",(0,n.jsx)(t.a,{href:"https://book.kubebuilder.io/introduction",children:"kubebuilder@v3"}),", making its underlying architecture similar to ",(0,n.jsx)(t.a,{href:"https://book.kubebuilder.io/architecture",children:"that of kubebuilder"}),". By globally registering a Controller Manager from the Kubernetes control plane and overseeing multiple controllers and webhooks, ob-operator controls custom resources like OBCluster and OBTenant etc."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Controllers respond to specific events of specific resources and align the actual state (Status) with the desired state (Spec) based on implemented logic."}),"\n",(0,n.jsx)(t.li,{children:"Webhooks serve two functions: setting default values and performing resource validation. These tasks are accomplished by the Defaulter and Validator, respectively. Resource validation prevents unexpected resources from being installed in the cluster, ensuring proper scheduling by ob-operator. For example, if a specified cluster does not exist when creating a tenant, an error is thrown when applying the resource, rather than informing the user through events or logs halfway through the scheduling process."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"custom-resources",children:"Custom Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"OBCluster: Represents an OceanBase cluster."}),"\n",(0,n.jsx)(t.li,{children:"OBZone: Represents an OceanBase zone that belongs to an OBCluster."}),"\n",(0,n.jsx)(t.li,{children:"OBServer: Represents an OceanBase observer resource that belongs to an OBZone."}),"\n",(0,n.jsx)(t.li,{children:"OBParameter: Represents cluster parameters."}),"\n",(0,n.jsx)(t.li,{children:"OBTenant: Represents a tenant in the OceanBase cluster, which belongs to an OBCluster."}),"\n",(0,n.jsx)(t.li,{children:"OBTenantBackupPolicy: Represents a scheduling backup policy for a tenant."}),"\n",(0,n.jsx)(t.li,{children:"OBTenantBackup: Represents a backup task for a tenant."}),"\n",(0,n.jsx)(t.li,{children:"OBTenantRestore: Represents a restore task for a tenant."}),"\n",(0,n.jsx)(t.li,{children:"OBTenantOperation: Represents operational tasks for a tenant."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"resource-manager",children:"Resource Manager"}),"\n",(0,n.jsx)(t.p,{children:"Each resource is uniformly scheduled by its corresponding resource manager, and each resource manager implements the ResourceManager interface, which is defined as follows. It includes methods for resource initialization, resource status updates, resource task retrieval, error message output, and resource deletion operations."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"type ResourceManager interface {\n  IsNewResource() bool\n  IsDeleting() bool\n  CheckAndUpdateFinalizers() error\n  InitStatus()\n  SetOperationContext(*v1alpha1.OperationContext)\n  ClearTaskInfo()\n  HandleFailure()\n  FinishTask()\n  UpdateStatus() error\n  GetStatus() string\n  GetTaskFunc(string) (func() error, error)\n  GetTaskFlow() (*task.TaskFlow, error)\n  PrintErrEvent(error)\n  ArchiveResource()\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"The ResourceManager follows a typical state machine model to schedule resources, and the general workflow for resource scheduling is as follows:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["If it is a new resource, initialize its status field ",(0,n.jsx)(t.code,{children:"status.status"}),".\nRetrieve the corresponding ",(0,n.jsx)(t.code,{children:"task flow"})," based on the resource status."]}),"\n",(0,n.jsxs)(t.li,{children:["If the retrieved task flow is not empty, store it in the ",(0,n.jsx)(t.code,{children:"status.operationContext"})," field of the resource and periodically poll the task status at shorter intervals."]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If there are pending tasks, submit them to the task manager and set the tasks to ",(0,n.jsx)(t.code,{children:"Pending"})," status while polling their status.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If the tasks are successful, proceed to the next task or set the resource to the next state."}),"\n",(0,n.jsx)(t.li,{children:"If the tasks fail, choose to retry or set the resource to an error state."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"If the retrieved task flow is empty, it indicates that the current resource is running normally without any changes. In this case, re-enqueue the resource with a longer interval."}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Process and respond to deletion signals for the resource."}),"\n",(0,n.jsxs)(t.li,{children:["Update the resource status (including fields like ",(0,n.jsx)(t.code,{children:"status.status"})," and ",(0,n.jsx)(t.code,{children:"status.operationContext"}),")."]}),"\n",(0,n.jsx)(t.li,{children:"Return the reconciliation result to the ControllerManager, mainly including the re-enqueue interval or error information."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"task-flow-and-global-task-manager",children:"Task flow and global task manager"}),"\n",(0,n.jsxs)(t.p,{children:["Kubernetes internally uses a control loop and message queue to collect and distribute events. Events are dispatched by the Kubernetes control plane to various Controller Managers, which then distribute them to the respective controllers for reconciliation. Each time a controller receives an event, it triggers the reconciliation process. To avoid potential race conditions, the number of worker threads in a controller is typically set to ",(0,n.jsx)(t.code,{children:"1"}),". This means that only one reconciliation task can be started after the previous one is completed. If a reconciliation task takes too long to complete, it may block the reconciliation of other events for the same type of resource. Therefore, the Operator pattern or resource scheduling mode in Kubernetes is generally not suitable for long-running tasks."]}),"\n",(0,n.jsx)(t.p,{children:"To address this issue, ob-operator adopts task flow mechanism and a global task manager to handle long-running tasks. A task flow consists of a list of tasks, the index of the currently executing task, and task status information. The global task manager includes two map structures:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Workset Map: TaskID -> chan Result, which represents the collection of tasks that are currently executing or have completed but the results have not been read."}),"\n",(0,n.jsx)(t.li,{children:"Result Cache Map: TaskID -> Result, which stores the results of completed tasks (success or failure)."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The relationship among the control loop, resource manager, and task manager is depicted in the following figure."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"The relationship among the control loop, resource manager, and task manager",src:r(2818).A+"",width:"4079",height:"2117"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2818:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ob-operator-arch-af746e5c9ef3dc1c9ce493fc38b54820.png"},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(6540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);