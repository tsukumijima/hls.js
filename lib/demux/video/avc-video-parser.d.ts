import BaseVideoParser from './base-video-parser';
import type { DemuxedVideoTrack, DemuxedUserdataTrack } from '../../types/demuxer';
import type { PES } from '../tsdemuxer';
import ExpGolomb from './exp-golomb';
declare class AvcVideoParser extends BaseVideoParser {
    parsePES(track: DemuxedVideoTrack, textTrack: DemuxedUserdataTrack, pes: PES, endOfSegment: boolean): void;
    protected getNALuType(data: Uint8Array, offset: number): number;
    readSliceType(data: Uint8Array): number;
    /**
     * The scaling list is optionally transmitted as part of a sequence parameter
     * set and is not relevant to transmuxing.
     * @param count the number of entries in this scaling list
     * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
     */
    skipScalingList(count: number, reader: ExpGolomb): void;
    /**
     * Read a sequence parameter set and return some interesting video
     * properties. A sequence parameter set is the H264 metadata that
     * describes the properties of upcoming video frames.
     * @returns an object with configuration parsed from the
     * sequence parameter set, including the dimensions of the
     * associated video frames.
     */
    readSPS(sps: Uint8Array): {
        width: number;
        height: number;
        pixelRatio: [number, number];
    };
}
export default AvcVideoParser;
//# sourceMappingURL=avc-video-parser.d.ts.map