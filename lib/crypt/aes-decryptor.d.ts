export declare function removePadding(array: Uint8Array): Uint8Array;
export default class AESDecryptor {
    private rcon;
    private subMix;
    private invSubMix;
    private sBox;
    private invSBox;
    private key;
    private ksRows;
    private keySize;
    private keySchedule;
    private invKeySchedule;
    constructor();
    uint8ArrayToUint32Array_(arrayBuffer: any): Uint32Array;
    initTable(): void;
    expandKey(keyBuffer: ArrayBuffer): void;
    networkToHostOrderSwap(word: any): number;
    decrypt(inputArrayBuffer: ArrayBuffer, offset: number, aesIV: ArrayBuffer): ArrayBufferLike;
}
//# sourceMappingURL=aes-decryptor.d.ts.map