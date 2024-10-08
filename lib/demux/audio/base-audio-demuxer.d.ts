import { type DemuxerResult, type Demuxer, type DemuxedAudioTrack, type AudioFrame, type DemuxedMetadataTrack, type KeyData } from '../../types/demuxer';
import { RationalTimestamp } from '../../utils/timescale-conversion';
declare class BaseAudioDemuxer implements Demuxer {
    protected _audioTrack: DemuxedAudioTrack;
    protected _id3Track: DemuxedMetadataTrack;
    protected frameIndex: number;
    protected cachedData: Uint8Array | null;
    protected basePTS: number | null;
    protected initPTS: RationalTimestamp | null;
    protected lastPTS: number | null;
    resetInitSegment(initSegment: Uint8Array | undefined, audioCodec: string | undefined, videoCodec: string | undefined, trackDuration: number): void;
    resetTimeStamp(deaultTimestamp: RationalTimestamp | null): void;
    resetContiguity(): void;
    canParse(data: Uint8Array, offset: number): boolean;
    appendFrame(track: DemuxedAudioTrack, data: Uint8Array, offset: number): AudioFrame | void;
    demux(data: Uint8Array, timeOffset: number): DemuxerResult;
    demuxSampleAes(data: Uint8Array, keyData: KeyData, timeOffset: number): Promise<DemuxerResult>;
    flush(timeOffset: number): DemuxerResult;
    destroy(): void;
}
/**
 * Initialize PTS
 * <p>
 *    use timestamp unless it is undefined, NaN or Infinity
 * </p>
 */
export declare const initPTSFn: (timestamp: number | undefined, timeOffset: number, initPTS: RationalTimestamp | null) => number;
export default BaseAudioDemuxer;
//# sourceMappingURL=base-audio-demuxer.d.ts.map