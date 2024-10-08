import { MediaFragment, Part } from '../loader/fragment';
import type { ChunkMetadata, TransmuxerResult } from '../types/transmuxer';
import type Hls from '../hls';
import type { PlaylistLevelType } from '../types/loader';
import type { RationalTimestamp } from '../utils/timescale-conversion';
export default class TransmuxerInterface {
    error: Error | null;
    private hls;
    private id;
    private instanceNo;
    private observer;
    private frag;
    private part;
    private useWorker;
    private workerContext;
    private transmuxer;
    private onTransmuxComplete;
    private onFlush;
    constructor(hls: Hls, id: PlaylistLevelType, onTransmuxComplete: (transmuxResult: TransmuxerResult) => void, onFlush: (chunkMeta: ChunkMetadata) => void);
    reset(): void;
    private terminateWorker;
    destroy(): void;
    push(data: ArrayBuffer, initSegmentData: Uint8Array | undefined, audioCodec: string | undefined, videoCodec: string | undefined, frag: MediaFragment, part: Part | null, duration: number, accurateTimeOffset: boolean, chunkMeta: ChunkMetadata, defaultInitPTS?: RationalTimestamp): void;
    flush(chunkMeta: ChunkMetadata): void;
    private transmuxerError;
    private handleFlushResult;
    private onWorkerMessage;
    private onWorkerError;
    private configureTransmuxer;
    private handleTransmuxComplete;
}
//# sourceMappingURL=transmuxer-interface.d.ts.map