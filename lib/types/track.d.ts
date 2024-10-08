import { BaseTrack } from './buffer';
export interface TrackSet {
    audio?: Track;
    video?: Track;
    audiovideo?: Track;
}
export interface Track extends BaseTrack {
    buffer?: SourceBuffer;
    initSegment?: Uint8Array;
}
//# sourceMappingURL=track.d.ts.map