/**
 * MP3 demuxer
 */
import BaseAudioDemuxer from './base-audio-demuxer';
declare class MP3Demuxer extends BaseAudioDemuxer {
    resetInitSegment(initSegment: Uint8Array | undefined, audioCodec: string | undefined, videoCodec: string | undefined, trackDuration: number): void;
    static probe(data: Uint8Array | undefined): boolean;
    canParse(data: any, offset: any): boolean;
    appendFrame(track: any, data: any, offset: any): {
        sample: {
            unit: Uint8Array;
            pts: number;
            dts: number;
        };
        length: number;
        missing: number;
    } | undefined;
}
export default MP3Demuxer;
//# sourceMappingURL=mp3demuxer.d.ts.map