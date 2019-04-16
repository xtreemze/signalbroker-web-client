/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var common_pb = require('./common_pb.js');
goog.exportSymbol('proto.base.DiagnosticsRequest', null, global);
goog.exportSymbol('proto.base.DiagnosticsResponse', null, global);

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
proto.base.DiagnosticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.base.DiagnosticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.base.DiagnosticsRequest.displayName = 'proto.base.DiagnosticsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.base.DiagnosticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.base.DiagnosticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.base.DiagnosticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.base.DiagnosticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uplink: (f = msg.getUplink()) && common_pb.SignalId.toObject(includeInstance, f),
    downlink: (f = msg.getDownlink()) && common_pb.SignalId.toObject(includeInstance, f),
    serviceid: msg.getServiceid_asB64(),
    dataidentifier: msg.getDataidentifier_asB64()
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
 * @return {!proto.base.DiagnosticsRequest}
 */
proto.base.DiagnosticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.base.DiagnosticsRequest;
  return proto.base.DiagnosticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.base.DiagnosticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.base.DiagnosticsRequest}
 */
proto.base.DiagnosticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.SignalId;
      reader.readMessage(value,common_pb.SignalId.deserializeBinaryFromReader);
      msg.setUplink(value);
      break;
    case 2:
      var value = new common_pb.SignalId;
      reader.readMessage(value,common_pb.SignalId.deserializeBinaryFromReader);
      msg.setDownlink(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setServiceid(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDataidentifier(value);
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
proto.base.DiagnosticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.base.DiagnosticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.base.DiagnosticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.base.DiagnosticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUplink();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.SignalId.serializeBinaryToWriter
    );
  }
  f = message.getDownlink();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.SignalId.serializeBinaryToWriter
    );
  }
  f = message.getServiceid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getDataidentifier_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional SignalId upLink = 1;
 * @return {?proto.base.SignalId}
 */
proto.base.DiagnosticsRequest.prototype.getUplink = function() {
  return /** @type{?proto.base.SignalId} */ (
    jspb.Message.getWrapperField(this, common_pb.SignalId, 1));
};


/** @param {?proto.base.SignalId|undefined} value */
proto.base.DiagnosticsRequest.prototype.setUplink = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.base.DiagnosticsRequest.prototype.clearUplink = function() {
  this.setUplink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.base.DiagnosticsRequest.prototype.hasUplink = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SignalId downLink = 2;
 * @return {?proto.base.SignalId}
 */
proto.base.DiagnosticsRequest.prototype.getDownlink = function() {
  return /** @type{?proto.base.SignalId} */ (
    jspb.Message.getWrapperField(this, common_pb.SignalId, 2));
};


/** @param {?proto.base.SignalId|undefined} value */
proto.base.DiagnosticsRequest.prototype.setDownlink = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.base.DiagnosticsRequest.prototype.clearDownlink = function() {
  this.setDownlink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.base.DiagnosticsRequest.prototype.hasDownlink = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes serviceId = 3;
 * @return {string}
 */
proto.base.DiagnosticsRequest.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes serviceId = 3;
 * This is a type-conversion wrapper around `getServiceid()`
 * @return {string}
 */
proto.base.DiagnosticsRequest.prototype.getServiceid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getServiceid()));
};


/**
 * optional bytes serviceId = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getServiceid()`
 * @return {!Uint8Array}
 */
proto.base.DiagnosticsRequest.prototype.getServiceid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getServiceid()));
};


/** @param {!(string|Uint8Array)} value */
proto.base.DiagnosticsRequest.prototype.setServiceid = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bytes dataIdentifier = 4;
 * @return {string}
 */
proto.base.DiagnosticsRequest.prototype.getDataidentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes dataIdentifier = 4;
 * This is a type-conversion wrapper around `getDataidentifier()`
 * @return {string}
 */
proto.base.DiagnosticsRequest.prototype.getDataidentifier_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDataidentifier()));
};


/**
 * optional bytes dataIdentifier = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDataidentifier()`
 * @return {!Uint8Array}
 */
proto.base.DiagnosticsRequest.prototype.getDataidentifier_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDataidentifier()));
};


/** @param {!(string|Uint8Array)} value */
proto.base.DiagnosticsRequest.prototype.setDataidentifier = function(value) {
  jspb.Message.setField(this, 4, value);
};



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
proto.base.DiagnosticsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.base.DiagnosticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.base.DiagnosticsResponse.displayName = 'proto.base.DiagnosticsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.base.DiagnosticsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.base.DiagnosticsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.base.DiagnosticsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.base.DiagnosticsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: msg.getRaw_asB64()
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
 * @return {!proto.base.DiagnosticsResponse}
 */
proto.base.DiagnosticsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.base.DiagnosticsResponse;
  return proto.base.DiagnosticsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.base.DiagnosticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.base.DiagnosticsResponse}
 */
proto.base.DiagnosticsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRaw(value);
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
proto.base.DiagnosticsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.base.DiagnosticsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.base.DiagnosticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.base.DiagnosticsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional bytes raw = 5;
 * @return {string}
 */
proto.base.DiagnosticsResponse.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes raw = 5;
 * This is a type-conversion wrapper around `getRaw()`
 * @return {string}
 */
proto.base.DiagnosticsResponse.prototype.getRaw_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRaw()));
};


/**
 * optional bytes raw = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRaw()`
 * @return {!Uint8Array}
 */
proto.base.DiagnosticsResponse.prototype.getRaw_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRaw()));
};


/** @param {!(string|Uint8Array)} value */
proto.base.DiagnosticsResponse.prototype.setRaw = function(value) {
  jspb.Message.setField(this, 5, value);
};


goog.object.extend(exports, proto.base);