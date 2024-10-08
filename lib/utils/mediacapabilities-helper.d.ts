import type { Level, VideoRange } from '../types/level';
import type { AudioSelectionOption } from '../types/media-playlist';
import type { AudioTracksByGroup } from './rendition-helper';
export type MediaDecodingInfo = {
    supported: boolean;
    configurations: readonly MediaDecodingConfiguration[];
    decodingInfoResults: readonly MediaCapabilitiesDecodingInfo[];
    error?: Error;
};
export declare const SUPPORTED_INFO_DEFAULT: MediaDecodingInfo;
export declare const SUPPORTED_INFO_CACHE: Record<string, Promise<MediaCapabilitiesDecodingInfo>>;
export declare function requiresMediaCapabilitiesDecodingInfo(level: Level, audioTracksByGroup: AudioTracksByGroup, currentVideoRange: VideoRange | undefined, currentFrameRate: number, currentBw: number, audioPreference: AudioSelectionOption | undefined): boolean;
export declare function getMediaDecodingInfoPromise(level: Level, audioTracksByGroup: AudioTracksByGroup, mediaCapabilities: MediaCapabilities | undefined): Promise<MediaDecodingInfo>;
//# sourceMappingURL=mediacapabilities-helper.d.ts.map