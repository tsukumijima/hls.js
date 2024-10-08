import { LevelKey } from './level-key';
import { LoadStats } from './load-stats';
import { AttrList } from '../utils/attr-list';
import type { FragmentLoaderContext, KeyLoaderContext, Loader, PlaylistLevelType } from '../types/loader';
import type { KeySystemFormats } from '../utils/mediakeys-helper';
export declare const enum ElementaryStreamTypes {
    AUDIO = "audio",
    VIDEO = "video",
    AUDIOVIDEO = "audiovideo"
}
export interface ElementaryStreamInfo {
    startPTS: number;
    endPTS: number;
    startDTS: number;
    endDTS: number;
    partial?: boolean;
}
export type ElementaryStreams = Record<ElementaryStreamTypes, ElementaryStreamInfo | null>;
export declare class BaseSegment {
    private _byteRange;
    private _url;
    readonly baseurl: string;
    relurl?: string;
    elementaryStreams: ElementaryStreams;
    constructor(baseurl: string);
    setByteRange(value: string, previous?: BaseSegment): void;
    get byteRange(): [number, number] | [];
    get byteRangeStartOffset(): number | undefined;
    get byteRangeEndOffset(): number | undefined;
    get url(): string;
    set url(value: string);
    clearElementaryStreamInfo(): void;
}
export interface MediaFragment extends Fragment {
    sn: number;
}
/**
 * Object representing parsed data from an HLS Segment. Found in {@link hls.js#LevelDetails.fragments}.
 */
export declare class Fragment extends BaseSegment {
    private _decryptdata;
    rawProgramDateTime: string | null;
    programDateTime: number | null;
    tagList: Array<string[]>;
    duration: number;
    sn: number | 'initSegment';
    levelkeys?: {
        [key: string]: LevelKey;
    };
    readonly type: PlaylistLevelType;
    loader: Loader<FragmentLoaderContext> | null;
    keyLoader: Loader<KeyLoaderContext> | null;
    level: number;
    cc: number;
    startPTS?: number;
    endPTS?: number;
    startDTS?: number;
    endDTS?: number;
    start: number;
    playlistOffset: number;
    deltaPTS?: number;
    maxStartPTS?: number;
    minEndPTS?: number;
    stats: LoadStats;
    data?: Uint8Array;
    bitrateTest: boolean;
    title: string | null;
    initSegment: Fragment | null;
    endList?: boolean;
    gap?: boolean;
    urlId: number;
    constructor(type: PlaylistLevelType, baseurl: string);
    get decryptdata(): LevelKey | null;
    get end(): number;
    get endProgramDateTime(): number | null;
    get encrypted(): boolean;
    setKeyFormat(keyFormat: KeySystemFormats): void;
    abortRequests(): void;
    setElementaryStreamInfo(type: ElementaryStreamTypes, startPTS: number, endPTS: number, startDTS: number, endDTS: number, partial?: boolean): void;
}
/**
 * Object representing parsed data from an HLS Partial Segment. Found in {@link hls.js#LevelDetails.partList}.
 */
export declare class Part extends BaseSegment {
    readonly fragOffset: number;
    readonly duration: number;
    readonly gap: boolean;
    readonly independent: boolean;
    readonly relurl: string;
    readonly fragment: MediaFragment;
    readonly index: number;
    stats: LoadStats;
    constructor(partAttrs: AttrList, frag: MediaFragment, baseurl: string, index: number, previous?: Part);
    get start(): number;
    get end(): number;
    get loaded(): boolean;
}
//# sourceMappingURL=fragment.d.ts.map