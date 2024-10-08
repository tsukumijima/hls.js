import AbrController from './controller/abr-controller';
import AudioStreamController from './controller/audio-stream-controller';
import AudioTrackController from './controller/audio-track-controller';
import { SubtitleStreamController } from './controller/subtitle-stream-controller';
import SubtitleTrackController from './controller/subtitle-track-controller';
import BufferController from './controller/buffer-controller';
import { TimelineController } from './controller/timeline-controller';
import CapLevelController from './controller/cap-level-controller';
import FPSController from './controller/fps-controller';
import EMEController, { MediaKeySessionContext } from './controller/eme-controller';
import CMCDController from './controller/cmcd-controller';
import ContentSteeringController from './controller/content-steering-controller';
import InterstitialsController from './controller/interstitials-controller';
import ErrorController from './controller/error-controller';
import type Hls from './hls';
import type { CuesInterface } from './utils/cues';
import type { ILogger } from './utils/logger';
import type { MediaKeyFunc, KeySystems } from './utils/mediakeys-helper';
import type { FragmentLoaderContext, Loader, LoaderContext, LoaderResponse, PlaylistLoaderContext } from './types/loader';
import type { AudioSelectionOption, SubtitleSelectionOption, VideoSelectionOption } from './types/media-playlist';
export type ABRControllerConfig = {
    abrEwmaFastLive: number;
    abrEwmaSlowLive: number;
    abrEwmaFastVoD: number;
    abrEwmaSlowVoD: number;
    /**
     * Default bandwidth estimate in bits/s prior to collecting fragment bandwidth samples
     */
    abrEwmaDefaultEstimate: number;
    abrEwmaDefaultEstimateMax: number;
    abrBandWidthFactor: number;
    abrBandWidthUpFactor: number;
    abrMaxWithRealBitrate: boolean;
    maxStarvationDelay: number;
    maxLoadingDelay: number;
};
export type BufferControllerConfig = {
    appendErrorMaxRetry: number;
    backBufferLength: number;
    frontBufferFlushThreshold: number;
    liveDurationInfinity: boolean;
    /**
     * @deprecated use backBufferLength
     */
    liveBackBufferLength: number | null;
};
export type CapLevelControllerConfig = {
    capLevelToPlayerSize: boolean;
};
export type CMCDControllerConfig = {
    sessionId?: string;
    contentId?: string;
    useHeaders?: boolean;
    includeKeys?: string[];
};
export type DRMSystemOptions = {
    audioRobustness?: string;
    videoRobustness?: string;
    audioEncryptionScheme?: string | null;
    videoEncryptionScheme?: string | null;
    persistentState?: MediaKeysRequirement;
    distinctiveIdentifier?: MediaKeysRequirement;
    sessionTypes?: string[];
    sessionType?: string;
};
export type DRMSystemConfiguration = {
    licenseUrl: string;
    serverCertificateUrl?: string;
    generateRequest?: (this: Hls, initDataType: string, initData: ArrayBuffer | null, keyContext: MediaKeySessionContext) => {
        initDataType: string;
        initData: ArrayBuffer | null;
    } | undefined | never;
};
export type DRMSystemsConfiguration = Partial<Record<KeySystems, DRMSystemConfiguration>>;
export type EMEControllerConfig = {
    licenseXhrSetup?: (this: Hls, xhr: XMLHttpRequest, url: string, keyContext: MediaKeySessionContext, licenseChallenge: Uint8Array) => void | Uint8Array | Promise<Uint8Array | void>;
    licenseResponseCallback?: (this: Hls, xhr: XMLHttpRequest, url: string, keyContext: MediaKeySessionContext) => ArrayBuffer;
    emeEnabled: boolean;
    widevineLicenseUrl?: string;
    drmSystems: DRMSystemsConfiguration;
    drmSystemOptions: DRMSystemOptions;
    requestMediaKeySystemAccessFunc: MediaKeyFunc | null;
};
export interface FragmentLoaderConstructor {
    new (confg: HlsConfig): Loader<FragmentLoaderContext>;
}
/**
 * @deprecated use fragLoadPolicy.default
 */
export type FragmentLoaderConfig = {
    fragLoadingTimeOut: number;
    fragLoadingMaxRetry: number;
    fragLoadingRetryDelay: number;
    fragLoadingMaxRetryTimeout: number;
};
export type FPSControllerConfig = {
    capLevelOnFPSDrop: boolean;
    fpsDroppedMonitoringPeriod: number;
    fpsDroppedMonitoringThreshold: number;
};
export type LevelControllerConfig = {
    startLevel?: number;
};
export type MP4RemuxerConfig = {
    stretchShortVideoTrack: boolean;
    maxAudioFramesDrift: number;
};
export interface PlaylistLoaderConstructor {
    new (confg: HlsConfig): Loader<PlaylistLoaderContext>;
}
/**
 * @deprecated use manifestLoadPolicy.default and playlistLoadPolicy.default
 */
