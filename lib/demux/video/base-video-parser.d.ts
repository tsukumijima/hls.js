import type { ParsedVideoSample } from '../tsdemuxer';
import type { DemuxedVideoTrack, DemuxedUserdataTrack, VideoSample, VideoSampleUnit } from '../../types/demuxer';
import type { PES } from '../tsdemuxer';
declare abstract class BaseVideoParser {
    protected VideoSample: ParsedVideoSample | null;
    protected createVideoSample(key: boolean, pts: number | undefined, dts: number | undefined): ParsedVideoSample;
    protected getLastNalUnit(samples: VideoSample[]): VideoSampleUnit | undefined;
    protected pushAccessUnit(VideoSample: ParsedVideoSample, videoTrack: DemuxedVideoTrack): void;
    abstract parsePES(track: DemuxedVideoTrack, textTrack: DemuxedUserdataTrack, pes: PES, last: boolean): any;
    protected abstract getNALuType(data: Uint8Array, offset: number): number;
    protected parseNALu(track: DemuxedVideoTrack, array: Uint8Array, endOfSegment: boolean): Array<{
        data: Uint8Array;
        type: number;
        state?: number;
    }>;
}
export default BaseVideoParser;
//# sourceMappingURL=base-video-parser.d.ts.map