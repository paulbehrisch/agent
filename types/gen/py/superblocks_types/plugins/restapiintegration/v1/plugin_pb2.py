# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: plugins/restapiintegration/v1/plugin.proto
# Protobuf Python Version: 5.28.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    28,
    0,
    '',
    'plugins/restapiintegration/v1/plugin.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from superblocks_types.common.v1 import plugin_pb2 as common_dot_v1_dot_plugin__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n*plugins/restapiintegration/v1/plugin.proto\x12\x1dplugins.restapiintegration.v1\x1a\x16\x63ommon/v1/plugin.proto\"\x84\x06\n\x06Plugin\x12\x1e\n\nhttpMethod\x18\x01 \x01(\tR\nhttpMethod\x12\"\n\x0cresponseType\x18\x02 \x01(\tR\x0cresponseType\x12-\n\x07headers\x18\x03 \x03(\x0b\x32\x13.common.v1.PropertyR\x07headers\x12+\n\x06params\x18\x04 \x03(\x0b\x32\x13.common.v1.PropertyR\x06params\x12\x1a\n\x08\x62odyType\x18\x05 \x01(\tR\x08\x62odyType\x12\x12\n\x04\x62ody\x18\x06 \x01(\tR\x04\x62ody\x12\x1a\n\x08jsonBody\x18\x07 \x01(\tR\x08jsonBody\x12/\n\x08\x66ormData\x18\x08 \x03(\x0b\x32\x13.common.v1.PropertyR\x08\x66ormData\x12 \n\x0b\x66ileFormKey\x18\t \x01(\tR\x0b\x66ileFormKey\x12\x1a\n\x08\x66ileName\x18\n \x01(\tR\x08\x66ileName\x12\x18\n\x07urlBase\x18\x0b \x01(\tR\x07urlBase\x12\x18\n\x07urlPath\x18\x0c \x01(\tR\x07urlPath\x12\x1a\n\x08\x61uthType\x18\r \x01(\tR\x08\x61uthType\x12P\n\x13superblocksMetadata\x18\x0e \x01(\x0b\x32\x1e.common.v1.SuperblocksMetadataR\x13superblocksMetadata\x12,\n\x11verboseHttpOutput\x18\x12 \x01(\x08R\x11verboseHttpOutput\x12\x38\n\x17\x64oNotFailOnRequestError\x18\x13 \x01(\x08R\x17\x64oNotFailOnRequestError\x12$\n\ropenApiAction\x18\x0f \x01(\tR\ropenApiAction\x12&\n\x0eopenApiSpecRef\x18\x10 \x01(\tR\x0eopenApiSpecRef\x12\x31\n\x11openApiTenantName\x18\x11 \x01(\tH\x00R\x11openApiTenantName\x88\x01\x01\x42\x14\n\x12_openApiTenantNameBMZKgithub.com/superblocksteam/agent/types/gen/go/plugins/restapiintegration/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'plugins.restapiintegration.v1.plugin_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'ZKgithub.com/superblocksteam/agent/types/gen/go/plugins/restapiintegration/v1'
  _globals['_PLUGIN']._serialized_start=102
  _globals['_PLUGIN']._serialized_end=874
# @@protoc_insertion_point(module_scope)
