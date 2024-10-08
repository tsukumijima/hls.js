type DecodedFrame<T> = {
    key: string;
    data: T;
    info?: any;
};
export type Frame = DecodedFrame<ArrayBuffer | string>;
export declare function strToUtf8array(str: string): Uint8Array;
export {};
//# sourceMappingURL=utf8-utils.d.ts.map