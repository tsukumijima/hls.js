import type { ComponentAPI } from '../types/component-api';
declare global {
    interface Window {
        WebKitDataCue: VTTCue | void;
    }
}
declare class ID3TrackController implements ComponentAPI {
    private hls;
    private id3Track;
    private media;
    private dateRangeCuesAppended;
    private removeCues;
    constructor(hls: any);
    destroy(): void;
    private _registerListeners;
    private _unregisterListeners;
    private onMediaAttaching;
    private onMediaDetaching;
    private onManifestLoading;
    private createTrack;
    private getID3Track;
    private onFragParsingMetadata;
    private updateId3CueEnds;
    private onBufferFlushing;
    private onLevelUpdated;
    private onLevelPtsUpdated;
    private updateDateRangeCues;
}
export default ID3TrackController;
//# sourceMappingURL=id3-track-controller.d.ts.map