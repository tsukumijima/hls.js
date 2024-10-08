import KeyLoader from './loader/key-loader';
import StreamController from './controller/stream-controller';
import { type ILogger } from './utils/logger';
import { Events } from './events';
import { MetadataSchema } from './types/demuxer';
import { ErrorTypes, ErrorDetails } from './errors';
import { type HdcpLevel, type Level } from './types/level';
import type { HlsEventEmitter, HlsListeners } from './events';
import type AudioTrackController from './controller/audio-track-controller';
import type AbrController from './controller/abr-controller';
import type EwmaBandWidthEstimator from './utils/ewma-bandwidth-estimator';
import type BufferController from './controller/buffer-controller';
import type CapLevelController from './controller/cap-level-controller';
import type CMCDController from './controller/cmcd-controller';
import type EMEController from './controller/eme-controller';
import type SubtitleTrackController from './controller/subtitle-track-controller';
import type { AudioSelectionOption, MediaPlaylist, SubtitleSelectionOption, VideoSelectionOption } from './types/media-playlist';
import type { AttachMediaSourceData } from './types/buffer';
import type { HlsConfig } from './config';
import type { BufferInfo } from './utils/buffer-helper';
import type AudioStreamController from './controller/audio-stream-controller';
import type BasePlaylistController from './controller/base-playlist-controller';
import type BaseStreamController from './controller/base-stream-controller';
import type ContentSteeringController from './controller/content-steering-controller';
import type InterstitialsController from './controller/interstitials-controller';
import type ErrorController from './controller/error-controller';
import type FPSController from './controller/fps-controller';
import type { MediaAttachingData } from './types/events';
import type { InterstitialsManager } from './controller/interstitials-controller';
import type Decrypter from './crypt/decrypter';
import type FragmentLoader from './loader/fragment-loader';
import type { LevelDetails } from './loader/level-details';
import type TaskLoop from './task-loop';
import type TransmuxerInterface from './demux/transmuxer-interface';
import { MediaDecodingInfo } from './utils/mediacapabilities-helper';
/**
 * The `Hls` class is the core of the HLS.js library used to instantiate player instances.
 * @public
 */
