/*
Copyright (c) 2023 OceanBase
ob-operator is licensed under Mulan PSL v2.
You can use this software according to the terms and conditions of the Mulan PSL v2.
You may obtain a copy of Mulan PSL v2 at:
         http://license.coscl.org.cn/MulanPSL2
THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
See the Mulan PSL v2 for more details.
*/

package operation

import (
	"context"
	"fmt"

	"github.com/pkg/errors"

	"github.com/oceanbase/ob-operator/pkg/oceanbase-sdk/const/sql"
)

func (m *OceanbaseOperationManager) CreateUser(ctx context.Context, userName string) error {
	err := m.ExecWithDefaultTimeout(ctx, sql.CreateUser, userName)
	if err != nil {
		m.Logger.Error(err, "Got exception when create user")
		return errors.Wrap(err, "Create user")
	}
	return nil
}

func (m *OceanbaseOperationManager) CreateUserWithPwd(ctx context.Context, username, password string) error {
	err := m.ExecWithDefaultTimeout(ctx, fmt.Sprintf(sql.CreateTenantUserWithPwd, username), password)
	if err != nil {
		m.Logger.Error(err, "Got exception when create user with password")
		return errors.Wrap(err, "Create user with password")
	}
	return nil
}

func (m *OceanbaseOperationManager) SetUserPassword(ctx context.Context, userName, password string) error {
	err := m.ExecWithDefaultTimeout(ctx, sql.SetUserPassword, userName, password)
	if err != nil {
		m.Logger.Error(err, "Got exception when set user password")
		return errors.Wrap(err, "Set user password")
	}
	return nil
}

func (m *OceanbaseOperationManager) GrantPrivilege(ctx context.Context, privilege, object, userName string) error {
	err := m.ExecWithDefaultTimeout(ctx, fmt.Sprintf(sql.GrantPrivilege, privilege, object), userName)
	if err != nil {
		m.Logger.Error(err, "Got exception when grant privilege user")
		return errors.Wrap(err, "Grant privilege to user")
	}
	return nil
}
