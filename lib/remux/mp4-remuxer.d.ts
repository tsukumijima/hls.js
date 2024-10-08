import type { HlsEventEmitter } from '../events';
import type { InitSegmentData, Remuxer, RemuxerResult, RemuxedMetadata, RemuxedTrack, RemuxedUserdata } from '../types/remuxer';
import { PlaylistLevelType } from '../types/loader';
import { RationalTimestamp } from '../utils/timescale-conversion';
import type { DemuxedAudioTrack, DemuxedVideoTrack, DemuxedMetadataTrack, DemuxedUserdataTrack } from '../types/demuxer';
import type { HlsConfig } from '../config';
import type { TypeSupported } from '../utils/codecs';
import type { ILogger } from '../utils/logger';
export default class MP4Remuxer implements Remuxer {
    private readonly logger;
    private readonly observer;
    private readonly config;
    private readonly typeSupported;
    private ISGenerated;
    private _initPTS;
    private _initDTS;
    private nextAvcDts;
    private nextAudioPts;
    private videoSampleDuration;
    private isAudioContiguous;
    private isVideoContiguous;
    private videoTrackConfig?;
    constructor(observer: HlsEventEmitter, config: HlsConfig, typeSupported: TypeSupported, logger: ILogger);
    destroy(): void;
    resetTimeStamp(defaultTimeStamp: RationalTimestamp | null): void;
    resetNextTimestamp(): void;
    resetInitSegment(): void;
    getVideoStartPts(videoSamples: any): any;
    remux(audioTrack: DemuxedAudioTrack, videoTrack: DemuxedVideoTrack, id3Track: DemuxedMetadataTrack, textTrack: DemuxedUserdataTrack, timeOffset: number, accurateTimeOffset: boolean, flush: boolean, playlistType: PlaylistLevelType): RemuxerResult;
    generateIS(audioTrack: DemuxedAudioTrack, videoTrack: DemuxedVideoTrack, timeOffset: number, accurateTimeOffset: boolean): InitSegmentData | undefined;
    remuxVideo(track: DemuxedVideoTrack, timeOffset: number, contiguous: boolean, audioTrackLength: number): RemuxedTrack | undefined;
    getSamplesPerFrame(track: DemuxedAudioTrack): 1024 | 1152 | 1536;
    remuxAudio(track: DemuxedAudioTrack, timeOffset: number, contiguous: boolean, accurateTimeOffset: boolean, videoTimeOffset?: number): RemuxedTrack | undefined;
}
export declare function normalizePts(value: number, reference: number | null): number;
export declare function flushTextTrackMetadataCueSamples(track: DemuxedMetadataTrack, timeOffset: number, initPTS: RationalTimestamp, initDTS: RationalTimestamp): RemuxedMetadata | undefined;
export declare function flushTextTrackUserdataCueSamples(track: DemuxedUserdataTrack, timeOffset: number, initPTS: RationalTimestamp): RemuxedUserdata | undefined;
//# sourceMappingURL=mp4-remuxer.d.ts.map