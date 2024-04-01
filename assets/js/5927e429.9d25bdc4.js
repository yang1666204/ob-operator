"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[4236],{5451:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=o(4848),r=o(8453);const a={},i="Develop ob-operator locally",s={id:"developer/develop-locally",title:"Develop ob-operator locally",description:"Tips: In this tutorial, we'll disable webhook validation and run manager controller on our laptop. The controller manager will communicate with kubernetes cluster by local .kube/config configuration file.",source:"@site/docs/developer/develop-locally.md",sourceDirName:"developer",slug:"/developer/develop-locally",permalink:"/ob-operator/docs/developer/develop-locally",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developer/develop-locally.md",tags:[],version:"current",frontMatter:{},sidebar:"developerSidebar",previous:{title:"Deploy ob-operator",permalink:"/ob-operator/docs/developer/deploy"},next:{title:"Developing ob-operator",permalink:"/ob-operator/docs/developer/development"}},l={},c=[{value:"Background",id:"background",level:2},{value:"Disable Webhook and CertManager",id:"disable-webhook-and-certmanager",level:2},{value:"Self-signed Certificate",id:"self-signed-certificate",level:2},{value:"Run locally",id:"run-locally",level:2},{value:"Debug locally",id:"debug-locally",level:2},{value:"Start debugging",id:"start-debugging",level:2},{value:"Debug in terminal",id:"debug-in-terminal",level:3},{value:"In VSCode",id:"in-vscode",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"develop-ob-operator-locally",children:"Develop ob-operator locally"}),"\n",(0,t.jsx)(n.p,{children:"Tips: In this tutorial, we'll disable webhook validation and run manager controller on our laptop. The controller manager will communicate with kubernetes cluster by local .kube/config configuration file."}),"\n",(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsxs)(n.p,{children:["ob-operator depends on ",(0,t.jsx)(n.a,{href:"https://kubebuilder.io/introduction",children:"kubebuilder"}),", an operator framework maintained by kubernetes SIGS. It offers convenient utilities to bootstrap an operator and manage API types in it. Like other operator frameworks, kubebuilder depends on kubernetes ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/controller-runtime",children:"controller runtime"})," either, which is an excellent reference to know how kubernetes dispatch events and reconcile resources."]}),"\n",(0,t.jsx)(n.h2,{id:"disable-webhook-and-certmanager",children:"Disable Webhook and CertManager"}),"\n",(0,t.jsxs)(n.p,{children:["There are many configuration items that marked by ",(0,t.jsx)(n.code,{children:"[CERTMANAGER]"})," and ",(0,t.jsx)(n.code,{children:"[WEBHOOK]"})," in the two files ",(0,t.jsx)(n.code,{children:"config/crd/kustomization.yaml"})," and ",(0,t.jsx)(n.code,{children:"config/default/kustomization.yaml"}),". They are used to enable and configure webhooks in real kubernetes deployment. Because we want to run controller manager locally, we need to disable them."]}),"\n",(0,t.jsxs)(n.p,{children:["You could just apply the latest ",(0,t.jsx)(n.code,{children:"deploy/operator.yaml"})," manifest and delete the following resources to deploy CRDs and make controller manager uninstalled."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl delete validatingwebhookconfigurations.admissionregistration.k8s.io oceanbase-validating-webhook-configuration\nkubectl delete mutatingwebhookconfigurations.admissionregistration.k8s.io oceanbase-mutating-webhook-configuration\nkubectl delete -n oceanbase-system svc oceanbase-webhook-service\nkubectl delete -n oceanbase-system deployments.apps oceanbase-controller-manager\n"})}),"\n",(0,t.jsx)(n.h2,{id:"self-signed-certificate",children:"Self-signed Certificate"}),"\n",(0,t.jsx)(n.p,{children:"It's necessary for node hosting controller manager to have a TLS certificate. In the real kubernetes cluster, the cert-manager will inject the sign into the controller manager pod. On our laptop, we need self-sign one:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"mkdir -p /tmp/k8s-webhook-server/serving-certs\nopenssl genrsa -out /tmp/k8s-webhook-server/serving-certs/tls.key 2048\nopenssl req -new -key /tmp/k8s-webhook-server/serving-certs/tls.key -out /tmp/k8s-webhook-server/serving-certs/tls.csr\nopenssl x509 -req -days 365 -in /tmp/k8s-webhook-server/serving-certs/tls.csr -signkey /tmp/k8s-webhook-server/serving-certs/tls.key -out /tmp/k8s-webhook-server/serving-certs/tls.crt\n"})}),"\n",(0,t.jsx)(n.h2,{id:"run-locally",children:"Run locally"}),"\n",(0,t.jsxs)(n.p,{children:["There are some useful commands in ",(0,t.jsx)(n.code,{children:"Makefile"})," and ",(0,t.jsx)(n.code,{children:"make/*.mk"}),", we could type ",(0,t.jsx)(n.code,{children:"make run-local"})," to start controller manager locally. Or redirect the output to a log file for better analytic experience,"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# print log to stdout\nmake run-local\n# or redirect output to a file\nmake run-local &> bin/run.log\n"})}),"\n",(0,t.jsx)(n.h2,{id:"debug-locally",children:"Debug locally"}),"\n",(0,t.jsxs)(n.p,{children:["Though print debugging is enough for most cases, there are quite some cases that are not obvious from printed information. We could debug with go debugging tool ",(0,t.jsx)(n.a,{href:"https://github.com/go-delve/delve",children:"delve"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"install-delve"})," command is declared in ",(0,t.jsx)(n.code,{children:"make/debug.mk"}),", we can type ",(0,t.jsx)(n.code,{children:"make install-delve"})," to get it. The help message of it can be glanced,"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"dlv help",children:"Delve is a source level debugger for Go programs.\n\nDelve enables you to interact with your program by controlling the execution of the process,\nevaluating variables, and providing information of thread / goroutine state, CPU register state and more.\n\nThe goal of this tool is to provide a simple yet powerful interface for debugging Go programs.\n\nPass flags to the program you are debugging using `--`, for example:\n\n`dlv exec ./hello -- server --config conf/config.toml`\n\nUsage:\n  dlv [command]\n\nAvailable Commands:\n  attach      Attach to running process and begin debugging.\n  completion  Generate the autocompletion script for the specified shell\n  connect     Connect to a headless debug server with a terminal client.\n  core        Examine a core dump.\n  dap         Starts a headless TCP server communicating via Debug Adaptor Protocol (DAP).\n  debug       Compile and begin debugging main package in current directory, or the package specified.\n  exec        Execute a precompiled binary, and begin a debug session.\n  help        Help about any command\n  test        Compile test binary and begin debugging program.\n  trace       Compile and begin tracing program.\n  version     Prints version.\n\nAdditional help topics:\n  dlv backend    Help about the --backend flag.\n  dlv log        Help about logging flags.\n  dlv redirect   Help about file redirection.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"start-debugging",children:"Start debugging"}),"\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"make run-delve"})," to start debugging server."]}),"\n",(0,t.jsx)(n.h3,{id:"debug-in-terminal",children:"Debug in terminal"}),"\n",(0,t.jsxs)(n.p,{children:["If you prefer to debug in terminal, with ",(0,t.jsx)(n.code,{children:"dlv connect 127.0.0.1:2345"})," command you can connect to the debugging server. After connecting, you enter a REPL environment of delve, available commands are showed below,"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(dlv) help\nThe following commands are available:\n\nRunning the program:\n    call ------------------------ Resumes process, injecting a function call (EXPERIMENTAL!!!)\n    continue (alias: c) --------- Run until breakpoint or program termination.\n    next (alias: n) ------------- Step over to next source line.\n    rebuild --------------------- Rebuild the target executable and restarts it. It does not work if the executable was not built by delve.\n    restart (alias: r) ---------- Restart process.\n    step (alias: s) ------------- Single step through program.\n    step-instruction (alias: si)  Single step a single cpu instruction.\n    stepout (alias: so) --------- Step out of the current function.\n\nManipulating breakpoints:\n    break (alias: b) ------- Sets a breakpoint.\n    breakpoints (alias: bp)  Print out info for active breakpoints.\n    clear ------------------ Deletes breakpoint.\n    clearall --------------- Deletes multiple breakpoints.\n    condition (alias: cond)  Set breakpoint condition.\n    on --------------------- Executes a command when a breakpoint is hit.\n    toggle ----------------- Toggles on or off a breakpoint.\n    trace (alias: t) ------- Set tracepoint.\n    watch ------------------ Set watchpoint.\n\nViewing program variables and memory:\n    args ----------------- Print function arguments.\n    display -------------- Print value of an expression every time the program stops.\n    examinemem (alias: x)  Examine raw memory at the given address.\n    locals --------------- Print local variables.\n    print (alias: p) ----- Evaluate an expression.\n    regs ----------------- Print contents of CPU registers.\n    set ------------------ Changes the value of a variable.\n    vars ----------------- Print package variables.\n    whatis --------------- Prints type of an expression.\n\nListing and switching between threads and goroutines:\n    goroutine (alias: gr) -- Shows or changes current goroutine\n    goroutines (alias: grs)  List program goroutines.\n    thread (alias: tr) ----- Switch to the specified thread.\n    threads ---------------- Print out info for every traced thread.\n\nViewing the call stack and selecting frames:\n    deferred --------- Executes command in the context of a deferred call.\n    down ------------- Move the current frame down.\n    frame ------------ Set the current frame, or execute command on a different frame.\n    stack (alias: bt)  Print stack trace.\n    up --------------- Move the current frame up.\n\nOther commands:\n    config --------------------- Changes configuration parameters.\n    disassemble (alias: disass)  Disassembler.\n    dump ----------------------- Creates a core dump from the current process state\n    edit (alias: ed) ----------- Open where you are in $DELVE_EDITOR or $EDITOR\n    exit (alias: quit | q) ----- Exit the debugger.\n    funcs ---------------------- Print list of functions.\n    help (alias: h) ------------ Prints the help message.\n    libraries ------------------ List loaded dynamic libraries\n    list (alias: ls | l) ------- Show source code.\n    packages ------------------- Print list of packages.\n    source --------------------- Executes a file containing a list of delve commands\n    sources -------------------- Print list of source files.\n    target --------------------- Manages child process debugging.\n    transcript ----------------- Appends command output to a file.\n    types ---------------------- Print list of types\n\nType help followed by a command for full documentation.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"in-vscode",children:"In VSCode"}),"\n",(0,t.jsxs)(n.p,{children:["If you are first to debugging in VSCode, enter ",(0,t.jsx)(n.code,{children:"Cmd+Shift+P"})," to open commands panel. Then, type ",(0,t.jsx)(n.code,{children:"Debug: Add Configuration..."})," and create debugging task for Go. After creating task successfully, open commands panel and type ",(0,t.jsx)(n.code,{children:"Debug: Start Debugging"}),"/",(0,t.jsx)(n.code,{children:"Debug: Select and Start Debugging"})," to start debugging."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Debug in VSCode",src:o(4361).A+"",width:"1500",height:"988"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4361:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/debug-in-vscode-e840b06a074b2381fab93973768f71ac.png"},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>s});var t=o(6540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);