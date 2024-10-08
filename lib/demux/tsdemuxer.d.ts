/**
 * highly optimized TS demuxer:
 * parse PAT, PMT
 * extract PES packet from audio and video PIDs
 * extract AVC/H264 (or HEVC/H265) NAL units and AAC/ADTS samples from PES packet
 * trigger the remuxer upon parsing completion
 * it also tries to workaround as best as it can audio codec switch (HE-AAC to AAC and vice versa), without having to restart the MediaSource.
 * it also controls the remuxing process :
 * upon discontinuity or level switch detection, it will also notifies the remuxer so that it can reset its state.
 */
import type { HlsConfig } from '../config';
import type { HlsEventEmitter } from '../events';
import type { TypeSupported } from '../utils/codecs';
import type { ILogger } from '../utils/logger';
import { type DemuxedTrack, type Demuxer, type DemuxerResult, type VideoSample, type KeyData } from '../types/demuxer';
export type ParsedTimestamp = {
    pts?: number;
    dts?: number;
};
export type PES = ParsedTimestamp & {
    data: Uint8Array;
    len: number;
};
export type ParsedVideoSample = ParsedTimestamp & Omit<VideoSample, 'pts' | 'dts'>;
declare class TSDemuxer implements Demuxer {
    private readonly logger;
    private readonly observer;
    private readonly config;
    private readonly typeSupported;
    private sampleAes;
    private pmtParsed;
    private audioCodec?;
    private videoCodec?;
    private _pmtId;
    private _videoTrack?;
    private _audioTrack?;
    private _id3Track?;
    private _txtTrack?;
    private aacOverFlow;
    private remainderData;
    private videoParser;
    constructor(observer: HlsEventEmitter, config: HlsConfig, typeSupported: TypeSupported, logger: ILogger);
    static probe(data: Uint8Array, logger: ILogger): boolean;
    static syncOffset(data: Uint8Array): number;
    /**
     * Creates a track model internal to demuxer used to drive remuxing input
     */
    static createTrack(type: 'audio' | 'video' | 'id3' | 'text', duration?: number): DemuxedTrack;
    /**
     * Initializes a new init segment on the demuxer/remuxer interface. Needed for discontinuities/track-switches (or at stream start)
     * Resets all internal track instances of the demuxer.
     */
    resetInitSegment(initSegment: Uint8Array | undefined, audioCodec: string, videoCodec: string, trackDuration: number): void;
    resetTimeStamp(): void;
    resetContiguity(): void;
    demux(data: Uint8Array, timeOffset: number, isSampleAes?: boolean, flush?: boolean): DemuxerResult;
    flush(): DemuxerResult | Promise<DemuxerResult>;
    private extractRemainingSamples;
    demuxSampleAes(data: Uint8Array, keyData: KeyData, timeOffset: number): Promise<DemuxerResult>;
    private decrypt;
    destroy(): void;
    private parseAACPES;
    private parseMPEGPES;
    private parseAC3PES;
    private parseID3PES;
}
export default TSDemuxer;
//# sourceMappingURL=tsdemuxer.d.ts.map