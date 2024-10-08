import { Events } from '../events';
import { Logger } from '../utils/logger';
import type { AttachMediaSourceData, BaseTrackSet, SourceBufferName } from '../types/buffer';
import type { LevelUpdatedData, BufferAppendingData, MediaAttachingData, ManifestParsedData, BufferCodecsData, BufferEOSData, BufferFlushingData, FragParsedData, MediaDetachingData } from '../types/events';
import type { ComponentAPI } from '../types/component-api';
import type Hls from '../hls';
import type { FragmentTracker } from './fragment-tracker';
export default class BufferController extends Logger implements ComponentAPI {
    private hls;
    private fragmentTracker;
    private details;
    private _objectUrl;
    private operationQueue;
    private bufferCodecEventsTotal;
    media: HTMLMediaElement | null;
    mediaSource: MediaSource | null;
    private lastMpegAudioChunk;
    private blockedAudioAppend;
    private lastVideoAppendEnd;
    private appendSource;
    private transferData?;
    private overrides?;
    private appendErrors;
    private tracks;
    private sourceBuffers;
    constructor(hls: Hls, fragmentTracker: FragmentTracker);
    hasSourceTypes(): boolean;
    destroy(): void;
    protected registerListeners(): void;
    protected unregisterListeners(): void;
    transferMedia(): AttachMediaSourceData | null;
    private initTracks;
    private onManifestLoading;
    protected onManifestParsed(event: Events.MANIFEST_PARSED, data: ManifestParsedData): void;
    protected onMediaAttaching(event: Events.MEDIA_ATTACHING, data: MediaAttachingData): void;
    private assignMediaSource;
    private attachTransferred;
    private _onEndStreaming;
    private _onStartStreaming;
    protected onMediaDetaching(event: Events.MEDIA_DETACHING, data: MediaDetachingData): void;
    protected onBufferReset(): void;
    private resetBuffer;
    private removeBuffer;
    private resetQueue;
    protected onBufferCodecs(event: Events.BUFFER_CODECS, data: BufferCodecsData): void;
    get sourceBufferTracks(): BaseTrackSet;
    protected appendChangeType(type: SourceBufferName, container: string, codec: string): void;
    private blockAudio;
    private unblockAudio;
    protected onBufferAppending(event: Events.BUFFER_APPENDING, eventData: BufferAppendingData): void;
    private getFlushOp;
    protected onBufferFlushing(event: Events.BUFFER_FLUSHING, data: BufferFlushingData): void;
    protected onFragParsed(event: Events.FRAG_PARSED, data: FragParsedData): void;
    private onFragChanged;
    get bufferedToEnd(): boolean;
    protected onBufferEos(event: Events.BUFFER_EOS, data: BufferEOSData): void;
    protected onLevelUpdated(event: Events.LEVEL_UPDATED, { details }: LevelUpdatedData): void;
    private updateDuration;
    private onError;
    private resetAppendErrors;
    private trimBuffers;
    private flushBackBuffer;
    private flushFrontBuffer;
    /**
     * Update Media Source duration to current level duration or override to Infinity if configuration parameter
     * 'liveDurationInfinity` is set to `true`
     * More details: https://github.com/video-dev/hls.js/issues/355
     */
    private getDurationAndRange;
    private updateMediaSource;
    private get tracksReady();
    protected checkPendingTracks(): void;
    private bufferCreated;
    private createSourceBuffers;
    private getTrackCodec;
    private trackSourceBuffer;
    private _onMediaSourceOpen;
    private _onMediaSourceClose;
    private _onMediaSourceEnded;
    private _onMediaEmptied;
    private get mediaSrc();
    private onSBUpdateStart;
    private onSBUpdateEnd;
    private onSBUpdateError;
    private removeExecutor;
    private appendExecutor;
    private blockUntilOpen;
    private isUpdating;
    private isQueued;
    private isPending;
    private blockBuffers;
    private stepOperationQueue;
    private append;
    private appendBlocker;
    private currentOp;
    private executeNext;
    private shiftAndExecuteNext;
    private get pendingTrackCount();
    private get sourceBufferCount();
    private get sourceBufferTypes();
    private addBufferListener;
    private removeBufferListeners;
}
//# sourceMappingURL=buffer-controller.d.ts.map