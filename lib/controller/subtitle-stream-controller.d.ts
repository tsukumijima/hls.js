import { Events } from '../events';
import { Bufferable } from '../utils/buffer-helper';
import BaseStreamController from './base-stream-controller';
import { Level } from '../types/level';
import type { NetworkComponentAPI } from '../types/component-api';
import type Hls from '../hls';
import type { FragmentTracker } from './fragment-tracker';
import type KeyLoader from '../loader/key-loader';
import type { Fragment } from '../loader/fragment';
import type { ErrorData, FragLoadedData, MediaDetachingData } from '../types/events';
export declare class SubtitleStreamController extends BaseStreamController implements NetworkComponentAPI {
    private currentTrackId;
    private tracksBuffered;
    private mainDetails;
    constructor(hls: Hls, fragmentTracker: FragmentTracker, keyLoader: KeyLoader);
    protected onHandlerDestroying(): void;
    protected registerListeners(): void;
    protected unregisterListeners(): void;
    startLoad(startPosition: number): void;
    protected onManifestLoading(): void;
    protected onMediaDetaching(event: Events.MEDIA_DETACHING, data: MediaDetachingData): void;
    private onLevelLoaded;
    private onSubtitleFragProcessed;
    private onBufferFlushing;
    protected onError(event: Events.ERROR, data: ErrorData): void;
    private onSubtitleTracksUpdated;
    private onSubtitleTrackSwitch;
    private onSubtitleTrackLoaded;
    _handleFragmentLoadComplete(fragLoadedData: FragLoadedData): void;
    doTick(): void;
    protected loadFragment(frag: Fragment, level: Level, targetBufferTime: number): void;
    get mediaBufferTimeRanges(): Bufferable;
}
//# sourceMappingURL=subtitle-stream-controller.d.ts.map