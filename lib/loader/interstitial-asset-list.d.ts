import { InterstitialEvent, type InterstitialEventWithAssetList } from './interstitial-event';
import { ErrorDetails } from '../errors';
import type { ErrorData } from '../types/events';
import type { Loader, LoaderContext, LoaderStats } from '../types/loader';
import type Hls from '../hls';
export declare class AssetListLoader {
    private hls;
    constructor(hls: Hls);
    destroy(): void;
    loadAssetList(interstitial: InterstitialEventWithAssetList, liveStartPosition: number): Loader<LoaderContext> | undefined;
    assignAssetListError(interstitial: InterstitialEvent, details: ErrorDetails, error: Error, url: string, stats?: LoaderStats, networkDetails?: any): ErrorData;
}
//# sourceMappingURL=interstitial-asset-list.d.ts.map