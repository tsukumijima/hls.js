import type { MediaPlaylist } from './media-playlist';
import type { LevelDetails } from '../loader/level-details';
import type { AttrList } from '../utils/attr-list';
import type { MediaDecodingInfo } from '../utils/mediacapabilities-helper';
export interface LevelParsed {
    attrs: LevelAttributes;
    audioCodec?: string;
    bitrate: number;
    details?: LevelDetails;
    height?: number;
    id?: number;
    name: string;
    textCodec?: string;
    unknownCodecs?: string[];
    url: string;
    videoCodec?: string;
    width?: number;
}
export interface LevelAttributes extends AttrList {
    'ALLOWED-CPC'?: string;
    AUDIO?: string;
    'AVERAGE-BANDWIDTH'?: string;
    BANDWIDTH?: string;
    'CLOSED-CAPTIONS'?: string;
    CODECS?: string;
    'FRAME-RATE'?: string;
    'HDCP-LEVEL'?: 'TYPE-0' | 'TYPE-1' | 'NONE';
    'PATHWAY-ID'?: string;
    RESOLUTION?: string;
    SCORE?: string;
    'STABLE-VARIANT-ID'?: string;
    SUBTITLES?: string;
    'SUPPLEMENTAL-CODECS'?: string;
    VIDEO?: string;
    'VIDEO-RANGE'?: VideoRange;
}
export declare const HdcpLevels: readonly ["NONE", "TYPE-0", "TYPE-1", null];
export type HdcpLevel = (typeof HdcpLevels)[number];
export declare function isHdcpLevel(value: any): value is HdcpLevel;
export declare const VideoRangeValues: readonly ["SDR", "PQ", "HLG"];
export type VideoRange = (typeof VideoRangeValues)[number];
export declare function isVideoRange(value: any): value is VideoRange;
export type VariableMap = Record<string, string>;
export declare const enum HlsSkip {
    No = "",
    Yes = "YES",
    v2 = "v2"
}
export declare function getSkipValue(details: LevelDetails): HlsSkip;
export declare class HlsUrlParameters {
    msn?: number;
    part?: number;
    skip?: HlsSkip;
    constructor(msn?: number, part?: number, skip?: HlsSkip);
    addDirectives(uri: string): string | never;
}
export declare class Level {
    readonly _attrs: LevelAttributes[];
    readonly audioCodec: string | undefined;
    readonly bitrate: number;
    readonly codecSet: string;
    readonly url: string[];
    readonly frameRate: number;
    readonly height: number;
    readonly id: number;
    readonly name: string;
    readonly videoCodec: string | undefined;
    readonly width: number;
    details?: LevelDetails;
    fragmentError: number;
    loadError: number;
    loaded?: {
        bytes: number;
        duration: number;
    };
    realBitrate: number;
    supportedPromise?: Promise<MediaDecodingInfo>;
    supportedResult?: MediaDecodingInfo;
    private _avgBitrate;
    private _audioGroups?;
    private _subtitleGroups?;
    private readonly _urlId;
    constructor(data: LevelParsed | MediaPlaylist);
    get maxBitrate(): number;
    get averageBitrate(): number;
    get attrs(): LevelAttributes;
    get codecs(): string;
    get pathwayId(): string;
    get videoRange(): VideoRange;
    get score(): number;
    get uri(): string;
    hasAudioGroup(groupId: string | undefined): boolean;
    hasSubtitleGroup(groupId: string | undefined): boolean;
    get audioGroups(): (string | undefined)[] | undefined;
    get subtitleGroups(): (string | undefined)[] | undefined;
    addGroupId(type: string, groupId: string | undefined): void;
    get urlId(): number;
    set urlId(value: number);
    get audioGroupIds(): (string | undefined)[] | undefined;
    get textGroupIds(): (string | undefined)[] | undefined;
    get audioGroupId(): string | undefined;
    get textGroupId(): string | undefined;
    addFallback(): void;
}
//# sourceMappingURL=level.d.ts.map