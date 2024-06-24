export default {
  '/api/v1/obtenants': {
    data: [
      {
        charset: 'string',
        clusterName: 'string',
        createTime: 'string',
        locality: 'string',
        name: 'string',
        namespace: 'string',
        status: 'string',
        tenantName: 'string',
        tenantRole: 'string',
        clusterResourceName: 'string',
        topology: [
          {
            iopsWeight: 0,
            logDiskSize: 'string',
            maxIops: 0,
            memorySize: 'string',
            cpuCount: 1,
            minIops: 0,
            priority: 0,
            type: 'string',
            zone: 'string',
          },
        ],
        unitNumber: 0,
      },
      {
        charset: 'string2',
        clusterName: 'string2',
        createTime: 'string2',
        locality: 'string2',
        name: 'string2',
        namespace: 'string',
        status: 'string2',
        tenantName: 'string2',
        tenantRole: 'string2',
        clusterResourceName: 'string',
        topology: [
          {
            iopsWeight: 0,
            logDiskSize: 'string2',
            maxIops: 0,
            memorySize: 'string2',
            cpuCount: 1,
            minIops: 0,
            priority: 0,
            type: 'string2',
            zone: 'string2',
          },
        ],
        unitNumber: 0,
      },
      {
        charset: 'string1',
        clusterName: 'string1',
        createTime: 'string1',
        locality: 'string1',
        name: 'string1',
        namespace: 'string1',
        status: 'string1',
        tenantName: 'string1',
        tenantRole: 'string1',
        clusterResourceName: 'string1',
        topology: [
          {
            iopsWeight: 0,
            logDiskSize: 'string1',
            maxIops: 0,
            memorySize: 'string1',
            cpuCount: 1,
            minIops: 0,
            priority: 0,
            type: 'string1',
            zone: 'string1',
          },
        ],
        unitNumber: 0,
      },
    ],
    message: 'string',
    successful: true,
  },
  '/api/v1/obtenants/test/test': {
    data: {
      charset: 'string',
      clusterName: 'string',
      createTime: 'string',
      locality: 'string',
      name: 'test',
      namespace: 'test',
      primaryTenant: 'string',
      restoreSource: {
        archiveSource: 'string',
        bakDataSource: 'string',
        bakEncryptionSecret: 'string',
        ossAccessSecret: 'string',
        type: 'string',
        until: 'string',
      },
      rootCredential: 'string',
      standbyROCredentail: 'string',
      status: 'string',
      tenantName: 'string',
      tenantRole: 'Primary',
      topology: [
        {
          iopsWeight: 0,
          logDiskSize: 'string',
          cpuCount: 1,
          maxIops: 0,
          memorySize: '1',
          minIops: 0,
          priority: 0,
          type: 'string',
          zone: 'zone1',
        },
      ],
      unitNumber: 0,
    },
    message: 'string',
    successful: true,
  },
  '/api/v1/obtenants/test/test/backupPolicy': {
    data: {
      archivePath: 'string',
      bakDataPath: 'string',
      bakEncryptionSecret: 'string',
      destType: 'string',
      jobKeepDays: 'string',
      name: 'string',
      namespace: 'string',
      ossAccessSecret: 'string',
      pieceIntervalDays: 'string',
      recoveryDays: 'string',
      scheduleDates: [
        {
          backupType: 'typea',
          day: 1,
        },
        {
          backupType: 'typeb',
          day: 2,
        },
        {
          backupType: 'typec',
          day: 3,
        },
      ],
      scheduleTime: 'string',
      scheduleType: 'string',
      status: 'string',
      tenantName: 'string',
    },
    message: 'string',
    successful: true,
  },
  '/api/v1/obtenants/test/test/backup/FULL/jobs': {
    data: [
      {
        encryptionSecret: 'FULL',
        endTime: 'FULL',
        name: 'FULL',
        path: 'FULL',
        startTime: 'FULL',
        status: 'FULL',
        statusInDatabase: 'FULL',
        type: 'FULL',
      },
    ],
    message: 'string',
    successful: true,
  },
  '/api/v1/obtenants/test/test/backup/INCR/jobs': {
    data: [
      {
        encryptionSecret: 'INCR',
        endTime: 'INCR',
        name: 'INCR',
        path: 'INCR',
        startTime: 'INCR',
        status: 'INCR',
        statusInDatabase: 'INCR',
        type: 'INCR',
      },
    ],
    message: 'string',
    successful: true,
  },
  '/api/v1/obtenants/test/test/backup/CLEAN/jobs': {
    data: [
      {
        encryptionSecret: 'CLEAN',
        endTime: 'CLEAN',
        name: 'CLEAN',
        path: 'CLEAN',
        startTime: 'CLEAN',
        status: 'CLEAN',
        statusInDatabase: 'CLEAN',
        type: 'CLEAN',
      },
    ],
    message: 'string',
    successful: true,
  },
  '/api/v1/obtenants/test/test/backup/ARCHIVE/jobs': {
    data: [
      {
        encryptionSecret: 'ARCHIVE',
        endTime: 'ARCHIVE',
        name: 'ARCHIVE',
        path: 'ARCHIVE',
        startTime: 'ARCHIVE',
        status: 'ARCHIVE',
        statusInDatabase: 'ARCHIVE',
        type: 'ARCHIVE',
      },
    ],
    message: 'string',
    successful: true,
  },
};
