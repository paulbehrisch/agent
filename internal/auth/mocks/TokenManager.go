// Code generated by mockery v2.42.0. DO NOT EDIT.

package mocks

import (
	apiv1 "github.com/superblocksteam/agent/types/gen/go/api/v1"

	context "context"

	http "net/http"

	mock "github.com/stretchr/testify/mock"

	structpb "google.golang.org/protobuf/types/known/structpb"

	types "github.com/superblocksteam/agent/internal/auth/types"

	v1 "github.com/superblocksteam/agent/types/gen/go/plugins/common/v1"
)

// TokenManager is an autogenerated mock type for the TokenManager type
type TokenManager struct {
	mock.Mock
}

// AddTokenIfNeeded provides a mock function with given fields: ctx, datasourceConfig, redactedDatasourceConfig, _a3, datasourceId, configurationId, pluginId
func (_m *TokenManager) AddTokenIfNeeded(ctx context.Context, datasourceConfig *structpb.Struct, redactedDatasourceConfig *structpb.Struct, _a3 *v1.Auth, datasourceId string, configurationId string, pluginId string) (types.TokenPayload, error) {
	ret := _m.Called(ctx, datasourceConfig, redactedDatasourceConfig, _a3, datasourceId, configurationId, pluginId)

	if len(ret) == 0 {
		panic("no return value specified for AddTokenIfNeeded")
	}

	var r0 types.TokenPayload
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *structpb.Struct, *structpb.Struct, *v1.Auth, string, string, string) (types.TokenPayload, error)); ok {
		return rf(ctx, datasourceConfig, redactedDatasourceConfig, _a3, datasourceId, configurationId, pluginId)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *structpb.Struct, *structpb.Struct, *v1.Auth, string, string, string) types.TokenPayload); ok {
		r0 = rf(ctx, datasourceConfig, redactedDatasourceConfig, _a3, datasourceId, configurationId, pluginId)
	} else {
		r0 = ret.Get(0).(types.TokenPayload)
	}

	if rf, ok := ret.Get(1).(func(context.Context, *structpb.Struct, *structpb.Struct, *v1.Auth, string, string, string) error); ok {
		r1 = rf(ctx, datasourceConfig, redactedDatasourceConfig, _a3, datasourceId, configurationId, pluginId)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CheckAuth provides a mock function with given fields: ctx, integration, integrationId, configurationId, pluginId
func (_m *TokenManager) CheckAuth(ctx context.Context, integration *structpb.Struct, integrationId string, configurationId string, pluginId string) (*types.CheckAuthResponse, error) {
	ret := _m.Called(ctx, integration, integrationId, configurationId, pluginId)

	if len(ret) == 0 {
		panic("no return value specified for CheckAuth")
	}

	var r0 *types.CheckAuthResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *structpb.Struct, string, string, string) (*types.CheckAuthResponse, error)); ok {
		return rf(ctx, integration, integrationId, configurationId, pluginId)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *structpb.Struct, string, string, string) *types.CheckAuthResponse); ok {
		r0 = rf(ctx, integration, integrationId, configurationId, pluginId)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.CheckAuthResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *structpb.Struct, string, string, string) error); ok {
		r1 = rf(ctx, integration, integrationId, configurationId, pluginId)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ExchangeOauthCodeForToken provides a mock function with given fields: ctx, authType, authConfig, accessCode, integrationId, configurationId
func (_m *TokenManager) ExchangeOauthCodeForToken(ctx context.Context, authType string, authConfig *v1.OAuth_AuthorizationCodeFlow, accessCode string, integrationId string, configurationId string) error {
	ret := _m.Called(ctx, authType, authConfig, accessCode, integrationId, configurationId)

	if len(ret) == 0 {
		panic("no return value specified for ExchangeOauthCodeForToken")
	}

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, string, *v1.OAuth_AuthorizationCodeFlow, string, string, string) error); ok {
		r0 = rf(ctx, authType, authConfig, accessCode, integrationId, configurationId)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// FetchNewOauthPasswordToken provides a mock function with given fields: authConfig
func (_m *TokenManager) FetchNewOauthPasswordToken(authConfig *v1.OAuth_PasswordGrantFlow) (*types.Response, error) {
	ret := _m.Called(authConfig)

	if len(ret) == 0 {
		panic("no return value specified for FetchNewOauthPasswordToken")
	}

	var r0 *types.Response
	var r1 error
	if rf, ok := ret.Get(0).(func(*v1.OAuth_PasswordGrantFlow) (*types.Response, error)); ok {
		return rf(authConfig)
	}
	if rf, ok := ret.Get(0).(func(*v1.OAuth_PasswordGrantFlow) *types.Response); ok {
		r0 = rf(authConfig)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Response)
		}
	}

	if rf, ok := ret.Get(1).(func(*v1.OAuth_PasswordGrantFlow) error); ok {
		r1 = rf(authConfig)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Login provides a mock function with given fields: ctx, integration, req
func (_m *TokenManager) Login(ctx context.Context, integration *structpb.Struct, req *apiv1.LoginRequest) ([]*http.Cookie, bool, error) {
	ret := _m.Called(ctx, integration, req)

	if len(ret) == 0 {
		panic("no return value specified for Login")
	}

	var r0 []*http.Cookie
	var r1 bool
	var r2 error
	if rf, ok := ret.Get(0).(func(context.Context, *structpb.Struct, *apiv1.LoginRequest) ([]*http.Cookie, bool, error)); ok {
		return rf(ctx, integration, req)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *structpb.Struct, *apiv1.LoginRequest) []*http.Cookie); ok {
		r0 = rf(ctx, integration, req)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]*http.Cookie)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *structpb.Struct, *apiv1.LoginRequest) bool); ok {
		r1 = rf(ctx, integration, req)
	} else {
		r1 = ret.Get(1).(bool)
	}

	if rf, ok := ret.Get(2).(func(context.Context, *structpb.Struct, *apiv1.LoginRequest) error); ok {
		r2 = rf(ctx, integration, req)
	} else {
		r2 = ret.Error(2)
	}

	return r0, r1, r2
}

// NewTokenManager creates a new instance of TokenManager. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewTokenManager(t interface {
	mock.TestingT
	Cleanup(func())
}) *TokenManager {
	mock := &TokenManager{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}