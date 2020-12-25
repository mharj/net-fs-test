interface IFsRequest {
	ops: Array<IFsBaseRequest>;
}

interface IFsResponse {
	res: Array<IFsResponse>;
}

type FsRpcCall = (data: IFsRequest) => Promise<IFsResponse>;
