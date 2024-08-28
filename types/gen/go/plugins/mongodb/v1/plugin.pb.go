// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        (unknown)
// source: plugins/mongodb/v1/plugin.proto

package v1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type SuperblocksMetadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PluginVersion string `protobuf:"bytes,1,opt,name=pluginVersion,proto3" json:"pluginVersion,omitempty"`
}

func (x *SuperblocksMetadata) Reset() {
	*x = SuperblocksMetadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_plugins_mongodb_v1_plugin_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SuperblocksMetadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SuperblocksMetadata) ProtoMessage() {}

func (x *SuperblocksMetadata) ProtoReflect() protoreflect.Message {
	mi := &file_plugins_mongodb_v1_plugin_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SuperblocksMetadata.ProtoReflect.Descriptor instead.
func (*SuperblocksMetadata) Descriptor() ([]byte, []int) {
	return file_plugins_mongodb_v1_plugin_proto_rawDescGZIP(), []int{0}
}

func (x *SuperblocksMetadata) GetPluginVersion() string {
	if x != nil {
		return x.PluginVersion
	}
	return ""
}

type Plugin struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Resource   string `protobuf:"bytes,1,opt,name=resource,proto3" json:"resource,omitempty"`
	Action     string `protobuf:"bytes,2,opt,name=action,proto3" json:"action,omitempty"`
	Pipeline   string `protobuf:"bytes,3,opt,name=pipeline,proto3" json:"pipeline,omitempty"`
	Projection string `protobuf:"bytes,4,opt,name=projection,proto3" json:"projection,omitempty"`
	Query      string `protobuf:"bytes,5,opt,name=query,proto3" json:"query,omitempty"`
	Field      string `protobuf:"bytes,6,opt,name=field,proto3" json:"field,omitempty"`
	Sortby     string `protobuf:"bytes,7,opt,name=sortby,proto3" json:"sortby,omitempty"`
	// Super confusing, but these could be bindings or string ints
	// If they were not potential bindings, we should let them be int32s instead
	Limit               string               `protobuf:"bytes,8,opt,name=limit,proto3" json:"limit,omitempty"`
	Skip                string               `protobuf:"bytes,9,opt,name=skip,proto3" json:"skip,omitempty"`
	Document            string               `protobuf:"bytes,10,opt,name=document,proto3" json:"document,omitempty"`
	Replacement         string               `protobuf:"bytes,11,opt,name=replacement,proto3" json:"replacement,omitempty"`
	Filter              string               `protobuf:"bytes,12,opt,name=filter,proto3" json:"filter,omitempty"`
	Options             string               `protobuf:"bytes,13,opt,name=options,proto3" json:"options,omitempty"`
	Update              string               `protobuf:"bytes,14,opt,name=update,proto3" json:"update,omitempty"`
	DistinctKey         string               `protobuf:"bytes,15,opt,name=distinctKey,proto3" json:"distinctKey,omitempty"`
	SuperblocksMetadata *SuperblocksMetadata `protobuf:"bytes,16,opt,name=superblocksMetadata,proto3" json:"superblocksMetadata,omitempty"`
}

func (x *Plugin) Reset() {
	*x = Plugin{}
	if protoimpl.UnsafeEnabled {
		mi := &file_plugins_mongodb_v1_plugin_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Plugin) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Plugin) ProtoMessage() {}

