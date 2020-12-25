const fsRequestTypes = ['void', 'login'] as const;
type FsRequestType = typeof fsRequestTypes[number];

interface IFsBaseRequest {
	id: FsRequestType;
}

interface IFsAuthRequest extends IFsBaseRequest {}
