// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: superblocks/v1/options.proto

package v1

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on Integrations with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Integrations) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Integrations with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in IntegrationsMultiError, or
// nil if none found.
func (m *Integrations) ValidateAll() error {
	return m.validate(true)
}

func (m *Integrations) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Registry

	if len(errors) > 0 {
		return IntegrationsMultiError(errors)
	}

	return nil
}

// IntegrationsMultiError is an error wrapping multiple validation errors
// returned by Integrations.ValidateAll() if the designated constraints aren't met.
type IntegrationsMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m IntegrationsMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m IntegrationsMultiError) AllErrors() []error { return m }

// IntegrationsValidationError is the validation error returned by
// Integrations.Validate if the designated constraints aren't met.
type IntegrationsValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e IntegrationsValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e IntegrationsValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e IntegrationsValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e IntegrationsValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e IntegrationsValidationError) ErrorName() string { return "IntegrationsValidationError" }

// Error satisfies the builtin error interface
func (e IntegrationsValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sIntegrations.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = IntegrationsValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = IntegrationsValidationError{}

// Validate checks the field values on IntegrationOptions with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *IntegrationOptions) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on IntegrationOptions with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// IntegrationOptionsMultiError, or nil if none found.
func (m *IntegrationOptions) ValidateAll() error {
	return m.validate(true)
}

func (m *IntegrationOptions) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for PluginType

	if len(errors) > 0 {
		return IntegrationOptionsMultiError(errors)
	}

	return nil
}

// IntegrationOptionsMultiError is an error wrapping multiple validation errors
// returned by IntegrationOptions.ValidateAll() if the designated constraints
// aren't met.
type IntegrationOptionsMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m IntegrationOptionsMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m IntegrationOptionsMultiError) AllErrors() []error { return m }

// IntegrationOptionsValidationError is the validation error returned by
// IntegrationOptions.Validate if the designated constraints aren't met.
type IntegrationOptionsValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e IntegrationOptionsValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e IntegrationOptionsValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e IntegrationOptionsValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e IntegrationOptionsValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e IntegrationOptionsValidationError) ErrorName() string {
	return "IntegrationOptionsValidationError"
}

// Error satisfies the builtin error interface
func (e IntegrationOptionsValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sIntegrationOptions.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = IntegrationOptionsValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = IntegrationOptionsValidationError{}