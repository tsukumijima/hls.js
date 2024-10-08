import BasePlaylistController from './base-playlist-controller';
import { Events } from '../events';
import type Hls from '../hls';
import type { AudioSelectionOption, MediaPlaylist } from '../types/media-playlist';
import type { HlsUrlParameters } from '../types/level';
import type { ManifestParsedData, ErrorData, LevelLoadingData, AudioTrackLoadedData, LevelSwitchingData } from '../types/events';
declare class AudioTrackController extends BasePlaylistController {
    private tracks;
    private groupIds;
    private tracksInGroup;
    private trackId;
    private currentTrack;
    private selectDefaultTrack;
    constructor(hls: Hls);
    private registerListeners;
    private unregisterListeners;
    destroy(): void;
    protected onManifestLoading(): void;
    protected onManifestParsed(event: Events.MANIFEST_PARSED, data: ManifestParsedData): void;
    protected onAudioTrackLoaded(event: Events.AUDIO_TRACK_LOADED, data: AudioTrackLoadedData): void;
    protected onLevelLoading(event: Events.LEVEL_LOADING, data: LevelLoadingData): void;
    protected onLevelSwitching(event: Events.LEVEL_SWITCHING, data: LevelSwitchingData): void;
    private switchLevel;
    protected onError(event: Events.ERROR, data: ErrorData): void;
    get allAudioTracks(): MediaPlaylist[];
    get audioTracks(): MediaPlaylist[];
    get audioTrack(): number;
    set audioTrack(newId: number);
    setAudioOption(audioOption: MediaPlaylist | AudioSelectionOption | undefined): MediaPlaylist | null;
    private setAudioTrack;
    private findTrackId;
    protected loadPlaylist(hlsUrlParameters?: HlsUrlParameters): void;
}
export default AudioTrackController;
//# sourceMappingURL=audio-track-controller.d.ts.map