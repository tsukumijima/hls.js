import { Events } from '../events';
import type { ComponentAPI } from '../types/component-api';
import type Hls from '../hls';
import type { MediaAttachingData } from '../types/events';
import StreamController from './stream-controller';
declare class FPSController implements ComponentAPI {
    private hls;
    private isVideoPlaybackQualityAvailable;
    private timer?;
    private media;
    private lastTime;
    private lastDroppedFrames;
    private lastDecodedFrames;
    private streamController;
    constructor(hls: Hls);
    setStreamController(streamController: StreamController): void;
    protected registerListeners(): void;
    protected unregisterListeners(): void;
    destroy(): void;
    protected onMediaAttaching(event: Events.MEDIA_ATTACHING, data: MediaAttachingData): void;
    private onMediaDetaching;
    checkFPS(video: HTMLVideoElement, decodedFrames: number, droppedFrames: number): void;
    checkFPSInterval(): void;
}
export default FPSController;
//# sourceMappingURL=fps-controller.d.ts.map