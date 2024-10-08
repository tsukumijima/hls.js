export default class Chunker {
    private chunkSize;
    cache: Uint8Array | null;
    constructor(chunkSize?: number);
    push(data: Uint8Array): Array<Uint8Array>;
}
//# sourceMappingURL=chunker.d.ts.map