import { intl } from '@/utils/intl';
import { PlusOutlined } from '@ant-design/icons';
import { useRequest, useUpdateEffect } from 'ahooks';
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Tooltip,
  message,
} from 'antd';
import type { FormInstance } from 'antd/lib/form';

import AddNSModal from '@/components/customModal/AddNSModal';
import { getNameSpaces } from '@/services';
import copy from 'copy-to-clipboard';
import { useState } from 'react';
import PasswordInput from '@/components/PasswordInput';
import {
  generateRandomPassword,
  passwordRules,
  resourceNameRule,
} from './helper';
import styles from './index.less';

interface BasicInfoProps {
  form: FormInstance<any>;
  passwordVal: string;
  setPasswordVal: React.Dispatch<React.SetStateAction<string>>;
}

export default function BasicInfo({
  form,
  passwordVal,
  setPasswordVal,
}: BasicInfoProps) {
  // control the modal for adding a new namespace
  const [visible, setVisible] = useState(false);
  const { data, run: getNS } = useRequest(getNameSpaces);
  const CLUSTER_MODE = [
    {
      value:'NORMAL',
      label:'常规模式'
    },
    {
      value:'STANDLONE',
      label:"单体模式"
    },
    {
      value:'SERVICE',
      label:'Service模式'
    }
  ]

  const filterOption = (
    input: string,
    option: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  const DropDownComponent = (menu: any) => {
    return (
      <div>
        {menu}
        <Divider style={{ margin: '10px 0' }} />
        <div
          onClick={() => setVisible(true)}
          style={{ padding: '8px', cursor: 'pointer' }}
        >
          <PlusOutlined />
          <span style={{ marginLeft: '6px' }}>
            {intl.formatMessage({
              id: 'OBDashboard.Cluster.New.BasicInfo.AddNamespace',
              defaultMessage: '新增命名空间',
            })}
          </span>
        </div>
      </div>
    );
  };

  const addNSCallback = (newNS:string)=>{
    form.setFieldValue('namespace',newNS)
    form.validateFields(['namespace'])
    getNS()
  }

  return (
    <Col span={24}>
      <Card
        title={intl.formatMessage({
          id: 'dashboard.Cluster.New.BasicInfo.BasicInformation',
          defaultMessage: '基本信息',
        })}
      >
        <Row gutter={[16, 32]}>
          <Col span={8} style={{ height: 48 }}>
            <Form.Item
              label={intl.formatMessage({
                id: 'OBDashboard.Cluster.New.BasicInfo.Namespace',
                defaultMessage: '命名空间',
              })}
              name="namespace"
              validateTrigger="onBlur"
              validateFirst
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({
                    id: 'OBDashboard.Cluster.New.BasicInfo.EnterANamespace',
                    defaultMessage: '请输入命名空间',
                  }),
                  validateTrigger: 'onChange',
                },
                resourceNameRule,
              ]}
            >
              <Select
                showSearch
                placeholder={intl.formatMessage({
                  id: 'OBDashboard.Cluster.New.BasicInfo.PleaseSelect',
                  defaultMessage: '请选择',
                })}
                optionFilterProp="label"
                filterOption={filterOption}
                dropdownRender={DropDownComponent}
                options={data}
              />
            </Form.Item>
          </Col>
          <Col span={8} style={{ height: 48 }}>
              <PasswordInput 
                value={passwordVal}
                onChange={setPasswordVal}
                form={form}
                name='rootPassword'
              />
          </Col>
          <Col span={8} style={{ height: 48 }}>
            <Tooltip
              color="#fff"
              overlayInnerStyle={{ color: 'rgba(0,0,0,.85)' }}
              overlayClassName={styles.toolTipContent}
              placement="topLeft"
              title={intl.formatMessage({
                id: 'OBDashboard.Cluster.New.BasicInfo.TheNameOfTheResource',
                defaultMessage: 'k8s中资源的名称',
              })}
            >
              <Form.Item
                label={intl.formatMessage({
                  id: 'OBDashboard.Cluster.New.BasicInfo.ResourceName',
                  defaultMessage: '资源名称',
                })}
                name="name"
                validateTrigger="onChange"
                validateFirst
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({
                      id: 'OBDashboard.Cluster.New.BasicInfo.EnterAKSResource',
                      defaultMessage: '请输入k8s资源名称',
                    }),
                  },
                  resourceNameRule,
                ]}
              >
                <Input
                  placeholder={intl.formatMessage({
                    id: 'OBDashboard.Cluster.New.BasicInfo.EnterAResourceName',
                    defaultMessage: '请输入资源名',
                  })}
                />
              </Form.Item>
            </Tooltip>
          </Col>

          <Col span={8} style={{ height: 72 }}>
            <Form.Item
              label={intl.formatMessage({
                id: 'OBDashboard.Cluster.New.BasicInfo.ClusterName',
                defaultMessage: '集群名',
              })}
              name="clusterName"
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({
                    id: 'OBDashboard.Cluster.New.BasicInfo.EnterAClusterName',
                    defaultMessage: '请输入集群名',
                  }),
                },
              ]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'OBDashboard.Cluster.New.BasicInfo.EnterAClusterName',
                  defaultMessage: '请输入集群名',
                })}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
                <Form.Item
                  label="集群模式"
                  name='mode'
                  rules={[
                    {
                      required:true,
                      message:'请选择集群模式'
                    }
                  ]}
                >
                  <Select 
                    placeholder="请选择"
                    options={CLUSTER_MODE}
                  />
                </Form.Item>
          </Col>
        </Row>
      </Card>
      <AddNSModal
        visible={visible}
        setVisible={setVisible}
        successCallback={addNSCallback}
      />
    </Col>
  );
}
