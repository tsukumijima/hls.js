import type { BufferOperation, SourceBufferName, SourceBufferTrackSet } from '../types/buffer';
export default class BufferOperationQueue {
    private tracks;
    private queues;
    constructor(sourceBufferReference: SourceBufferTrackSet);
    destroy(): void;
    append(operation: BufferOperation, type: SourceBufferName, pending?: boolean | undefined): void;
    appendBlocker(type: SourceBufferName): Promise<void>;
    prependBlocker(type: SourceBufferName): Promise<void>;
    removeBlockers(): void;
    unblockAudio(op: BufferOperation): void;
    executeNext(type: SourceBufferName): void;
    shiftAndExecuteNext(type: SourceBufferName): void;
    current(type: SourceBufferName): BufferOperation | null;
    toString(): string;
    list(type: SourceBufferName): string;
    private listSbInfo;
    private listOps;
}
//# sourceMappingURL=buffer-operation-queue.d.ts.map