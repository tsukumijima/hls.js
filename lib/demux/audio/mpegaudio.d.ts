/**
 *  MPEG parser helper
 */
import type { DemuxedAudioTrack } from '../../types/demuxer';
export declare function appendFrame(track: DemuxedAudioTrack, data: Uint8Array, offset: number, pts: number, frameIndex: number): {
    sample: {
        unit: Uint8Array;
        pts: number;
        dts: number;
    };
    length: number;
    missing: number;
} | undefined;
export declare function parseHeader(data: Uint8Array, offset: number): {
    sampleRate: number;
    channelCount: number;
    frameLength: number;
    samplesPerFrame: number;
} | undefined;
export declare function isHeaderPattern(data: Uint8Array, offset: number): boolean;
export declare function isHeader(data: Uint8Array, offset: number): boolean;
export declare function canParse(data: Uint8Array, offset: number): boolean;
export declare function probe(data: Uint8Array, offset: number): boolean;
//# sourceMappingURL=mpegaudio.d.ts.map