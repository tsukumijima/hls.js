import BaseAudioDemuxer from './base-audio-demuxer';
import type { HlsEventEmitter } from '../../events';
import type { AudioFrame, DemuxedAudioTrack } from '../../types/demuxer';
export declare class AC3Demuxer extends BaseAudioDemuxer {
    private readonly observer;
    constructor(observer: HlsEventEmitter);
    resetInitSegment(initSegment: Uint8Array | undefined, audioCodec: string | undefined, videoCodec: string | undefined, trackDuration: number): void;
    canParse(data: Uint8Array, offset: number): boolean;
    appendFrame(track: DemuxedAudioTrack, data: Uint8Array, offset: number): AudioFrame | void;
    static probe(data: Uint8Array | undefined): boolean;
}
export declare function appendFrame(track: DemuxedAudioTrack, data: Uint8Array, start: number, pts: number, frameIndex: number): number;
//# sourceMappingURL=ac3-demuxer.d.ts.map