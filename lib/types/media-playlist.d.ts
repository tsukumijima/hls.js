import type { AttrList } from '../utils/attr-list';
import type { LevelDetails } from '../loader/level-details';
import type { Level, VideoRange } from './level';
import type { PlaylistLevelType } from './loader';
export type AudioPlaylistType = 'AUDIO';
export type MainPlaylistType = AudioPlaylistType | 'VIDEO';
export type SubtitlePlaylistType = 'SUBTITLES' | 'CLOSED-CAPTIONS';
export type MediaPlaylistType = MainPlaylistType | SubtitlePlaylistType;
export type MediaSelection = {
    [PlaylistLevelType.MAIN]: Level;
    [PlaylistLevelType.AUDIO]?: MediaPlaylist;
    [PlaylistLevelType.SUBTITLE]?: MediaPlaylist;
};
export type VideoSelectionOption = {
    preferHDR?: boolean;
    allowedVideoRanges?: Array<VideoRange>;
    videoCodec?: string;
};
export type AudioSelectionOption = {
    lang?: string;
    assocLang?: string;
    characteristics?: string;
    channels?: string;
    name?: string;
    audioCodec?: string;
    groupId?: string;
    default?: boolean;
};
export type SubtitleSelectionOption = {
    id?: number;
    lang?: string;
    assocLang?: string;
    characteristics?: string;
    name?: string;
    groupId?: string;
    default?: boolean;
    forced?: boolean;
};
export interface MediaPlaylist {
    attrs: MediaAttributes;
    audioCodec?: string;
    autoselect: boolean;
    bitrate: number;
    channels?: string;
    characteristics?: string;
    details?: LevelDetails;
    height?: number;
    default: boolean;
    forced: boolean;
    groupId: string;
    id: number;
    instreamId?: string;
    lang?: string;
    assocLang?: string;
    name: string;
    textCodec?: string;
    unknownCodecs?: string[];
    type: MediaPlaylistType | 'main';
    url: string;
    videoCodec?: string;
    width?: number;
}
export interface MediaAttributes extends AttrList {
    'ASSOC-LANGUAGE'?: string;
    AUTOSELECT?: 'YES' | 'NO';
    CHANNELS?: string;
    CHARACTERISTICS?: string;
    DEFAULT?: 'YES' | 'NO';
    FORCED?: 'YES' | 'NO';
    'GROUP-ID': string;
    'INSTREAM-ID'?: string;
    LANGUAGE?: string;
    NAME: string;
    'PATHWAY-ID'?: string;
    'STABLE-RENDITION-ID'?: string;
    TYPE?: 'AUDIO' | 'VIDEO' | 'SUBTITLES' | 'CLOSED-CAPTIONS';
    URI?: string;
}
//# sourceMappingURL=media-playlist.d.ts.map