import { getNSName } from '@/pages/Cluster/Detail/Overview/helper';
import TopoComponent from '@/pages/Cluster/Detail/Topo';
import { getTenant } from '@/services/tenant';
import { useRequest } from 'ahooks';
import BasicInfo from '../Overview/BasicInfo';

export default function Topo() {
  const [ns, name] = getNSName();
  const { data: tenantResponse } = useRequest(getTenant, {
    defaultParams: [{ ns, name }],
  });
  const tenantTopoData = tenantResponse?.data;
  return (
    <div>
      {tenantTopoData && (
        <TopoComponent
          tenantTopoData={tenantTopoData.replicas}
          HeaderComp={
            <BasicInfo
              info={tenantTopoData.info}
              source={tenantTopoData.source}
              style={{backgroundColor:'rgb(245, 248, 254)'}}
            />
          }
        />
      )}
    </div>
  );
}
