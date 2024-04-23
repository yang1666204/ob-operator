"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[5488],{6260:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(4848),n=t(8453);const o={sidebar_position:2},a="Create a cluster",c={id:"manual/ob-operator-user-guide/cluster-management-of-ob-operator/create-cluster",title:"Create a cluster",description:"This topic describes how to create an OceanBase cluster by using ob-operator.",source:"@site/docs/manual/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/200.create-cluster.md",sourceDirName:"manual/500.ob-operator-user-guide/100.cluster-management-of-ob-operator",slug:"/manual/ob-operator-user-guide/cluster-management-of-ob-operator/create-cluster",permalink:"/ob-operator/docs/manual/ob-operator-user-guide/cluster-management-of-ob-operator/create-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/ob-operator/tree/master/docsite/docs/manual/500.ob-operator-user-guide/100.cluster-management-of-ob-operator/200.create-cluster.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"manualSidebar",previous:{title:"Manage clusters",permalink:"/ob-operator/docs/manual/ob-operator-user-guide/cluster-management-of-ob-operator/cluster-management-intro"},next:{title:"Zone management",permalink:"/ob-operator/docs/category/zone-management"}},i={},d=[{value:"Preparations before deployment",id:"preparations-before-deployment",level:2},{value:"Deploy OceanBase Database",id:"deploy-oceanbase-database",level:2},{value:"Create a namespace",id:"create-a-namespace",level:3},{value:"Create secrets for default users",id:"create-secrets-for-default-users",level:3},{value:"Define the OceanBase cluster",id:"define-the-oceanbase-cluster",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Annotations",id:"annotations",level:4},{value:"Create a cluster",id:"create-a-cluster-1",level:3},{value:"Connect to the cluster",id:"connect-to-the-cluster",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"create-a-cluster",children:"Create a cluster"}),"\n",(0,s.jsx)(r.p,{children:"This topic describes how to create an OceanBase cluster by using ob-operator."}),"\n",(0,s.jsx)(r.h2,{id:"preparations-before-deployment",children:"Preparations before deployment"}),"\n",(0,s.jsxs)(r.p,{children:["You must have deployed ob-operator in a Kubernetes cluster. For more information, see ",(0,s.jsx)(r.a,{href:"/ob-operator/docs/manual/deploy-ob-operator",children:"Deploy ob-operator"}),". Make sure that the Kubernetes cluster has an available storage class. We recommend that you use ",(0,s.jsx)(r.a,{href:"https://github.com/rancher/local-path-provisioner",children:"local-path-provisioner"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"deploy-oceanbase-database",children:"Deploy OceanBase Database"}),"\n",(0,s.jsx)(r.h3,{id:"create-a-namespace",children:"Create a namespace"}),"\n",(0,s.jsx)(r.p,{children:"Run the following command to create a namespace for deploying an OceanBase cluster."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"kubectl create namespace oceanbase\n"})}),"\n",(0,s.jsx)(r.h3,{id:"create-secrets-for-default-users",children:"Create secrets for default users"}),"\n",(0,s.jsx)(r.p,{children:"Run the following command to create secrets for specific users of the cluster."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"kubectl create secret -n oceanbase generic root-password --from-literal=password='root_password'\n"})}),"\n",(0,s.jsx)(r.h3,{id:"define-the-oceanbase-cluster",children:"Define the OceanBase cluster"}),"\n",(0,s.jsx)(r.p,{children:"You can use the YAML configuration file to define the OceanBase cluster. Here is an example:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:'apiVersion: oceanbase.oceanbase.com/v1alpha1\nkind: OBCluster\nmetadata:\n  name: test\n  namespace: oceanbase\n  annotations:\n    "oceanbase.oceanbase.com/independent-pvc-lifecycle": "true" \n    # "oceanbase.oceanbase.com/mode": "standalone" or "service"\n    # "oceanbase.oceanbase.com/single-pvc": "true" \nspec:\n  clusterName: obcluster\n  clusterId: 1\n  serviceAccount: "default"\n  userSecrets:\n    root: root-password\n  topology:\n    - zone: zone1\n      replica: 1\n      # nodeSelector:\n      #   k1: v1\n      # affinity:\n      #   nodeAffinity:\n      #   podAffinity:\n      #   podAntiAffinity:\n      # tolerations:\n      #   - key: "obtopo"\n      #     value: "zone"\n      #     effect: "NoSchedule"\n    - zone: zone2\n      replica: 1\n    - zone: zone3\n      replica: 1\n  observer:\n    image: oceanbase/oceanbase-cloud-native:4.2.0.0-101000032023091319\n    resource:\n      cpu: 2\n      memory: 10Gi\n    storage:\n      dataStorage:\n        storageClass: local-path\n        size: 50Gi\n      redoLogStorage:\n        storageClass: local-path\n        size: 50Gi\n      logStorage:\n        storageClass: local-path\n        size: 20Gi\n  monitor:\n    image: oceanbase/obagent:4.2.0-100000062023080210\n    resource:\n      cpu: 1\n      memory: 1Gi\n\n  # parameters:\n  #   - name: system_memory\n  #     value: 2G\n  # backupVolume:\n  #   volume:\n  #     name: backup\n  #     nfs:\n  #       server: 1.1.1.1\n  #       path: /opt/nfs\n  #       readOnly: false\n\n'})}),"\n",(0,s.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(r.p,{children:"The following table describes the parameters."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"metadata.name"}),(0,s.jsx)(r.td,{children:"Required. The name of the cluster, which is the name of resources in the Kubernetes cluster."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"metadata.namespace"}),(0,s.jsx)(r.td,{children:"Required. The namespace where the cluster resides."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.clusterName"}),(0,s.jsx)(r.td,{children:"Required. The name of the OceanBase cluster."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.clusterId"}),(0,s.jsx)(r.td,{children:"Required. The ID of the OceanBase cluster."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.serviceAccount"}),(0,s.jsx)(r.td,{children:"Optional. The service account that will be bound to OBServer pods."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.userSecrets"}),(0,s.jsx)(r.td,{children:"Required. The secrets of default users of the OceanBase cluster."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.userSecrets.root"}),(0,s.jsxs)(r.td,{children:["Required. The secret of the root@sys user in the OceanBase cluster. The secret must contain the ",(0,s.jsx)(r.code,{children:"password"})," keyword."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.userSecrets.proxyro"}),(0,s.jsxs)(r.td,{children:["Optional. The secret of the proxyro@sys user in the OceanBase cluster. The secret must contain the ",(0,s.jsx)(r.code,{children:"password"})," keyword."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.userSecrets.monitor"}),(0,s.jsxs)(r.td,{children:["Optional. The secret of the monitor@sys user in the OceanBase cluster. The secret must contain the ",(0,s.jsx)(r.code,{children:"password"})," keyword."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.userSecrets.operator"}),(0,s.jsxs)(r.td,{children:["Optional. The secret of the operator@sys user in the OceanBase cluster. The secret must contain the ",(0,s.jsx)(r.code,{children:"password"})," keyword."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.topology"}),(0,s.jsx)(r.td,{children:"Required. The definition of the topology of the OceanBase cluster, which contains the definition of each zone."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.topology[i].zone"}),(0,s.jsx)(r.td,{children:"Required. The name of the zone in the OceanBase cluster."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.topology[i].replica"}),(0,s.jsx)(r.td,{children:"Required. The number of OBServer nodes in the zone."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.topology[i].nodeSelector"}),(0,s.jsx)(r.td,{children:"Optional. Specifies the distribution of pods across the OBServer nodes in the zone. The value is in the mapping format. This parameter must be used with the labels of OBServer nodes."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.topology[i].affinity"}),(0,s.jsxs)(r.td,{children:["Specifies the affinity among the OBServer nodes in the zone. For more information, visit ",(0,s.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity",children:"kubernetes.io"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.topology[i].tolerations"}),(0,s.jsxs)(r.td,{children:["Specifies the toleration of OBServer nodes in the zone. For more information, visit ",(0,s.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",children:"kubernetes.io"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.observer.image"}),(0,s.jsx)(r.td,{children:"Required. The OBServer image of the OceanBase cluster."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.observer.resource"}),(0,s.jsx)(r.td,{children:"Required. The resource specifications of OBServer nodes."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.observer.resource.cpu"}),(0,s.jsx)(r.td,{children:"Required. The number of CPU cores for OBServer nodes."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.observer.resource.memory"}),(0,s.jsx)(r.td,{children:"Required. The memory size for OBServer nodes."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.observer.storage"}),(0,s.jsx)(r.td,{children:"Required. The storage size for OBServer nodes."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.observer.storage.dataStorage"}),(0,s.jsx)(r.td,{children:"Required. The data storage size for OBServer nodes."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.observer.storage.redoLogStorage"}),(0,s.jsx)(r.td,{children:"Required. The clog storage size for OBServer nodes."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.observer.storage.logStorage"}),(0,s.jsx)(r.td,{children:"Required. The runtime log storage size for OBServer nodes."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.observer.storage.*.storageClass"}),(0,s.jsx)(r.td,{children:"Required. The storage class required for creating a PersistentVolumeClaim (PVC). This parameter takes effect on storage configurations."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.observer.storage.*.size"}),(0,s.jsx)(r.td,{children:"Required. The size of the created PVC. This parameter takes effect on storage configurations."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.monitor"}),(0,s.jsx)(r.td,{children:"Optional. The monitoring configuration. We recommend that you enable this parameter. ob-operator uses obagent to collect monitoring data. You can connect ob-operator to Prometheus to monitor the status of the OceanBase cluster."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.monitor.image"}),(0,s.jsx)(r.td,{children:"Required. The image used for monitoring."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.monitor.resource"}),(0,s.jsx)(r.td,{children:"Required. The resources allocated to the monitoring container."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.monitor.resource.cpu"}),(0,s.jsx)(r.td,{children:"Required. The number of CPU cores allocated to the monitoring container."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.monitor.resource.memory"}),(0,s.jsx)(r.td,{children:"Required. The memory size allocated to the monitoring container."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.parameters"}),(0,s.jsx)(r.td,{children:"The optional custom parameter of the OceanBase cluster. This parameter takes effect globally in the cluster."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.parameters[i].name"}),(0,s.jsx)(r.td,{children:"Required. The name of the parameter."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.parameters[i].value"}),(0,s.jsx)(r.td,{children:"Required. The value of the parameter."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"spec.backupVolume"}),(0,s.jsx)(r.td,{children:"Optional. The backup storage for the OceanBase cluster. If you want to enable the backup feature and do not use Alibaba Cloud Object Storage Service (OSS) for backup storage, you need to specify this parameter. You can configure a Network File System (NFS) volume."})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"annotations",children:"Annotations"}),"\n",(0,s.jsxs)(r.p,{children:["The following table describes available annotations. For short, the annotation ",(0,s.jsx)(r.code,{children:"annotation"})," implies there is an ",(0,s.jsx)(r.code,{children:"oceanbase.oceanbase.com/"})," in front of it."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Annotation"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"independent-pvc-lifecycle"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"true"}),": Require ob-operator >= 2.1.1. PVCs won't be deleted even if the OBCluster is deleted."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"mode"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"standalone"}),": Require ob-operator >= 2.1.1 and observer version >= 4.2.0. Bootstrap the single-node cluster with 127.0.0.1, which cannot contact other nodes any more. ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:"service"}),": Require ob-operator >= 2.2.0 and observer version >= 4.2.3. Create a specific K8s service for each OBServer and use the service's ",(0,s.jsx)(r.code,{children:"ClusterIP"})," as the OBServer's IP address."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"single-pvc"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"true"}),": Require ob-operator >= 2.1.2. Create and bind a single PVC to a OBServer pod (three PVCs by default)."]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"create-a-cluster-1",children:"Create a cluster"}),"\n",(0,s.jsx)(r.p,{children:"After you save the configuration file, run the following command to create an OceanBase cluster in the Kubernetes cluster:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"kubectl apply -f obcluster.yaml\n"})}),"\n",(0,s.jsxs)(r.p,{children:["In general, it takes about 2 minutes to create a cluster. Run the following command to query the cluster status. If the cluster status changes to ",(0,s.jsx)(r.code,{children:"Running"}),", the cluster is created."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"kubectl get obclusters.oceanbase.oceanbase.com test -n oceanbase\n\n# desired output\nNAME   STATUS    AGE\ntest   running   6m2s\n"})}),"\n",(0,s.jsx)(r.h2,{id:"connect-to-the-cluster",children:"Connect to the cluster"}),"\n",(0,s.jsxs)(r.p,{children:["Run the following command to obtain the IP address of the pod for the server where the cluster is deployed. The pod name is in the ",(0,s.jsx)(r.code,{children:"{cluster_name}-{cluster_id}-{zone}-uuid"})," format."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"kubectl get pods -n oceanbase -o wide\n"})}),"\n",(0,s.jsx)(r.p,{children:"Run the following command to connect to the pod:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"mysql -h{POD_IP} -P2881 -uroot -proot_password oceanbase -A -c\n"})}),"\n",(0,s.jsx)(r.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,s.jsxs)(r.p,{children:["After the cluster is created, you must create a tenant for your business. For more information, see ",(0,s.jsx)(r.a,{href:"/ob-operator/docs/manual/ob-operator-user-guide/tenant-management-of-ob-operator/tenant-management-intro",children:"Manage tenants"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>c});var s=t(6540);const n={},o=s.createContext(n);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);