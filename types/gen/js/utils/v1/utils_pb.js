// source: utils/v1/utils.proto
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

goog.exportSymbol('proto.utils.v1.Signature', null, global);
goog.exportSymbol('proto.utils.v1.Signature.Algorithm', null, global);
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
proto.utils.v1.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.utils.v1.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.utils.v1.Signature.displayName = 'proto.utils.v1.Signature';
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
proto.utils.v1.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.utils.v1.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.utils.v1.Signature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.utils.v1.Signature.toObject = function(includeInstance, msg) {
  var f, obj = {
keyId: jspb.Message.getFieldWithDefault(msg, 1, ""),
data: msg.getData_asB64(),
publicKey: msg.getPublicKey_asB64(),
algorithm: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.utils.v1.Signature}
 */
proto.utils.v1.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.utils.v1.Signature;
  return proto.utils.v1.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.utils.v1.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.utils.v1.Signature}
 */
proto.utils.v1.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 4:
      var value = /** @type {!proto.utils.v1.Signature.Algorithm} */ (reader.readEnum());
      msg.setAlgorithm(value);
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
proto.utils.v1.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.utils.v1.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.utils.v1.Signature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.utils.v1.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getAlgorithm();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.utils.v1.Signature.Algorithm = {
  ALGORITHM_UNSPECIFIED: 0,
  ALGORITHM_ED25519: 1
};

/**
 * optional string key_id = 1;
 * @return {string}
 */
proto.utils.v1.Signature.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.utils.v1.Signature} returns this
 */
proto.utils.v1.Signature.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {string}
 */
proto.utils.v1.Signature.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.utils.v1.Signature.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.utils.v1.Signature.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.utils.v1.Signature} returns this
 */
proto.utils.v1.Signature.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes public_key = 3;
 * @return {string}
 */
proto.utils.v1.Signature.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes public_key = 3;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.utils.v1.Signature.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.utils.v1.Signature.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.utils.v1.Signature} returns this
 */
proto.utils.v1.Signature.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional Algorithm algorithm = 4;
 * @return {!proto.utils.v1.Signature.Algorithm}
 */
proto.utils.v1.Signature.prototype.getAlgorithm = function() {
  return /** @type {!proto.utils.v1.Signature.Algorithm} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.utils.v1.Signature.Algorithm} value
 * @return {!proto.utils.v1.Signature} returns this
 */
proto.utils.v1.Signature.prototype.setAlgorithm = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


goog.object.extend(exports, proto.utils.v1);
