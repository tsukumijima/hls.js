export interface DecryptData {
    uri: string;
    method: string;
    keyFormat: string;
    keyFormatVersions: number[];
    iv: Uint8Array | null;
    key: Uint8Array | null;
    keyId: Uint8Array | null;
    pssh: Uint8Array | null;
    encrypted: boolean;
    isCommonEncryption: boolean;
}
export declare class LevelKey implements DecryptData {
    readonly uri: string;
    readonly method: string;
    readonly keyFormat: string;
    readonly keyFormatVersions: number[];
    readonly encrypted: boolean;
    readonly isCommonEncryption: boolean;
    iv: Uint8Array | null;
    key: Uint8Array | null;
    keyId: Uint8Array | null;
    pssh: Uint8Array | null;
    static clearKeyUriToKeyIdMap(): void;
    constructor(method: string, uri: string, format: string, formatversions?: number[], iv?: Uint8Array | null);
    isSupported(): boolean;
    getDecryptData(sn: number | 'initSegment'): LevelKey | null;
}
//# sourceMappingURL=level-key.d.ts.map