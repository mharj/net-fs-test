const fsResponseTypes = ['void', 'login', 'error'] as const;
type FsResponseType = typeof fsResponseTypes[number];

interface IFsBaseResponse {
	id: FsResponseType;
}
interface IFsTypedResponse<T extends FsResponseType> {
	id: T;
}
