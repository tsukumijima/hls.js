import type { LoaderConfig } from '../config';
import type { Fragment } from '../loader/fragment';
import type { Part } from '../loader/fragment';
import type { KeyLoaderInfo } from '../loader/key-loader';
import type { LevelDetails } from '../loader/level-details';
import type { HlsUrlParameters } from './level';
export interface LoaderContext {
    url: string;
    responseType: string;
    headers?: Record<string, string>;
    rangeStart?: number;
    rangeEnd?: number;
    progressData?: boolean;
}
export interface FragmentLoaderContext extends LoaderContext {
    frag: Fragment;
    part: Part | null;
    resetIV?: boolean;
}
export interface KeyLoaderContext extends LoaderContext {
    keyInfo: KeyLoaderInfo;
    frag: Fragment;
}
export interface LoaderConfiguration {
    loadPolicy: LoaderConfig;
    /**
     * @deprecated use LoaderConfig timeoutRetry and errorRetry maxNumRetry
     */
    maxRetry: number;
    /**
     * @deprecated use LoaderConfig maxTimeToFirstByteMs and maxLoadTimeMs
     */
    timeout: number;
    /**
     * @deprecated use LoaderConfig timeoutRetry and errorRetry retryDelayMs
     */
    retryDelay: number;
    /**
     * @deprecated use LoaderConfig timeoutRetry and errorRetry maxRetryDelayMs
     */
    maxRetryDelay: number;
    highWaterMark?: number;
}
export interface LoaderResponse {
    url: string;
    data?: string | ArrayBuffer | Object;
    code?: number;
    text?: string;
}
export interface LoaderStats {
    aborted: boolean;
    loaded: number;
    retry: number;
    total: number;
    chunkCount: number;
    bwEstimate: number;
    loading: HlsProgressivePerformanceTiming;
    parsing: HlsPerformanceTiming;
    buffering: HlsProgressivePerformanceTiming;
}
export interface HlsPerformanceTiming {
    start: number;
    end: number;
}
export interface HlsChunkPerformanceTiming extends HlsPerformanceTiming {
    executeStart: number;
    executeEnd: number;
}
export interface HlsProgressivePerformanceTiming extends HlsPerformanceTiming {
    first: number;
}
export type LoaderOnSuccess<T extends LoaderContext> = (response: LoaderResponse, stats: LoaderStats, context: T, networkDetails: any) => void;
export type LoaderOnProgress<T extends LoaderContext> = (stats: LoaderStats, context: T, data: string | ArrayBuffer, networkDetails: any) => void;
export type LoaderOnError<T extends LoaderContext> = (error: {
    code: number;
    text: string;
}, context: T, networkDetails: any, stats: LoaderStats) => void;
export type LoaderOnTimeout<T extends LoaderContext> = (stats: LoaderStats, context: T, networkDetails: any) => void;
export type LoaderOnAbort<T extends LoaderContext> = (stats: LoaderStats, context: T, networkDetails: any) => void;
export interface LoaderCallbacks<T extends LoaderContext> {
    onSuccess: LoaderOnSuccess<T>;
    onError: LoaderOnError<T>;
    onTimeout: LoaderOnTimeout<T>;
    onAbort?: LoaderOnAbort<T>;
    onProgress?: LoaderOnProgress<T>;
}
export interface Loader<T extends LoaderContext> {
    destroy(): void;
    abort(): void;
    load(context: T, config: LoaderConfiguration, callbacks: LoaderCallbacks<T>): void;
    /**
     * `getCacheAge()` is called by hls.js to get the duration that a given object
     * has been sitting in a cache proxy when playing live.  If implemented,
     * this should return a value in seconds.
     *
     * For HTTP based loaders, this should return the contents of the "age" header.
     *
     * @returns time object being lodaded
     */
    getCacheAge?: () => number | null;
    getResponseHeader?: (name: string) => string | null;
    context: T | null;
    stats: LoaderStats;
}
export declare const enum PlaylistContextType {
    MANIFEST = "manifest",
    LEVEL = "level",
    AUDIO_TRACK = "audioTrack",
    SUBTITLE_TRACK = "subtitleTrack"
}
export declare const enum PlaylistLevelType {
    MAIN = "main",
    AUDIO = "audio",
    SUBTITLE = "subtitle"
}
export interface PlaylistLoaderContext extends LoaderContext {
    type: PlaylistContextType;
    level: number | null;
    id: number | null;
    groupId?: string;
    pathwayId?: string;
    levelDetails?: LevelDetails;
    deliveryDirectives: HlsUrlParameters | null;
}
//# sourceMappingURL=loader.d.ts.map