export default class Hls implements HlsEventEmitter {
    private static defaultConfig;
    /**
     * The runtime configuration used by the player. At instantiation this is combination of `hls.userConfig` merged over `Hls.DefaultConfig`.
     */
    readonly config: HlsConfig;
    /**
     * The configuration object provided on player instantiation.
     */
    readonly userConfig: Partial<HlsConfig>;
    /**
     * The logger functions used by this player instance, configured on player instantiation.
     */
    readonly logger: ILogger;
    private coreComponents;
    private networkControllers;
    private _emitter;
    private _autoLevelCapping;
    private _maxHdcpLevel;
    private abrController;
    private bufferController;
    private capLevelController;
    private latencyController;
    private levelController;
    private streamController;
    private audioTrackController?;
    private subtitleTrackController?;
    private interstitialsController?;
    private emeController?;
    private cmcdController?;
    private _media;
    private _url;
    private triggeringException?;
    private _sessionId?;
    /**
     * Get the video-dev/hls.js package version.
     */
    static get version(): string;
    /**
     * Check if the required MediaSource Extensions are available.
     */
    static isMSESupported(): boolean;
    /**
     * Check if MediaSource Extensions are available and isTypeSupported checks pass for any baseline codecs.
     */
    static isSupported(): boolean;
    /**
     * Get the MediaSource global used for MSE playback (ManagedMediaSource, MediaSource, or WebKitMediaSource).
     */
    static getMediaSource(): typeof MediaSource | undefined;
    static get Events(): typeof Events;
    static get MetadataSchema(): typeof MetadataSchema;
    static get ErrorTypes(): typeof ErrorTypes;
    static get ErrorDetails(): typeof ErrorDetails;
    /**
     * Get the default configuration applied to new instances.
     */
    static get DefaultConfig(): HlsConfig;
    /**
     * Replace the default configuration applied to new instances.
     */
    static set DefaultConfig(defaultConfig: HlsConfig);
    /**
     * Creates an instance of an HLS client that can attach to exactly one `HTMLMediaElement`.
     * @param userConfig - Configuration options applied over `Hls.DefaultConfig`
     */
    constructor(userConfig?: Partial<HlsConfig>);
    createController(ControllerClass: any, components: any): any;
    on<E extends keyof HlsListeners, Context = undefined>(event: E, listener: HlsListeners[E], context?: Context): void;
    once<E extends keyof HlsListeners, Context = undefined>(event: E, listener: HlsListeners[E], context?: Context): void;
    removeAllListeners<E extends keyof HlsListeners>(event?: E | undefined): void;
    off<E extends keyof HlsListeners, Context = undefined>(event: E, listener?: HlsListeners[E] | undefined, context?: Context, once?: boolean | undefined): void;
    listeners<E extends keyof HlsListeners>(event: E): HlsListeners[E][];
    emit<E extends keyof HlsListeners>(event: E, name: E, eventObject: Parameters<HlsListeners[E]>[1]): boolean;
    trigger<E extends keyof HlsListeners>(event: E, eventObject: Parameters<HlsListeners[E]>[1]): boolean;
    listenerCount<E extends keyof HlsListeners>(event: E): number;
    /**
     * Dispose of the instance
     */
    destroy(): void;
    /**
     * Attaches Hls.js to a media element
     */
    attachMedia(data: HTMLMediaElement | MediaAttachingData): void;
    /**
     * Detach Hls.js from the media
     */
    detachMedia(): void;
    /**
     * Detach HTMLMediaElement, MediaSource, and SourceBuffers without reset, for attaching to another instance
     */
    transferMedia(): AttachMediaSourceData | null;
    /**
     * Set the source URL. Can be relative or absolute.
     */
    loadSource(url: string): void;
    /**
     * Gets the currently loaded URL
     */
    get url(): string | null;
    /**
     * Whether or not enough has been buffered to seek to start position or use `media.currentTime` to determine next load position
     */
    get hasEnoughToStart(): boolean;
    /**
     * Get the startPosition set on startLoad(position) or on autostart with config.startPosition
     */
    get startPosition(): number;
    /**
     * Start loading data from the stream source.
     * Depending on default config, client starts loading automatically when a source is set.
     *
     * @param startPosition - Set the start position to stream from.
     * Defaults to -1 (None: starts from earliest point)
     */
    startLoad(startPosition?: number, skipSeekToStartPosition?: boolean): void;
    /**
     * Stop loading of any stream data.
     */
    stopLoad(): void;
    /**
     * Returns state of fragment loading toggled by calling `pauseBuffering()` and `resumeBuffering()`.
     */
    get bufferingEnabled(): boolean;
    /**
     * Resumes stream controller segment loading after `pauseBuffering` has been called.
     */
    resumeBuffering(): void;
    /**
     * Prevents stream controller from loading new segments until `resumeBuffering` is called.
     * This allows for media buffering to be paused without interupting playlist loading.
     */
    pauseBuffering(): void;
    /**
     * Swap through possible audio codecs in the stream (for example to switch from stereo to 5.1)
     */
    swapAudioCodec(): void;
    /**
     * When the media-element fails, this allows to detach and then re-attach it
     * as one call (convenience method).
     *
     * Automatic recovery of media-errors by this process is configurable.
     */
    recoverMediaError(): void;
    removeLevel(levelIndex: number): void;
    /**
     * @returns a UUID for this player instance
     */
    get sessionId(): string;
    /**
     * @returns an array of levels (variants) sorted by HDCP-LEVEL, RESOLUTION (height), FRAME-RATE, CODECS, VIDEO-RANGE, and BANDWIDTH
     */
    get levels(): Level[];
    get latestLevelDetails(): LevelDetails | null;
    /**
     * Index of quality level (variant) currently played
     */
    get currentLevel(): number;
    /**
     * Set quality level index immediately. This will flush the current buffer to replace the quality asap. That means playback will interrupt at least shortly to re-buffer and re-sync eventually. Set to -1 for automatic level selection.
     */
    set currentLevel(newLevel: number);
    /**
     * Index of next quality level loaded as scheduled by stream controller.
     */
    get nextLevel(): number;
    /**
     * Set quality level index for next loaded data.
     * This will switch the video quality asap, without interrupting playback.
     * May abort current loading of data, and flush parts of buffer (outside currently played fragment region).
     * @param newLevel - Pass -1 for automatic level selection
     */
    set nextLevel(newLevel: number);
    /**
     * Return the quality level of the currently or last (of none is loaded currently) segment
     */
    get loadLevel(): number;
    /**
     * Set quality level index for next loaded data in a conservative way.
     * This will switch the quality without flushing, but interrupt current loading.
     * Thus the moment when the quality switch will appear in effect will only be after the already existing buffer.
     * @param newLevel - Pass -1 for automatic level selection
     */
    set loadLevel(newLevel: number);
    /**
     * get next quality level loaded
     */
    get nextLoadLevel(): number;
    /**
     * Set quality level of next loaded segment in a fully "non-destructive" way.
     * Same as `loadLevel` but will wait for next switch (until current loading is done).
     */
    set nextLoadLevel(level: number);
    /**
     * Return "first level": like a default level, if not set,
     * falls back to index of first level referenced in manifest
     */
    get firstLevel(): number;
    /**
     * Sets "first-level", see getter.
     */
    set firstLevel(newLevel: number);
    /**
     * Return the desired start level for the first fragment that will be loaded.
     * The default value of -1 indicates automatic start level selection.
     * Setting hls.nextAutoLevel without setting a startLevel will result in
     * the nextAutoLevel value being used for one fragment load.
     */
    get startLevel(): number;
    /**
     * set  start level (level of first fragment that will be played back)
     * if not overrided by user, first level appearing in manifest will be used as start level
     * if -1 : automatic start level selection, playback will start from level matching download bandwidth
     * (determined from download of first segment)
     */
    set startLevel(newLevel: number);
    /**
     * Whether level capping is enabled.
     * Default value is set via `config.capLevelToPlayerSize`.
     */
    get capLevelToPlayerSize(): boolean;
    /**
     * Enables or disables level capping. If disabled after previously enabled, `nextLevelSwitch` will be immediately called.
     */
    set capLevelToPlayerSize(shouldStartCapping: boolean);
    /**
     * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
     */
    get autoLevelCapping(): number;
    /**
     * Returns the current bandwidth estimate in bits per second, when available. Otherwise, `NaN` is returned.
     */
    get bandwidthEstimate(): number;
    set bandwidthEstimate(abrEwmaDefaultEstimate: number);
    get abrEwmaDefaultEstimate(): number;
    /**
     * get time to first byte estimate
     * @type {number}
     */
    get ttfbEstimate(): number;
    /**
     * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
     */
    set autoLevelCapping(newLevel: number);
    get maxHdcpLevel(): HdcpLevel;
    set maxHdcpLevel(value: HdcpLevel);
    /**
     * True when automatic level selection enabled
     */
    get autoLevelEnabled(): boolean;
    /**
     * Level set manually (if any)
     */
    get manualLevel(): number;
    /**
     * min level selectable in auto mode according to config.minAutoBitrate
     */
    get minAutoLevel(): number;
    /**
     * max level selectable in auto mode according to autoLevelCapping
     */
    get maxAutoLevel(): number;
    get firstAutoLevel(): number;
    /**
     * next automatically selected quality level
     */
    get nextAutoLevel(): number;
    /**
     * this setter is used to force next auto level.
     * this is useful to force a switch down in auto mode:
     * in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
     * forced value is valid for one fragment. upon successful frag loading at forced level,
     * this value will be resetted to -1 by ABR controller.
     */
    set nextAutoLevel(nextLevel: number);
    /**
     * get the datetime value relative to media.currentTime for the active level Program Date Time if present
     */
    get playingDate(): Date | null;
    get mainForwardBufferInfo(): BufferInfo | null;
    get maxBufferLength(): number;
    /**
     * Find and select the best matching audio track, making a level switch when a Group change is necessary.
     * Updates `hls.config.audioPreference`. Returns the selected track, or null when no matching track is found.
     */
    setAudioOption(audioOption: MediaPlaylist | AudioSelectionOption | undefined): MediaPlaylist | null;
    /**
     * Find and select the best matching subtitle track, making a level switch when a Group change is necessary.
     * Updates `hls.config.subtitlePreference`. Returns the selected track, or null when no matching track is found.
     */
    setSubtitleOption(subtitleOption: MediaPlaylist | SubtitleSelectionOption | undefined): MediaPlaylist | null;
    /**
     * Get the complete list of audio tracks across all media groups
     */
    get allAudioTracks(): MediaPlaylist[];
    /**
     * Get the list of selectable audio tracks
     */
    get audioTracks(): MediaPlaylist[];
    /**
     * index of the selected audio track (index in audio track lists)
     */
    get audioTrack(): number;
    /**
     * selects an audio track, based on its index in audio track lists
     */
    set audioTrack(audioTrackId: number);
    /**
     * get the complete list of subtitle tracks across all media groups
     */
    get allSubtitleTracks(): MediaPlaylist[];
    /**
     * get alternate subtitle tracks list from playlist
     */
    get subtitleTracks(): MediaPlaylist[];
    /**
     * index of the selected subtitle track (index in subtitle track lists)
     */
    get subtitleTrack(): number;
    get media(): HTMLMediaElement | null;
    /**
     * select an subtitle track, based on its index in subtitle track lists
     */
    set subtitleTrack(subtitleTrackId: number);
    /**
     * Whether subtitle display is enabled or not
     */
    get subtitleDisplay(): boolean;
    /**
     * Enable/disable subtitle display rendering
     */
    set subtitleDisplay(value: boolean);
    /**
     * get mode for Low-Latency HLS loading
     */
    get lowLatencyMode(): boolean;
    /**
     * Enable/disable Low-Latency HLS part playlist and segment loading, and start live streams at playlist PART-HOLD-BACK rather than HOLD-BACK.
     */
    set lowLatencyMode(mode: boolean);
    /**
     * Position (in seconds) of live sync point (ie edge of live position minus safety delay defined by ```hls.config.liveSyncDuration```)
     * @returns null prior to loading live Playlist
     */
    get liveSyncPosition(): number | null;
    /**
     * Estimated position (in seconds) of live edge (ie edge of live playlist plus time sync playlist advanced)
     * @returns 0 before first playlist is loaded
     */
    get latency(): number;
    /**
     * maximum distance from the edge before the player seeks forward to ```hls.liveSyncPosition```
     * configured using ```liveMaxLatencyDurationCount``` (multiple of target duration) or ```liveMaxLatencyDuration```
     * @returns 0 before first playlist is loaded
     */
    get maxLatency(): number;
    /**
     * target distance from the edge as calculated by the latency controller
     */
    get targetLatency(): number | null;
    set targetLatency(latency: number);
    /**
     * the rate at which the edge of the current live playlist is advancing or 1 if there is none
     */
    get drift(): number | null;
    /**
     * set to true when startLoad is called before MANIFEST_PARSED event
     */
    get forceStartLoad(): boolean;
    /**
     * ContentSteering pathwayPriority getter/setter
     */
    get pathwayPriority(): string[] | null;
    set pathwayPriority(pathwayPriority: string[]);
    /**
     * returns true when all SourceBuffers are buffered to the end
     */
    get bufferedToEnd(): boolean;
    /**
     * returns Interstitials Program Manager
     */
    get interstitialsManager(): InterstitialsManager | null;
    /**
     * returns mediaCapabilities.decodingInfo for a variant/rendition
     */
    getMediaDecodingInfo(level: Level, audioTracks?: MediaPlaylist[]): Promise<MediaDecodingInfo>;
}
export type { AudioSelectionOption, SubtitleSelectionOption, VideoSelectionOption, MediaPlaylist, ErrorDetails, ErrorTypes, Events, Level, LevelDetails, HlsListeners, HlsEventEmitter, HlsConfig, BufferInfo, HdcpLevel, AbrController, AudioStreamController, AudioTrackController, BasePlaylistController, BaseStreamController, BufferController, CapLevelController, CMCDController, ContentSteeringController, EMEController, ErrorController, FPSController, InterstitialsController, StreamController, SubtitleTrackController, EwmaBandWidthEstimator, InterstitialsManager, Decrypter, FragmentLoader, KeyLoader, TaskLoop, TransmuxerInterface, };
export type { ABRControllerConfig, BufferControllerConfig, CapLevelControllerConfig, CMCDControllerConfig, EMEControllerConfig, DRMSystemConfiguration, DRMSystemsConfiguration, DRMSystemOptions, FPSControllerConfig, FragmentLoaderConfig, FragmentLoaderConstructor, HlsLoadPolicies, LevelControllerConfig, LoaderConfig, LoadPolicy, MP4RemuxerConfig, PlaylistLoaderConfig, PlaylistLoaderConstructor, RetryConfig, SelectionPreferences, StreamControllerConfig, LatencyControllerConfig, MetadataControllerConfig, TimelineControllerConfig, TSDemuxerConfig, } from './config';
export type { MediaKeySessionContext } from './controller/eme-controller';
export type { FragmentState, FragmentTracker, } from './controller/fragment-tracker';
export type { PathwayClone, SteeringManifest, UriReplacement, } from './controller/content-steering-controller';
export type { NetworkErrorAction, ErrorActionFlags, IErrorAction, } from './controller/error-controller';
export type { HlsAssetPlayer } from './controller/interstitial-player';
export type { PlayheadTimes } from './controller/interstitials-controller';
export type { InterstitialScheduleDurations, InterstitialScheduleEventItem, InterstitialScheduleItem, InterstitialSchedulePrimaryItem, } from './controller/interstitials-schedule';
export type { SubtitleStreamController } from './controller/subtitle-stream-controller';
export type { TimelineController } from './controller/timeline-controller';
export type { DecrypterAesMode } from './crypt/decrypter-aes-mode';
export type { DateRange, DateRangeCue } from './loader/date-range';
export type { LoadStats } from './loader/load-stats';
export type { LevelKey } from './loader/level-key';
export type { BaseSegment, Fragment, MediaFragment, Part, ElementaryStreams, ElementaryStreamTypes, ElementaryStreamInfo, } from './loader/fragment';
export type { FragLoadFailResult, FragmentLoadProgressCallback, LoadError, } from './loader/fragment-loader';
export type { KeyLoaderInfo } from './loader/key-loader';
export type { DecryptData } from './loader/level-key';
export type { AssetListJSON, BaseData, InterstitialAssetId, InterstitialAssetItem, InterstitialEvent, InterstitialEventWithAssetList, InterstitialId, PlaybackRestrictions, SnapOptions, TimelineOccupancy, } from './loader/interstitial-event';
export type { ParsedMultivariantPlaylist } from './loader/m3u8-parser';
export type { AttachMediaSourceData, BaseTrack, BaseTrackSet, BufferCreatedTrack, BufferCreatedTrackSet, ExtendedSourceBuffer, MediaOverrides, ParsedTrack, SourceBufferName, SourceBufferListener, SourceBufferTrack, SourceBufferTrackSet, } from './types/buffer';
export type { ComponentAPI, AbrComponentAPI, NetworkComponentAPI, } from './types/component-api';
export type { TrackLoadingData, TrackLoadedData, AssetListLoadedData, AssetListLoadingData, AudioTrackLoadedData, AudioTrackUpdatedData, AudioTracksUpdatedData, AudioTrackSwitchedData, AudioTrackSwitchingData, BackBufferData, BufferAppendedData, BufferAppendingData, BufferCodecsData, BufferCreatedData, BufferEOSData, BufferFlushedData, BufferFlushingData, CuesParsedData, ErrorData, FPSDropData, FPSDropLevelCappingData, FragBufferedData, FragChangedData, FragDecryptedData, FragLoadedData, FragLoadEmergencyAbortedData, FragLoadingData, FragParsedData, FragParsingInitSegmentData, FragParsingMetadataData, FragParsingUserdataData, InitPTSFoundData, KeyLoadedData, KeyLoadingData, LevelLoadedData, LevelLoadingData, LevelPTSUpdatedData, LevelsUpdatedData, LevelSwitchedData, LevelSwitchingData, LevelUpdatedData, LiveBackBufferData, ContentSteeringOptions, ManifestLoadedData, ManifestLoadingData, ManifestParsedData, MaxAutoLevelUpdatedData, MediaAttachedData, MediaAttachingData, MediaDetachedData, MediaDetachingData, MediaEndedData, NonNativeTextTrack, NonNativeTextTracksData, PartsLoadedData, SteeringManifestLoadedData, SubtitleFragProcessedData, SubtitleTrackLoadedData, SubtitleTrackUpdatedData, SubtitleTracksUpdatedData, SubtitleTrackSwitchData, InterstitialsUpdatedData, InterstitialsBufferedToBoundaryData, InterstitialAssetPlayerCreatedData, InterstitialStartedData, InterstitialEndedData, InterstitialAssetStartedData, InterstitialAssetEndedData, InterstitialAssetErrorData, InterstitialsPrimaryResumed, } from './types/events';
export type { MetadataSample, MetadataSchema, UserdataSample, } from './types/demuxer';
export type { InitSegmentData, RemuxedMetadata, RemuxedTrack, RemuxedUserdata, RemuxerResult, } from './types/remuxer';
export type { AttrList } from './utils/attr-list';
export type { Bufferable } from './utils/buffer-helper';
export type { CaptionScreen } from './utils/cea-608-parser';
export type { CuesInterface } from './utils/cues';
export type { HdcpLevels, HlsSkip, HlsUrlParameters, LevelAttributes, LevelParsed, VariableMap, VideoRange, VideoRangeValues, } from './types/level';
export type { PlaylistLevelType, HlsChunkPerformanceTiming, HlsPerformanceTiming, HlsProgressivePerformanceTiming, PlaylistContextType, PlaylistLoaderContext, FragmentLoaderContext, KeyLoaderContext, Loader, LoaderStats, LoaderContext, LoaderResponse, LoaderConfiguration, LoaderCallbacks, LoaderOnProgress, LoaderOnAbort, LoaderOnError, LoaderOnSuccess, LoaderOnTimeout, } from './types/loader';
export type { ILogFunction, ILogger, Logger } from './utils/logger';
export type { MediaAttributes, MediaPlaylistType, MainPlaylistType, AudioPlaylistType, SubtitlePlaylistType, } from './types/media-playlist';
export type { Track, TrackSet } from './types/track';
export type { ChunkMetadata, TransmuxerResult } from './types/transmuxer';
export type { MediaDecodingInfo } from './utils/mediacapabilities-helper';
export type { MediaKeyFunc, KeySystems, KeySystemFormats, } from './utils/mediakeys-helper';
export type { RationalTimestamp } from './utils/timescale-conversion';
//# sourceMappingURL=hls.d.ts.map