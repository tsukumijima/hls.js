export declare function sendAddTrackEvent(track: TextTrack, videoEl: HTMLMediaElement): void;
export declare function addCueToTrack(track: TextTrack, cue: VTTCue): void;
export declare function clearCurrentCues(track: TextTrack): void;
export declare function removeCuesInRange(track: TextTrack, start: number, end: number, predicate?: (cue: TextTrackCue) => boolean): void;
export declare function getCuesInRange(cues: TextTrackCueList | TextTrackCue[], start: number, end: number): TextTrackCue[];
export declare function filterSubtitleTracks(textTrackList: TextTrackList): TextTrack[];
//# sourceMappingURL=texttrack-utils.d.ts.map