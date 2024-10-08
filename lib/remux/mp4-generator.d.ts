/**
 * Generate MP4 Box
 */
import type { DemuxedAudioTrack } from '../types/demuxer';
declare class MP4 {
    static types: Record<string, number[]>;
    private static HDLR_TYPES;
    private static STTS;
    private static STSC;
    private static STCO;
    private static STSZ;
    private static VMHD;
    private static SMHD;
    private static STSD;
    private static FTYP;
    private static DINF;
    static init(): void;
    static box(type: any, ...payload: Uint8Array[]): Uint8Array;
    static hdlr(type: any): Uint8Array;
    static mdat(data: any): Uint8Array;
    static mdhd(timescale: any, duration: any): Uint8Array;
    static mdia(track: any): Uint8Array;
    static mfhd(sequenceNumber: any): Uint8Array;
    static minf(track: any): Uint8Array;
    static moof(sn: any, baseMediaDecodeTime: any, track: any): Uint8Array;
    static moov(tracks: any): any;
    static mvex(tracks: any): any;
    static mvhd(timescale: any, duration: any): Uint8Array;
    static sdtp(track: any): Uint8Array;
    static stbl(track: any): Uint8Array;
    static avc1(track: any): Uint8Array;
    static esds(track: DemuxedAudioTrack): Uint8Array;
    static audioStsd(track: any): Uint8Array;
    static mp4a(track: any): Uint8Array;
    static mp3(track: any): Uint8Array;
    static ac3(track: any): Uint8Array;
    static stsd(track: any): Uint8Array;
    static tkhd(track: any): Uint8Array;
    static traf(track: any, baseMediaDecodeTime: any): Uint8Array;
    /**
     * Generate a track box.
     * @param track a track definition
     */
    static trak(track: any): Uint8Array;
    static trex(track: any): Uint8Array;
    static trun(track: any, offset: any): Uint8Array;
    static initSegment(tracks: any): Uint8Array;
    static hvc1(track: any): Uint8Array;
}
export default MP4;
//# sourceMappingURL=mp4-generator.d.ts.map