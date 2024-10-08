import BasePlaylistController from './base-playlist-controller';
import { Events } from '../events';
import type Hls from '../hls';
import type { MediaPlaylist, SubtitleSelectionOption } from '../types/media-playlist';
import type { HlsUrlParameters } from '../types/level';
import type { ErrorData, LevelLoadingData, MediaAttachedData, ManifestParsedData, TrackLoadedData, LevelSwitchingData, MediaDetachingData } from '../types/events';
declare class SubtitleTrackController extends BasePlaylistController {
    private media;
    private tracks;
    private groupIds;
    private tracksInGroup;
    private trackId;
    private currentTrack;
    private selectDefaultTrack;
    private queuedDefaultTrack;
    private useTextTrackPolling;
    private subtitlePollingInterval;
    private _subtitleDisplay;
    private asyncPollTrackChange;
    constructor(hls: Hls);
    destroy(): void;
    get subtitleDisplay(): boolean;
    set subtitleDisplay(value: boolean);
    private registerListeners;
    private unregisterListeners;
    protected onMediaAttached(event: Events.MEDIA_ATTACHED, data: MediaAttachedData): void;
    private pollTrackChange;
    protected onMediaDetaching(event: Events.MEDIA_DETACHING, data: MediaDetachingData): void;
    protected onManifestLoading(): void;
    protected onManifestParsed(event: Events.MANIFEST_PARSED, data: ManifestParsedData): void;
    protected onSubtitleTrackLoaded(event: Events.SUBTITLE_TRACK_LOADED, data: TrackLoadedData): void;
    protected onLevelLoading(event: Events.LEVEL_LOADING, data: LevelLoadingData): void;
    protected onLevelSwitching(event: Events.LEVEL_SWITCHING, data: LevelSwitchingData): void;
    private switchLevel;
    private findTrackId;
    private findTrackForTextTrack;
    protected onError(event: Events.ERROR, data: ErrorData): void;
    get allSubtitleTracks(): MediaPlaylist[];
    /** get alternate subtitle tracks list from playlist **/
    get subtitleTracks(): MediaPlaylist[];
    /** get/set index of the selected subtitle track (based on index in subtitle track lists) **/
    get subtitleTrack(): number;
    set subtitleTrack(newId: number);
    setSubtitleOption(subtitleOption: MediaPlaylist | SubtitleSelectionOption | undefined): MediaPlaylist | null;
    protected loadPlaylist(hlsUrlParameters?: HlsUrlParameters): void;
    /**
     * Disables the old subtitleTrack and sets current mode on the next subtitleTrack.
     * This operates on the DOM textTracks.
     * A value of -1 will disable all subtitle tracks.
     */
    private toggleTrackModes;
    /**
     * This method is responsible for validating the subtitle index and periodically reloading if live.
     * Dispatches the SUBTITLE_TRACK_SWITCH event, which instructs the subtitle-stream-controller to load the selected track.
     */
    private setSubtitleTrack;
    private onTextTracksChanged;
}
export default SubtitleTrackController;
//# sourceMappingURL=subtitle-track-controller.d.ts.map