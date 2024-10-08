import type { HlsEventEmitter } from '../../events';
import type { DemuxedAudioTrack, AudioFrame } from '../../types/demuxer';
type AudioConfig = {
    config: [number, number];
    samplerate: number;
    channelCount: number;
    codec: string;
    parsedCodec: string;
    manifestCodec: string | undefined;
};
type FrameHeader = {
    headerLength: number;
    frameLength: number;
};
export declare function getAudioConfig(observer: HlsEventEmitter, data: Uint8Array, offset: number, manifestCodec: string | undefined): AudioConfig | void;
export declare function isHeaderPattern(data: Uint8Array, offset: number): boolean;
export declare function getHeaderLength(data: Uint8Array, offset: number): number;
export declare function getFullFrameLength(data: Uint8Array, offset: number): number;
export declare function canGetFrameLength(data: Uint8Array, offset: number): boolean;
export declare function isHeader(data: Uint8Array, offset: number): boolean;
export declare function canParse(data: Uint8Array, offset: number): boolean;
export declare function probe(data: Uint8Array, offset: number): boolean;
export declare function initTrackConfig(track: DemuxedAudioTrack, observer: HlsEventEmitter, data: Uint8Array, offset: number, audioCodec: string | undefined): void;
export declare function getFrameDuration(samplerate: number): number;
export declare function parseFrameHeader(data: Uint8Array, offset: number): FrameHeader | void;
export declare function appendFrame(track: DemuxedAudioTrack, data: Uint8Array, offset: number, pts: number, frameIndex: number): AudioFrame;
export {};
//# sourceMappingURL=adts.d.ts.map