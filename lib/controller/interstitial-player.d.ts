import type Hls from '../hls';
import type { HlsConfig } from '../config';
import { type InterstitialAssetId, type InterstitialAssetItem, type InterstitialEvent, type InterstitialId } from '../loader/interstitial-event';
import { type HlsListeners } from '../events';
import type { BufferCodecsData, MediaAttachingData } from '../types/events';
export declare class HlsAssetPlayer {
    readonly hls: Hls;
    readonly interstitial: InterstitialEvent;
    readonly assetItem: InterstitialAssetItem;
    tracks: Partial<BufferCodecsData> | null;
    private hasDetails;
    private mediaAttached;
    private playoutOffset;
    constructor(HlsPlayerClass: typeof Hls, userConfig: Partial<HlsConfig>, interstitial: InterstitialEvent, assetItem: InterstitialAssetItem);
    private checkPlayout;
    get destroyed(): boolean;
    get assetId(): InterstitialAssetId;
    get interstitialId(): InterstitialId;
    get media(): HTMLMediaElement | null;
    get bufferedEnd(): number;
    get currentTime(): number;
    get duration(): number;
    get remaining(): number;
    get timelineOffset(): number;
    set timelineOffset(value: number);
    private getAssetTime;
    private removeMediaListeners;
    destroy(): void;
    attachMedia(data: HTMLMediaElement | MediaAttachingData): void;
    detachMedia(): void;
    resumeBuffering(): void;
    pauseBuffering(): void;
    transferMedia(): import("../hls").AttachMediaSourceData | null;
    on<E extends keyof HlsListeners, Context = undefined>(event: E, listener: HlsListeners[E], context?: Context): void;
    once<E extends keyof HlsListeners, Context = undefined>(event: E, listener: HlsListeners[E], context?: Context): void;
    off<E extends keyof HlsListeners, Context = undefined>(event: E, listener: HlsListeners[E], context?: Context): void;
    toString(): string;
}
//# sourceMappingURL=interstitial-player.d.ts.map