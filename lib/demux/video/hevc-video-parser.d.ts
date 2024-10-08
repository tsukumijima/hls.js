import BaseVideoParser from './base-video-parser';
import type { ParsedVideoSample } from '../tsdemuxer';
import type { DemuxedVideoTrack, DemuxedUserdataTrack } from '../../types/demuxer';
import type { PES } from '../tsdemuxer';
declare class HevcVideoParser extends BaseVideoParser {
    protected initVPS: Uint8Array | null;
    parsePES(track: DemuxedVideoTrack, textTrack: DemuxedUserdataTrack, pes: PES, endOfSegment: boolean): void;
    protected getNALuType(data: Uint8Array, offset: number): number;
    protected ebsp2rbsp(arr: Uint8Array): Uint8Array;
    protected pushAccessUnit(VideoSample: ParsedVideoSample, videoTrack: DemuxedVideoTrack): void;
    readVPS(vps: Uint8Array): {
        numTemporalLayers: number;
        temporalIdNested: boolean;
    };
    readSPS(sps: Uint8Array): {
        codecString: string;
        params: object;
        width: number;
        height: number;
        pixelRatio: [number, number];
    };
    readPPS(pps: Uint8Array): {
        parallelismType: number;
    };
    matchSPS(sps1: Uint8Array, sps2: Uint8Array): boolean;
}
export default HevcVideoParser;
//# sourceMappingURL=hevc-video-parser.d.ts.map