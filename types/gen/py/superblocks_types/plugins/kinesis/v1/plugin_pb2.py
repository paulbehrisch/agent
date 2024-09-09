# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: plugins/kinesis/v1/plugin.proto
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
    'plugins/kinesis/v1/plugin.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from superblocks_types.plugins.common.v1 import plugin_pb2 as plugins_dot_common_dot_v1_dot_plugin__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1fplugins/kinesis/v1/plugin.proto\x12\x12plugins.kinesis.v1\x1a\x1eplugins/common/v1/plugin.proto\"\xa7\n\n\x06Plugin\x12\x17\n\x04name\x18\x01 \x01(\tH\x01R\x04name\x88\x01\x01\x12L\n\nconnection\x18\x02 \x01(\x0b\x32,.plugins.kinesis.v1.Plugin.KinesisConnectionR\nconnection\x12\x32\n\x03put\x18\x03 \x01(\x0b\x32\x1e.plugins.kinesis.v1.Plugin.PutH\x00R\x03put\x12\x32\n\x03get\x18\x04 \x01(\x0b\x32\x1e.plugins.kinesis.v1.Plugin.GetH\x00R\x03get\x12z\n\x1e\x64ynamic_workflow_configuration\x18\x05 \x01(\x0b\x32/.plugins.common.v1.DynamicWorkflowConfigurationH\x02R\x1c\x64ynamicWorkflowConfiguration\x88\x01\x01\x1aP\n\x11KinesisConnection\x12;\n\naws_config\x18\x01 \x01(\x0b\x32\x1c.plugins.common.v1.AWSConfigR\tawsConfig\x1a\x97\x01\n\x03Put\x12\x12\n\x04\x64\x61ta\x18\x01 \x01(\tR\x04\x64\x61ta\x12#\n\rpartition_key\x18\x02 \x01(\tR\x0cpartitionKey\x12!\n\x0bstream_name\x18\x03 \x01(\tH\x00R\nstreamName\x12\x1f\n\nstream_arn\x18\x04 \x01(\tH\x00R\tstreamArnB\x13\n\x11stream_identifier\x1a\xaa\x03\n\x03Get\x12\x19\n\x08shard_id\x18\x02 \x01(\tR\x07shardId\x12\\\n\x13shard_iterator_type\x18\x03 \x01(\x0e\x32,.plugins.kinesis.v1.Plugin.ShardIteratorTypeR\x11shardIteratorType\x12\x14\n\x05limit\x18\x04 \x01(\x05R\x05limit\x12.\n\x13polling_cooldown_ms\x18\x05 \x01(\x05R\x11pollingCooldownMs\x12=\n\x18starting_sequence_number\x18\x06 \x01(\tH\x01R\x16startingSequenceNumber\x88\x01\x01\x12!\n\ttimestamp\x18\x07 \x01(\tH\x02R\ttimestamp\x88\x01\x01\x12!\n\x0bstream_name\x18\x08 \x01(\tH\x00R\nstreamName\x12\x1f\n\nstream_arn\x18\t \x01(\tH\x00R\tstreamArnB\x13\n\x11stream_identifierB\x1b\n\x19_starting_sequence_numberB\x0c\n\n_timestamp\"\xff\x01\n\x11ShardIteratorType\x12#\n\x1fSHARD_ITERATOR_TYPE_UNSPECIFIED\x10\x00\x12*\n&SHARD_ITERATOR_TYPE_AT_SEQUENCE_NUMBER\x10\x01\x12-\n)SHARD_ITERATOR_TYPE_AFTER_SEQUENCE_NUMBER\x10\x02\x12$\n SHARD_ITERATOR_TYPE_AT_TIMESTAMP\x10\x03\x12$\n SHARD_ITERATOR_TYPE_TRIM_HORIZON\x10\x04\x12\x1e\n\x1aSHARD_ITERATOR_TYPE_LATEST\x10\x05\x42\x0b\n\toperationB\x07\n\x05_nameB!\n\x1f_dynamic_workflow_configuration\"$\n\x08Metadata\x12\x18\n\x07streams\x18\x01 \x03(\tR\x07streamsBBZ@github.com/superblocksteam/agent/types/gen/go/plugins/kinesis/v1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'plugins.kinesis.v1.plugin_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z@github.com/superblocksteam/agent/types/gen/go/plugins/kinesis/v1'
  _globals['_PLUGIN']._serialized_start=88
  _globals['_PLUGIN']._serialized_end=1407
  _globals['_PLUGIN_KINESISCONNECTION']._serialized_start=429
  _globals['_PLUGIN_KINESISCONNECTION']._serialized_end=509
  _globals['_PLUGIN_PUT']._serialized_start=512
  _globals['_PLUGIN_PUT']._serialized_end=663
  _globals['_PLUGIN_GET']._serialized_start=666
  _globals['_PLUGIN_GET']._serialized_end=1092
  _globals['_PLUGIN_SHARDITERATORTYPE']._serialized_start=1095
  _globals['_PLUGIN_SHARDITERATORTYPE']._serialized_end=1350
  _globals['_METADATA']._serialized_start=1409
  _globals['_METADATA']._serialized_end=1445
# @@protoc_insertion_point(module_scope)
