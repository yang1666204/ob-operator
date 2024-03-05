import { intl } from '@/utils/intl';
import type { TableProps } from 'antd';
import { Table, Tooltip } from 'antd';

interface JobTableProps {
  dataSource: API.BackupJob[];
  curSelect: API.JobType;
}

const getColumns = (
  curSelect: API.JobType,
): TableProps<API.BackupJob>['columns'] => {
  return [
    {
      title: '任务名称',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
      render: (value) => {
        return (
          <Tooltip placement="topLeft" title={value}>
            <span>{value}</span>
          </Tooltip>
        );
      },
    },
    {
      title: intl.formatMessage({
        id: 'Dashboard.Detail.Backup.JobTable.StartTime',
        defaultMessage: '开始时间',
      }),
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: curSelect === 'ARCHIVE' ? '截止时间' : '结束时间',
      dataIndex: 'endTime',
      key: 'endTime',
    },
    {
      title: '路径',
      dataIndex: 'path',
      key: 'path',
      ellipsis: true,
      render: (value) => {
        return (
          <Tooltip placement="topLeft" title={value}>
            <span>{value}</span>
          </Tooltip>
        );
      },
    },
    {
      title: '资源状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '任务状态',
      dataIndex: 'statusInDatabase',
      key: 'statusInDatabase',
    },
    // {
    //   title: intl.formatMessage({
    //     id: 'Dashboard.Detail.Backup.JobTable.Type',
    //     defaultMessage: '类型',
    //   }),
    //   dataIndex: 'type',
    //   key: 'type',
    // },
    // {
    //   title: intl.formatMessage({
    //     id: 'Dashboard.Detail.Backup.JobTable.EncryptedPassword',
    //     defaultMessage: '加密密码',
    //   }),
    //   dataIndex: 'encryptionSecret',
    //   key: 'encryptionSecret',
    // },
  ];
};

export default function JobTable({ dataSource, curSelect }: JobTableProps) {
  return <Table columns={getColumns(curSelect)} dataSource={dataSource} />;
}
