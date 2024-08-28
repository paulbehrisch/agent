// source: plugins/oracledb/v1/plugin.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var plugins_common_v1_plugin_pb = require('../../../plugins/common/v1/plugin_pb');
goog.object.extend(proto, plugins_common_v1_plugin_pb);
goog.exportSymbol('proto.plugins.oracledb.v1.Plugin', null, global);
goog.exportSymbol('proto.plugins.oracledb.v1.Plugin.OracleDbConnection', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.plugins.oracledb.v1.Plugin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.plugins.oracledb.v1.Plugin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.plugins.oracledb.v1.Plugin.displayName = 'proto.plugins.oracledb.v1.Plugin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.plugins.oracledb.v1.Plugin.OracleDbConnection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.plugins.oracledb.v1.Plugin.OracleDbConnection.displayName = 'proto.plugins.oracledb.v1.Plugin.OracleDbConnection';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.plugins.oracledb.v1.Plugin.prototype.toObject = function(opt_includeInstance) {
  return proto.plugins.oracledb.v1.Plugin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.plugins.oracledb.v1.Plugin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.plugins.oracledb.v1.Plugin.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
connection: (f = msg.getConnection()) && proto.plugins.oracledb.v1.Plugin.OracleDbConnection.toObject(includeInstance, f),
dynamicWorkflowConfiguration: (f = msg.getDynamicWorkflowConfiguration()) && plugins_common_v1_plugin_pb.DynamicWorkflowConfiguration.toObject(includeInstance, f),
runSql: (f = msg.getRunSql()) && plugins_common_v1_plugin_pb.SQLExecution.toObject(includeInstance, f),
bulkEdit: (f = msg.getBulkEdit()) && plugins_common_v1_plugin_pb.SQLBulkEdit.toObject(includeInstance, f),
operation: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.plugins.oracledb.v1.Plugin}
 */
proto.plugins.oracledb.v1.Plugin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.plugins.oracledb.v1.Plugin;
  return proto.plugins.oracledb.v1.Plugin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.plugins.oracledb.v1.Plugin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.plugins.oracledb.v1.Plugin}
 */
proto.plugins.oracledb.v1.Plugin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.plugins.oracledb.v1.Plugin.OracleDbConnection;
      reader.readMessage(value,proto.plugins.oracledb.v1.Plugin.OracleDbConnection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 3:
      var value = new plugins_common_v1_plugin_pb.DynamicWorkflowConfiguration;
      reader.readMessage(value,plugins_common_v1_plugin_pb.DynamicWorkflowConfiguration.deserializeBinaryFromReader);
      msg.setDynamicWorkflowConfiguration(value);
      break;
    case 4:
      var value = new plugins_common_v1_plugin_pb.SQLExecution;
      reader.readMessage(value,plugins_common_v1_plugin_pb.SQLExecution.deserializeBinaryFromReader);
      msg.setRunSql(value);
      break;
    case 5:
      var value = new plugins_common_v1_plugin_pb.SQLBulkEdit;
      reader.readMessage(value,plugins_common_v1_plugin_pb.SQLBulkEdit.deserializeBinaryFromReader);
      msg.setBulkEdit(value);
      break;
    case 6:
      var value = /** @type {!proto.plugins.common.v1.SQLOperation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.plugins.oracledb.v1.Plugin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.plugins.oracledb.v1.Plugin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.plugins.oracledb.v1.Plugin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.plugins.oracledb.v1.Plugin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.plugins.oracledb.v1.Plugin.OracleDbConnection.serializeBinaryToWriter
    );
  }
  f = message.getDynamicWorkflowConfiguration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      plugins_common_v1_plugin_pb.DynamicWorkflowConfiguration.serializeBinaryToWriter
    );
  }
  f = message.getRunSql();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      plugins_common_v1_plugin_pb.SQLExecution.serializeBinaryToWriter
    );
  }
  f = message.getBulkEdit();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      plugins_common_v1_plugin_pb.SQLBulkEdit.serializeBinaryToWriter
    );
  }
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.toObject = function(opt_includeInstance) {
  return proto.plugins.oracledb.v1.Plugin.OracleDbConnection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.toObject = function(includeInstance, msg) {
  var f, obj = {
hostUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
port: jspb.Message.getFieldWithDefault(msg, 2, 0),
user: jspb.Message.getFieldWithDefault(msg, 3, ""),
password: jspb.Message.getFieldWithDefault(msg, 4, ""),
databaseService: jspb.Message.getFieldWithDefault(msg, 5, ""),
useTcps: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
connectionType: jspb.Message.getFieldWithDefault(msg, 7, ""),
connectionUrl: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection}
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.plugins.oracledb.v1.Plugin.OracleDbConnection;
  return proto.plugins.oracledb.v1.Plugin.OracleDbConnection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection}
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostUrl(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabaseService(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseTcps(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.plugins.oracledb.v1.Plugin.OracleDbConnection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDatabaseService();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUseTcps();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getConnectionType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getConnectionUrl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string host_url = 1;
 * @return {string}
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.getHostUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection} returns this
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.setHostUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection} returns this
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string user = 3;
 * @return {string}
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection} returns this
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection} returns this
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string database_service = 5;
 * @return {string}
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.getDatabaseService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection} returns this
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.setDatabaseService = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool use_tcps = 6;
 * @return {boolean}
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.getUseTcps = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection} returns this
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.setUseTcps = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string connection_type = 7;
 * @return {string}
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.getConnectionType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection} returns this
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.setConnectionType = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string connection_url = 8;
 * @return {string}
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.getConnectionUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.plugins.oracledb.v1.Plugin.OracleDbConnection} returns this
 */
proto.plugins.oracledb.v1.Plugin.OracleDbConnection.prototype.setConnectionUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.plugins.oracledb.v1.Plugin.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.plugins.oracledb.v1.Plugin} returns this
 */