func (x *Plugin) ProtoReflect() protoreflect.Message {
	mi := &file_plugins_mongodb_v1_plugin_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Plugin.ProtoReflect.Descriptor instead.
func (*Plugin) Descriptor() ([]byte, []int) {
	return file_plugins_mongodb_v1_plugin_proto_rawDescGZIP(), []int{1}
}

func (x *Plugin) GetResource() string {
	if x != nil {
		return x.Resource
	}
	return ""
}

func (x *Plugin) GetAction() string {
	if x != nil {
		return x.Action
	}
	return ""
}

func (x *Plugin) GetPipeline() string {
	if x != nil {
		return x.Pipeline
	}
	return ""
}

func (x *Plugin) GetProjection() string {
	if x != nil {
		return x.Projection
	}
	return ""
}

func (x *Plugin) GetQuery() string {
	if x != nil {
		return x.Query
	}
	return ""
}

func (x *Plugin) GetField() string {
	if x != nil {
		return x.Field
	}
	return ""
}

func (x *Plugin) GetSortby() string {
	if x != nil {
		return x.Sortby
	}
	return ""
}

func (x *Plugin) GetLimit() string {
	if x != nil {
		return x.Limit
	}
	return ""
}

func (x *Plugin) GetSkip() string {
	if x != nil {
		return x.Skip
	}
	return ""
}

func (x *Plugin) GetDocument() string {
	if x != nil {
		return x.Document
	}
	return ""
}

func (x *Plugin) GetReplacement() string {
	if x != nil {
		return x.Replacement
	}
	return ""
}

func (x *Plugin) GetFilter() string {
	if x != nil {
		return x.Filter
	}
	return ""
}

func (x *Plugin) GetOptions() string {
	if x != nil {
		return x.Options
	}
	return ""
}

func (x *Plugin) GetUpdate() string {
	if x != nil {
		return x.Update
	}
	return ""
}

func (x *Plugin) GetDistinctKey() string {
	if x != nil {
		return x.DistinctKey
	}
	return ""
}

func (x *Plugin) GetSuperblocksMetadata() *SuperblocksMetadata {
	if x != nil {
		return x.SuperblocksMetadata
	}
	return nil
}

var File_plugins_mongodb_v1_plugin_proto protoreflect.FileDescriptor

var file_plugins_mongodb_v1_plugin_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2f, 0x6d, 0x6f, 0x6e, 0x67, 0x6f, 0x64,
	0x62, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x12, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x6d, 0x6f, 0x6e, 0x67, 0x6f,
	0x64, 0x62, 0x2e, 0x76, 0x31, 0x22, 0x3b, 0x0a, 0x13, 0x53, 0x75, 0x70, 0x65, 0x72, 0x62, 0x6c,
	0x6f, 0x63, 0x6b, 0x73, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x24, 0x0a, 0x0d,
	0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x56, 0x65, 0x72, 0x73, 0x69,
	0x6f, 0x6e, 0x22, 0xeb, 0x03, 0x0a, 0x06, 0x50, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x12, 0x1a, 0x0a,
	0x08, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x69, 0x70, 0x65, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x1e, 0x0a,
	0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x14, 0x0a,
	0x05, 0x71, 0x75, 0x65, 0x72, 0x79, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x71, 0x75,
	0x65, 0x72, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x6f, 0x72,
	0x74, 0x62, 0x79, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x6f, 0x72, 0x74, 0x62,
	0x79, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x6b, 0x69, 0x70, 0x18,
	0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x73, 0x6b, 0x69, 0x70, 0x12, 0x1a, 0x0a, 0x08, 0x64,
	0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x64,
	0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x20, 0x0a, 0x0b, 0x72, 0x65, 0x70, 0x6c, 0x61,
	0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x72, 0x65,
	0x70, 0x6c, 0x61, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x66, 0x69, 0x6c,
	0x74, 0x65, 0x72, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x66, 0x69, 0x6c, 0x74, 0x65,
	0x72, 0x12, 0x18, 0x0a, 0x07, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x0d, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x07, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x16, 0x0a, 0x06, 0x75,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x69, 0x73, 0x74, 0x69, 0x6e, 0x63, 0x74, 0x4b,
	0x65, 0x79, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x69, 0x73, 0x74, 0x69, 0x6e,
	0x63, 0x74, 0x4b, 0x65, 0x79, 0x12, 0x59, 0x0a, 0x13, 0x73, 0x75, 0x70, 0x65, 0x72, 0x62, 0x6c,
	0x6f, 0x63, 0x6b, 0x73, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x10, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x27, 0x2e, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2e, 0x6d, 0x6f, 0x6e,
	0x67, 0x6f, 0x64, 0x62, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x75, 0x70, 0x65, 0x72, 0x62, 0x6c, 0x6f,
	0x63, 0x6b, 0x73, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x13, 0x73, 0x75, 0x70,
	0x65, 0x72, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x42, 0x42, 0x5a, 0x40, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73,
	0x75, 0x70, 0x65, 0x72, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x74, 0x65, 0x61, 0x6d, 0x2f, 0x61,
	0x67, 0x65, 0x6e, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67,
	0x6f, 0x2f, 0x70, 0x6c, 0x75, 0x67, 0x69, 0x6e, 0x73, 0x2f, 0x6d, 0x6f, 0x6e, 0x67, 0x6f, 0x64,
	0x62, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_plugins_mongodb_v1_plugin_proto_rawDescOnce sync.Once
	file_plugins_mongodb_v1_plugin_proto_rawDescData = file_plugins_mongodb_v1_plugin_proto_rawDesc
)

func file_plugins_mongodb_v1_plugin_proto_rawDescGZIP() []byte {
	file_plugins_mongodb_v1_plugin_proto_rawDescOnce.Do(func() {
		file_plugins_mongodb_v1_plugin_proto_rawDescData = protoimpl.X.CompressGZIP(file_plugins_mongodb_v1_plugin_proto_rawDescData)
	})
	return file_plugins_mongodb_v1_plugin_proto_rawDescData
}

var file_plugins_mongodb_v1_plugin_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_plugins_mongodb_v1_plugin_proto_goTypes = []interface{}{
	(*SuperblocksMetadata)(nil), // 0: plugins.mongodb.v1.SuperblocksMetadata
	(*Plugin)(nil),              // 1: plugins.mongodb.v1.Plugin
}
var file_plugins_mongodb_v1_plugin_proto_depIdxs = []int32{
	0, // 0: plugins.mongodb.v1.Plugin.superblocksMetadata:type_name -> plugins.mongodb.v1.SuperblocksMetadata
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_plugins_mongodb_v1_plugin_proto_init() }
func file_plugins_mongodb_v1_plugin_proto_init() {
	if File_plugins_mongodb_v1_plugin_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_plugins_mongodb_v1_plugin_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SuperblocksMetadata); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_plugins_mongodb_v1_plugin_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Plugin); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_plugins_mongodb_v1_plugin_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_plugins_mongodb_v1_plugin_proto_goTypes,
		DependencyIndexes: file_plugins_mongodb_v1_plugin_proto_depIdxs,
		MessageInfos:      file_plugins_mongodb_v1_plugin_proto_msgTypes,
	}.Build()
	File_plugins_mongodb_v1_plugin_proto = out.File
	file_plugins_mongodb_v1_plugin_proto_rawDesc = nil
	file_plugins_mongodb_v1_plugin_proto_goTypes = nil
	file_plugins_mongodb_v1_plugin_proto_depIdxs = nil
}