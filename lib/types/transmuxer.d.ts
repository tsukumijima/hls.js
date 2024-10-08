import type { RemuxerResult } from './remuxer';
import type { HlsChunkPerformanceTiming } from './loader';
import type { SourceBufferName } from './buffer';
export interface TransmuxerResult {
    remuxResult: RemuxerResult;
    chunkMeta: ChunkMetadata;
}
export declare class ChunkMetadata {
    readonly level: number;
    readonly sn: number;
    readonly part: number;
    readonly id: number;
    readonly size: number;
    readonly partial: boolean;
    readonly transmuxing: HlsChunkPerformanceTiming;
    readonly buffering: {
        [key in SourceBufferName]: HlsChunkPerformanceTiming;
    };
    constructor(level: number, sn: number, id: number, size?: number, part?: number, partial?: boolean);
}
//# sourceMappingURL=transmuxer.d.ts.map