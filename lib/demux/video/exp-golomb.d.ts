/**
 * Parser for exponential Golomb codes, a variable-bitwidth number encoding scheme used by h264.
 */
declare class ExpGolomb {
    private data;
    bytesAvailable: number;
    private word;
    private bitsAvailable;
    constructor(data: Uint8Array);
    loadWord(): void;
    skipBits(count: number): void;
    readBits(size: number): number;
    skipLZ(): number;
    skipUEG(): void;
    skipEG(): void;
    readUEG(): number;
    readEG(): number;
    readBoolean(): boolean;
    readUByte(): number;
    readUShort(): number;
    readUInt(): number;
}
export default ExpGolomb;
//# sourceMappingURL=exp-golomb.d.ts.map