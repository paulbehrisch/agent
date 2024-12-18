// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file common/v1/api.proto (package common.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message common.v1.Links
 */
export class Links extends Message<Links> {
  /**
   * @generated from field: map<string, common.v1.Link> links = 1;
   */
  links: { [key: string]: Link } = {};

  constructor(data?: PartialMessage<Links>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "common.v1.Links";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "links", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Link} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Links {
    return new Links().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Links {
    return new Links().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Links {
    return new Links().fromJsonString(jsonString, options);
  }

  static equals(a: Links | PlainMessage<Links> | undefined, b: Links | PlainMessage<Links> | undefined): boolean {
    return proto3.util.equals(Links, a, b);
  }
}

/**
 * @generated from message common.v1.LinksV2
 */
export class LinksV2 extends Message<LinksV2> {
  /**
   * @generated from field: repeated common.v1.Links links = 1;
   */
  links: Links[] = [];

  constructor(data?: PartialMessage<LinksV2>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "common.v1.LinksV2";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "links", kind: "message", T: Links, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LinksV2 {
    return new LinksV2().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LinksV2 {
    return new LinksV2().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LinksV2 {
    return new LinksV2().fromJsonString(jsonString, options);
  }

  static equals(a: LinksV2 | PlainMessage<LinksV2> | undefined, b: LinksV2 | PlainMessage<LinksV2> | undefined): boolean {
    return proto3.util.equals(LinksV2, a, b);
  }
}

/**
 * @generated from message common.v1.Link
 */
export class Link extends Message<Link> {
  /**
   * @generated from field: string url = 1;
   */
  url = "";

  constructor(data?: PartialMessage<Link>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "common.v1.Link";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Link {
    return new Link().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Link {
    return new Link().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Link {
    return new Link().fromJsonString(jsonString, options);
  }

  static equals(a: Link | PlainMessage<Link> | undefined, b: Link | PlainMessage<Link> | undefined): boolean {
    return proto3.util.equals(Link, a, b);
  }
}

/**
 * @generated from message common.v1.CombinedLinks
 */
export class CombinedLinks extends Message<CombinedLinks> {
  /**
   * @generated from field: map<string, common.v1.Link> links = 1;
   */
  links: { [key: string]: Link } = {};

  /**
   * @generated from field: repeated common.v1.Links links_v2 = 2;
   */
  linksV2: Links[] = [];

  constructor(data?: PartialMessage<CombinedLinks>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "common.v1.CombinedLinks";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "links", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Link} },
    { no: 2, name: "links_v2", kind: "message", T: Links, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CombinedLinks {
    return new CombinedLinks().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CombinedLinks {
    return new CombinedLinks().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CombinedLinks {
    return new CombinedLinks().fromJsonString(jsonString, options);
  }

  static equals(a: CombinedLinks | PlainMessage<CombinedLinks> | undefined, b: CombinedLinks | PlainMessage<CombinedLinks> | undefined): boolean {
    return proto3.util.equals(CombinedLinks, a, b);
  }
}