proto.plugins.oracledb.v1.Plugin.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OracleDbConnection connection = 2;
 * @return {?proto.plugins.oracledb.v1.Plugin.OracleDbConnection}
 */
proto.plugins.oracledb.v1.Plugin.prototype.getConnection = function() {
  return /** @type{?proto.plugins.oracledb.v1.Plugin.OracleDbConnection} */ (
    jspb.Message.getWrapperField(this, proto.plugins.oracledb.v1.Plugin.OracleDbConnection, 2));
};


/**
 * @param {?proto.plugins.oracledb.v1.Plugin.OracleDbConnection|undefined} value
 * @return {!proto.plugins.oracledb.v1.Plugin} returns this
*/
proto.plugins.oracledb.v1.Plugin.prototype.setConnection = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.plugins.oracledb.v1.Plugin} returns this
 */
proto.plugins.oracledb.v1.Plugin.prototype.clearConnection = function() {
  return this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.plugins.oracledb.v1.Plugin.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional plugins.common.v1.DynamicWorkflowConfiguration dynamic_workflow_configuration = 3;
 * @return {?proto.plugins.common.v1.DynamicWorkflowConfiguration}
 */
proto.plugins.oracledb.v1.Plugin.prototype.getDynamicWorkflowConfiguration = function() {
  return /** @type{?proto.plugins.common.v1.DynamicWorkflowConfiguration} */ (
    jspb.Message.getWrapperField(this, plugins_common_v1_plugin_pb.DynamicWorkflowConfiguration, 3));
};


/**
 * @param {?proto.plugins.common.v1.DynamicWorkflowConfiguration|undefined} value
 * @return {!proto.plugins.oracledb.v1.Plugin} returns this
*/
proto.plugins.oracledb.v1.Plugin.prototype.setDynamicWorkflowConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.plugins.oracledb.v1.Plugin} returns this
 */
proto.plugins.oracledb.v1.Plugin.prototype.clearDynamicWorkflowConfiguration = function() {
  return this.setDynamicWorkflowConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.plugins.oracledb.v1.Plugin.prototype.hasDynamicWorkflowConfiguration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional plugins.common.v1.SQLExecution run_sql = 4;
 * @return {?proto.plugins.common.v1.SQLExecution}
 */
proto.plugins.oracledb.v1.Plugin.prototype.getRunSql = function() {
  return /** @type{?proto.plugins.common.v1.SQLExecution} */ (
    jspb.Message.getWrapperField(this, plugins_common_v1_plugin_pb.SQLExecution, 4));
};


/**
 * @param {?proto.plugins.common.v1.SQLExecution|undefined} value
 * @return {!proto.plugins.oracledb.v1.Plugin} returns this
*/
proto.plugins.oracledb.v1.Plugin.prototype.setRunSql = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.plugins.oracledb.v1.Plugin} returns this
 */
proto.plugins.oracledb.v1.Plugin.prototype.clearRunSql = function() {
  return this.setRunSql(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.plugins.oracledb.v1.Plugin.prototype.hasRunSql = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional plugins.common.v1.SQLBulkEdit bulk_edit = 5;
 * @return {?proto.plugins.common.v1.SQLBulkEdit}
 */
proto.plugins.oracledb.v1.Plugin.prototype.getBulkEdit = function() {
  return /** @type{?proto.plugins.common.v1.SQLBulkEdit} */ (
    jspb.Message.getWrapperField(this, plugins_common_v1_plugin_pb.SQLBulkEdit, 5));
};


/**
 * @param {?proto.plugins.common.v1.SQLBulkEdit|undefined} value
 * @return {!proto.plugins.oracledb.v1.Plugin} returns this
*/
proto.plugins.oracledb.v1.Plugin.prototype.setBulkEdit = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.plugins.oracledb.v1.Plugin} returns this
 */
proto.plugins.oracledb.v1.Plugin.prototype.clearBulkEdit = function() {
  return this.setBulkEdit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.plugins.oracledb.v1.Plugin.prototype.hasBulkEdit = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional plugins.common.v1.SQLOperation operation = 6;
 * @return {!proto.plugins.common.v1.SQLOperation}
 */
proto.plugins.oracledb.v1.Plugin.prototype.getOperation = function() {
  return /** @type {!proto.plugins.common.v1.SQLOperation} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.plugins.common.v1.SQLOperation} value
 * @return {!proto.plugins.oracledb.v1.Plugin} returns this
 */
proto.plugins.oracledb.v1.Plugin.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


goog.object.extend(exports, proto.plugins.oracledb.v1);