/**
 * AAC demuxer
 */
import BaseAudioDemuxer from './base-audio-demuxer';
import type { HlsEventEmitter } from '../../events';
import type { DemuxedAudioTrack } from '../../types/demuxer';
import type { ILogger } from '../../utils/logger';
declare class AACDemuxer extends BaseAudioDemuxer {
    private readonly observer;
    private readonly config;
    constructor(observer: HlsEventEmitter, config: any);
    resetInitSegment(initSegment: Uint8Array | undefined, audioCodec: string | undefined, videoCodec: string | undefined, trackDuration: number): void;
    static probe(data: Uint8Array | undefined, logger: ILogger): boolean;
    canParse(data: any, offset: any): boolean;
    appendFrame(track: DemuxedAudioTrack, data: Uint8Array, offset: number): import("../../types/demuxer").AudioFrame | undefined;
}
export default AACDemuxer;
//# sourceMappingURL=aacdemuxer.d.ts.map