export type PlaylistLoaderConfig = {
    manifestLoadingTimeOut: number;
    manifestLoadingMaxRetry: number;
    manifestLoadingRetryDelay: number;
    manifestLoadingMaxRetryTimeout: number;
    levelLoadingTimeOut: number;
    levelLoadingMaxRetry: number;
    levelLoadingRetryDelay: number;
    levelLoadingMaxRetryTimeout: number;
};
export type HlsLoadPolicies = {
    fragLoadPolicy: LoadPolicy;
    keyLoadPolicy: LoadPolicy;
    certLoadPolicy: LoadPolicy;
    playlistLoadPolicy: LoadPolicy;
    manifestLoadPolicy: LoadPolicy;
    steeringManifestLoadPolicy: LoadPolicy;
    interstitialAssetListLoadPolicy: LoadPolicy;
};
export type LoadPolicy = {
    default: LoaderConfig;
};
export type LoaderConfig = {
    maxTimeToFirstByteMs: number;
    maxLoadTimeMs: number;
    timeoutRetry: RetryConfig | null;
    errorRetry: RetryConfig | null;
};
export type RetryConfig = {
    maxNumRetry: number;
    retryDelayMs: number;
    maxRetryDelayMs: number;
    backoff?: 'exponential' | 'linear';
    shouldRetry?: (retryConfig: RetryConfig | null | undefined, retryCount: number, isTimeout: boolean, loaderResponse: LoaderResponse | undefined, retry: boolean) => boolean;
};
export type StreamControllerConfig = {
    autoStartLoad: boolean;
    startPosition: number;
    defaultAudioCodec?: string;
    initialLiveManifestSize: number;
    maxBufferLength: number;
    maxBufferSize: number;
    maxBufferHole: number;
    highBufferWatchdogPeriod: number;
    nudgeOffset: number;
    nudgeMaxRetry: number;
    maxFragLookUpTolerance: number;
    maxMaxBufferLength: number;
    startFragPrefetch: boolean;
    testBandwidth: boolean;
};
export type SelectionPreferences = {
    videoPreference?: VideoSelectionOption;
    audioPreference?: AudioSelectionOption;
    subtitlePreference?: SubtitleSelectionOption;
};
export type LatencyControllerConfig = {
    liveSyncDurationCount: number;
    liveMaxLatencyDurationCount: number;
    liveSyncDuration?: number;
    liveMaxLatencyDuration?: number;
    maxLiveSyncPlaybackRate: number;
    liveSyncOnStallIncrease: number;
};
export type MetadataControllerConfig = {
    enableDateRangeMetadataCues: boolean;
    enableEmsgMetadataCues: boolean;
    enableEmsgKLVMetadata: boolean;
    enableID3MetadataCues: boolean;
};
export type TimelineControllerConfig = {
    cueHandler: CuesInterface;
    enableWebVTT: boolean;
    enableIMSC1: boolean;
    enableCEA708Captions: boolean;
    captionsTextTrack1Label: string;
    captionsTextTrack1LanguageCode: string;
    captionsTextTrack2Label: string;
    captionsTextTrack2LanguageCode: string;
    captionsTextTrack3Label: string;
    captionsTextTrack3LanguageCode: string;
    captionsTextTrack4Label: string;
    captionsTextTrack4LanguageCode: string;
    renderTextTracksNatively: boolean;
};
export type TSDemuxerConfig = {
    forceKeyFrameOnDiscontinuity: boolean;
};
export type HlsConfig = {
    debug: boolean | ILogger;
    enableWorker: boolean;
    workerPath: null | string;
    enableSoftwareAES: boolean;
    minAutoBitrate: number;
    ignoreDevicePixelRatio: boolean;
    preferManagedMediaSource: boolean;
    timelineOffset?: number;
    loader: {
        new (confg: HlsConfig): Loader<LoaderContext>;
    };
    fLoader?: FragmentLoaderConstructor;
    pLoader?: PlaylistLoaderConstructor;
    fetchSetup?: (context: LoaderContext, initParams: any) => Promise<Request> | Request;
    xhrSetup?: (xhr: XMLHttpRequest, url: string) => Promise<void> | void;
    audioStreamController?: typeof AudioStreamController;
    audioTrackController?: typeof AudioTrackController;
    subtitleStreamController?: typeof SubtitleStreamController;
    subtitleTrackController?: typeof SubtitleTrackController;
    timelineController?: typeof TimelineController;
    emeController?: typeof EMEController;
    cmcd?: CMCDControllerConfig;
    cmcdController?: typeof CMCDController;
    contentSteeringController?: typeof ContentSteeringController;
    interstitialsController?: typeof InterstitialsController;
    enableInterstitialPlayback: boolean;
    interstitialAppendInPlace: boolean;
    interstitialLiveLookAhead: number;
    assetPlayerId?: string;
    useMediaCapabilities: boolean;
    abrController: typeof AbrController;
    bufferController: typeof BufferController;
    capLevelController: typeof CapLevelController;
    errorController: typeof ErrorController;
    fpsController: typeof FPSController;
    progressive: boolean;
    lowLatencyMode: boolean;
    primarySessionId?: string;
} & ABRControllerConfig & BufferControllerConfig & CapLevelControllerConfig & EMEControllerConfig & FPSControllerConfig & LevelControllerConfig & MP4RemuxerConfig & StreamControllerConfig & SelectionPreferences & LatencyControllerConfig & MetadataControllerConfig & TimelineControllerConfig & TSDemuxerConfig & HlsLoadPolicies & FragmentLoaderConfig & PlaylistLoaderConfig;
/**
 * @ignore
 * If possible, keep hlsDefaultConfig shallow
 * It is cloned whenever a new Hls instance is created, by keeping the config
 * shallow the properties are cloned, and we don't end up manipulating the default
 */
export declare const hlsDefaultConfig: HlsConfig;
/**
 * @ignore
 */
export declare function mergeConfig(defaultConfig: HlsConfig, userConfig: Partial<HlsConfig>, logger: ILogger): HlsConfig;
/**
 * @ignore
 */
export declare function enableStreamingMode(config: HlsConfig, logger: ILogger): void;
//# sourceMappingURL=config.d.ts.map