import { MediaFragment } from './fragment';
import { LevelDetails } from './level-details';
import { LevelKey } from './level-key';
import { AttrList } from '../utils/attr-list';
import type { MediaPlaylist } from '../types/media-playlist';
import type { PlaylistLevelType } from '../types/loader';
import type { LevelParsed, VariableMap } from '../types/level';
import type { ContentSteeringOptions } from '../types/events';
export type ParsedMultivariantPlaylist = {
    contentSteering: ContentSteeringOptions | null;
    levels: LevelParsed[];
    playlistParsingError: Error | null;
    sessionData: Record<string, AttrList> | null;
    sessionKeys: LevelKey[] | null;
    startTimeOffset: number | null;
    variableList: VariableMap | null;
    hasVariableRefs: boolean;
};
type ParsedMultivariantMediaOptions = {
    AUDIO?: MediaPlaylist[];
    SUBTITLES?: MediaPlaylist[];
    'CLOSED-CAPTIONS'?: MediaPlaylist[];
};
export default class M3U8Parser {
    static findGroup(groups: ({
        id?: string;
        audioCodec?: string;
    } | {
        id?: string;
        textCodec?: string;
    })[], mediaGroupId: string): {
        id?: string;
        audioCodec?: string;
    } | {
        id?: string;
        textCodec?: string;
    } | undefined;
    static resolve(url: any, baseUrl: any): string;
    static isMediaPlaylist(str: string): boolean;
    static parseMasterPlaylist(string: string, baseurl: string): ParsedMultivariantPlaylist;
    static parseMasterPlaylistMedia(string: string, baseurl: string, parsed: ParsedMultivariantPlaylist): ParsedMultivariantMediaOptions;
    static parseLevelPlaylist(string: string, baseurl: string, id: number, type: PlaylistLevelType, levelUrlId: number, multivariantVariableList: VariableMap | null): LevelDetails;
}
export declare function mapDateRanges(programDateTimes: MediaFragment[], details: LevelDetails): void;
export declare function assignProgramDateTime(frag: MediaFragment, prevFrag: MediaFragment | null, programDateTimes: MediaFragment[]): void;
export {};
//# sourceMappingURL=m3u8-parser.d.ts.map