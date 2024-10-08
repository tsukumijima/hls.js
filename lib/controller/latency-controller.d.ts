import type { ComponentAPI } from '../types/component-api';
import type Hls from '../hls';
export default class LatencyController implements ComponentAPI {
    private hls;
    private readonly config;
    private media;
    private currentTime;
    private stallCount;
    private _latency;
    private _targetLatencyUpdated;
    constructor(hls: Hls);
    get latency(): number;
    get maxLatency(): number;
    get targetLatency(): number | null;
    set targetLatency(latency: number);
    get liveSyncPosition(): number | null;
    get drift(): number;
    get edgeStalled(): number;
    private get forwardBufferLength();
    destroy(): void;
    private registerListeners;
    private unregisterListeners;
    private onMediaAttached;
    private onMediaDetaching;
    private onManifestLoading;
    private onLevelUpdated;
    private onError;
    private onTimeupdate;
    private estimateLiveEdge;
    private computeLatency;
}
//# sourceMappingURL=latency-controller.d.ts.map