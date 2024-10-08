import BaseStreamController from './base-stream-controller';
import { Events } from '../events';
import { BufferInfo } from '../utils/buffer-helper';
import { Fragment, MediaFragment } from '../loader/fragment';
import type { NetworkComponentAPI } from '../types/component-api';
import type Hls from '../hls';
import type { Level } from '../types/level';
import type { FragmentTracker } from './fragment-tracker';
import type KeyLoader from '../loader/key-loader';
import type { ErrorData, FragLoadedData, MediaAttachedData, MediaDetachingData } from '../types/events';
export default class StreamController extends BaseStreamController implements NetworkComponentAPI {
    private audioCodecSwap;
    private gapController;
    private level;
    private _forceStartLoad;
    private _hasEnoughToStart;
    private altAudio;
    private audioOnly;
    private fragPlaying;
    private fragLastKbps;
    private couldBacktrack;
    private backtrackFragment;
    private audioCodecSwitch;
    private videoBuffer;
    constructor(hls: Hls, fragmentTracker: FragmentTracker, keyLoader: KeyLoader);
    protected registerListeners(): void;
    protected unregisterListeners(): void;
    protected onHandlerDestroying(): void;
    startLoad(startPosition: number, skipSeekToStartPosition?: boolean): void;
    stopLoad(): void;
    protected doTick(): void;
    protected onTickEnd(): void;
    private doTickIdle;
    protected loadFragment(frag: Fragment, level: Level, targetBufferTime: number): void;
    private getBufferedFrag;
    private followingBufferedFrag;
    immediateLevelSwitch(): void;
    /**
     * try to switch ASAP without breaking video playback:
     * in order to ensure smooth but quick level switching,
     * we need to find the next flushable buffer range
     * we should take into account new segment fetch time
     */
    nextLevelSwitch(): void;
    private abortCurrentFrag;
    protected flushMainBuffer(startOffset: number, endOffset: number): void;
    protected onMediaAttached(event: Events.MEDIA_ATTACHED, data: MediaAttachedData): void;
    protected onMediaDetaching(event: Events.MEDIA_DETACHING, data: MediaDetachingData): void;
    private onMediaPlaying;
    private onMediaSeeked;
    protected triggerEnded(): void;
    protected onManifestLoading(): void;
    private onManifestParsed;
    private onLevelLoading;
    private onLevelLoaded;
    private synchronizeToLiveEdge;
    protected _handleFragmentLoadProgress(data: FragLoadedData): void;
    private onAudioTrackSwitching;
    private onAudioTrackSwitched;
    private onBufferCreated;
    private onFragBuffered;
    get hasEnoughToStart(): boolean;
    protected onError(event: Events.ERROR, data: ErrorData): void;
    private checkBuffer;
    private onFragLoadEmergencyAborted;
    private onBufferFlushed;
    private onLevelsUpdated;
    swapAudioCodec(): void;
    /**
     * Seeks to the set startPosition if not equal to the mediaElement's current time.
     */
    protected seekToStartPos(): void;
    private _getAudioCodec;
    private _loadBitrateTestFrag;
    private _handleTransmuxComplete;
    private _bufferInitSegment;
    getMainFwdBufferInfo(): BufferInfo | null;
    get maxBufferLength(): number;
    private backtrack;
    private checkFragmentChanged;
    get nextLevel(): number;
    get currentFrag(): Fragment | null;
    get currentProgramDateTime(): Date | null;
    get currentLevel(): number;
    get nextBufferedFrag(): MediaFragment | null;
    get forceStartLoad(): boolean;
}
//# sourceMappingURL=stream-controller.d.ts.map