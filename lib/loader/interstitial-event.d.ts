import type { DateRange, DateRangeCue } from './date-range';
import type { Loader, LoaderContext } from '../types/loader';
import type { Fragment } from './fragment';
export declare const ALIGNED_END_THRESHOLD_SECONDS = 0.02;
export type PlaybackRestrictions = {
    skip: boolean;
    jump: boolean;
};
export type SnapOptions = {
    out: boolean;
    in: boolean;
};
export declare enum TimelineOccupancy {
    Point = 0,
    Range = 1
}
export type AssetListJSON = {
    ASSETS: Array<{
        URI: string;
        DURATION: string;
    }>;
};
export interface InterstitialEventWithAssetList extends InterstitialEvent {
    assetListUrl: string;
}
export type BaseData = {
    url: string;
};
export type InterstitialId = string;
export type InterstitialAssetId = string;
export type InterstitialAssetItem = {
    parentIdentifier: InterstitialId;
    identifier: InterstitialAssetId;
    duration: number | null;
    startOffset: number;
    timelineStart: number;
    uri: string;
    error?: Error;
};
export declare function generateAssetIdentifier(interstitial: InterstitialEvent, uri: string, assetListIndex: number): string;
export declare class InterstitialEvent {
    private base;
    private _duration;
    private _timelineStart;
    private appendInPlaceDisabled?;
    appendInPlaceStarted?: boolean;
    dateRange: DateRange;
    hasPlayed: boolean;
    cumulativeDuration: number;
    resumeOffset: number;
    playoutLimit: number;
    restrictions: PlaybackRestrictions;
    snapOptions: SnapOptions;
    assetList: InterstitialAssetItem[];
    assetListLoader?: Loader<LoaderContext>;
    assetListResponse: AssetListJSON | null;
    resumeAnchor?: Fragment;
    error?: Error;
    constructor(dateRange: DateRange, base: BaseData);
    setDateRange(dateRange: DateRange): void;
    reset(): void;
    isAssetPastPlayoutLimit(assetIndex: number): boolean;
    findAssetIndex(asset: InterstitialAssetItem): number;
    get identifier(): InterstitialId;
    get startDate(): Date;
    get startTime(): number;
    get startOffset(): number;
    get resumptionOffset(): number;
    get resumeTime(): number;
    get appendInPlace(): boolean;
    set appendInPlace(value: boolean);
    get timelineStart(): number;
    set timelineStart(value: number);
    get duration(): number;
    set duration(value: number);
    get cue(): DateRangeCue;
    get timelineOccupancy(): TimelineOccupancy;
    get supplementsPrimary(): boolean;
    get contentMayVary(): boolean;
    get assetUrl(): string | undefined;
    get assetListUrl(): string | undefined;
    get baseUrl(): string;
    toString(): string;
}
export declare function getInterstitialUrl(uri: string, sessionId: string, baseUrl?: string): URL | never;
export declare function eventAssetToString(asset: InterstitialAssetItem): string;
//# sourceMappingURL=interstitial-event.d.ts.map