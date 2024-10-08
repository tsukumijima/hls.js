import { ElementaryStreamTypes } from '../loader/fragment';
import type { KeySystemIds } from './mediakeys-helper';
import type { PassthroughTrack, UserdataSample } from '../types/demuxer';
import type { DecryptData } from '../loader/level-key';
export declare const RemuxerTrackIdConfig: {
    video: number;
    audio: number;
    id3: number;
    text: number;
};
export declare function bin2str(data: Uint8Array): string;
export declare function readUint16(buffer: Uint8Array, offset: number): number;
export declare function readUint32(buffer: Uint8Array, offset: number): number;
export declare function readUint64(buffer: Uint8Array, offset: number): number;
export declare function readSint32(buffer: Uint8Array, offset: number): number;
export declare function writeUint32(buffer: Uint8Array, offset: number, value: number): void;
export declare function hasMoofData(data: Uint8Array): boolean;
export declare function findBox(data: Uint8Array, path: string[]): Uint8Array[];
type SidxInfo = {
    earliestPresentationTime: number;
    timescale: number;
    version: number;
    referencesCount: number;
    references: any[];
};
export declare function parseSegmentIndex(sidx: Uint8Array): SidxInfo | null;
/**
 * Parses an MP4 initialization segment and extracts stream type and
 * timescale values for any declared tracks. Timescale values indicate the
 * number of clock ticks per second to assume for time-based values
 * elsewhere in the MP4.
 *
 * To determine the start time of an MP4, you need two pieces of
 * information: the timescale unit and the earliest base media decode
 * time. Multiple timescales can be specified within an MP4 but the
 * base media decode time is always expressed in the timescale from
 * the media header box for the track:
 * ```
 * moov > trak > mdia > mdhd.timescale
 * moov > trak > mdia > hdlr
 * ```
 * @param initSegment the bytes of the init segment
 * @returns a hash of track type to timescale values or null if
 * the init segment is malformed.
 */
export interface InitDataTrack {
    timescale: number;
    id: number;
    codec: string;
}
type HdlrType = ElementaryStreamTypes.AUDIO | ElementaryStreamTypes.VIDEO;
export interface InitData extends Array<any> {
    [index: number]: {
        timescale: number;
        type: HdlrType;
        default?: {
            duration: number;
            flags: number;
        };
    } | undefined;
    audio?: InitDataTrack;
    video?: InitDataTrack;
    caption?: InitDataTrack;
}
export declare function parseInitSegment(initSegment: Uint8Array): InitData;
export declare function patchEncyptionData(initSegment: Uint8Array | undefined, decryptdata: DecryptData | null): Uint8Array | undefined;
export declare function parseSinf(sinf: Uint8Array): Uint8Array | null;
/**
 * Determine the base media decode start time, in seconds, for an MP4
 * fragment. If multiple fragments are specified, the earliest time is
 * returned.
 *
 * The base media decode time can be parsed from track fragment
 * metadata:
 * ```
 * moof > traf > tfdt.baseMediaDecodeTime
 * ```
 * It requires the timescale value from the mdhd to interpret.
 *
 * @param initData - a hash of track type to timescale values
 * @param fmp4 - the bytes of the mp4 fragment
 * @returns the earliest base media decode start time for the
 * fragment, in seconds
 */
export declare function getStartDTS(initData: InitData, fmp4: Uint8Array): number | null;
export declare function getDuration(data: Uint8Array, initData: InitData): number;
export declare function computeRawDurationFromSamples(trun: any): number;
export declare function offsetStartDTS(initData: InitData, fmp4: Uint8Array, timeOffset: number): void;
export declare function segmentValidRange(data: Uint8Array): SegmentedRange;
export interface SegmentedRange {
    valid: Uint8Array | null;
    remainder: Uint8Array | null;
}
export declare function appendUint8Array(data1: Uint8Array, data2: Uint8Array): Uint8Array;
export interface IEmsgParsingData {
    schemeIdUri: string;
    value: string;
    timeScale: number;
    presentationTimeDelta?: number;
    presentationTime?: number;
    eventDuration: number;
    id: number;
    payload: Uint8Array;
}
export declare function parseSamples(timeOffset: number, track: PassthroughTrack): UserdataSample[];
export declare function parseSEIMessageFromNALu(unescapedData: Uint8Array, headerSize: number, pts: number, samples: UserdataSample[]): void;
/**
 * remove Emulation Prevention bytes from a RBSP
 */
export declare function discardEPB(data: Uint8Array): Uint8Array;
export declare function parseEmsg(data: Uint8Array): IEmsgParsingData;
export declare function mp4Box(type: ArrayLike<number>, ...payload: Uint8Array[]): Uint8Array;
export declare function mp4pssh(systemId: Uint8Array, keyids: Array<Uint8Array> | null, data: Uint8Array): Uint8Array;
export type PsshData = {
    version: 0 | 1;
    systemId: KeySystemIds;
    kids: null | Uint8Array[];
    data: null | Uint8Array;
    offset: number;
    size: number;
};
export type PsshInvalidResult = {
    systemId?: undefined;
    offset: number;
    size: number;
};
export declare function parseMultiPssh(initData: ArrayBuffer): (PsshData | PsshInvalidResult)[];
export {};
//# sourceMappingURL=mp4-tools.d.ts.map