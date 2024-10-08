/**
 * MP4 demuxer
 */
import { type Demuxer, type DemuxerResult, type PassthroughTrack, type DemuxedAudioTrack, type DemuxedUserdataTrack, type DemuxedMetadataTrack, type KeyData } from '../types/demuxer';
import type { HlsEventEmitter } from '../events';
import type { HlsConfig } from '../config';
declare class MP4Demuxer implements Demuxer {
    private remainderData;
    private timeOffset;
    private config;
    private videoTrack?;
    private audioTrack?;
    private id3Track?;
    private txtTrack?;
    constructor(observer: HlsEventEmitter, config: HlsConfig);
    resetTimeStamp(): void;
    resetInitSegment(initSegment: Uint8Array | undefined, audioCodec: string | undefined, videoCodec: string | undefined, trackDuration: number): void;
    resetContiguity(): void;
    static probe(data: Uint8Array): boolean;
    demux(data: Uint8Array, timeOffset: number): DemuxerResult;
    flush(): {
        videoTrack: PassthroughTrack;
        audioTrack: DemuxedAudioTrack;
        id3Track: DemuxedMetadataTrack;
        textTrack: DemuxedUserdataTrack;
    };
    private extractID3Track;
    demuxSampleAes(data: Uint8Array, keyData: KeyData, timeOffset: number): Promise<DemuxerResult>;
    destroy(): void;
}
export default MP4Demuxer;
//# sourceMappingURL=mp4demuxer.d.ts.map