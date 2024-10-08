import type { Level, VideoRange } from '../types/level';
import type { AudioSelectionOption, MediaPlaylist, SubtitleSelectionOption, VideoSelectionOption } from '../types/media-playlist';
export type CodecSetTier = {
    minBitrate: number;
    minHeight: number;
    minFramerate: number;
    minIndex: number;
    maxScore: number;
    videoRanges: Record<string, number>;
    channels: Record<string, number>;
    hasDefaultAudio: boolean;
    fragmentError: number;
};
type AudioTrackGroup = {
    tracks: MediaPlaylist[];
    channels: Record<string, number>;
    hasDefault: boolean;
    hasAutoSelect: boolean;
};
type StartParameters = {
    codecSet: string | undefined;
    videoRanges: Array<VideoRange>;
    preferHDR: boolean;
    minFramerate: number;
    minBitrate: number;
    minIndex: number;
};
export declare function getStartCodecTier(codecTiers: Record<string, CodecSetTier>, currentVideoRange: VideoRange | undefined, currentBw: number, audioPreference: AudioSelectionOption | undefined, videoPreference: VideoSelectionOption | undefined): StartParameters;
export type AudioTracksByGroup = {
    hasDefaultAudio: boolean;
    hasAutoSelectAudio: boolean;
    groups: Record<string, AudioTrackGroup>;
};
export declare function getAudioTracksByGroup(allAudioTracks: MediaPlaylist[]): AudioTracksByGroup;
export declare function getCodecTiers(levels: Level[], audioTracksByGroup: AudioTracksByGroup, minAutoLevel: number, maxAutoLevel: number): Record<string, CodecSetTier>;
export declare function getBasicSelectionOption(option: MediaPlaylist | AudioSelectionOption | SubtitleSelectionOption | undefined): Partial<AudioSelectionOption | SubtitleSelectionOption> | undefined;
export declare function findMatchingOption(option: MediaPlaylist | AudioSelectionOption | SubtitleSelectionOption, tracks: MediaPlaylist[], matchPredicate?: (option: MediaPlaylist | AudioSelectionOption | SubtitleSelectionOption, track: MediaPlaylist) => boolean): number;
export declare function matchesOption(option: MediaPlaylist | AudioSelectionOption | SubtitleSelectionOption, track: MediaPlaylist, matchPredicate?: (option: MediaPlaylist | AudioSelectionOption | SubtitleSelectionOption, track: MediaPlaylist) => boolean): boolean;
export declare function audioMatchPredicate(option: MediaPlaylist | AudioSelectionOption, track: MediaPlaylist): boolean;
export declare function findClosestLevelWithAudioGroup(option: MediaPlaylist | AudioSelectionOption, levels: Level[], allAudioTracks: MediaPlaylist[], searchIndex: number, matchPredicate: (option: MediaPlaylist | AudioSelectionOption, track: MediaPlaylist) => boolean): number;
export {};
//# sourceMappingURL=rendition-helper.d.ts.map