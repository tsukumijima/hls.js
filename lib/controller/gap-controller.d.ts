import { Logger } from '../utils/logger';
import type Hls from '../hls';
import type { HlsConfig } from '../config';
import type { Fragment } from '../loader/fragment';
import type { FragmentTracker } from './fragment-tracker';
import type { LevelDetails } from '../loader/level-details';
export declare const STALL_MINIMUM_DURATION_MS = 250;
export declare const MAX_START_GAP_JUMP = 2;
export declare const SKIP_BUFFER_HOLE_STEP_SECONDS = 0.1;
export declare const SKIP_BUFFER_RANGE_START = 0.05;
export default class GapController extends Logger {
    private config;
    private media;
    private fragmentTracker;
    private hls;
    private nudgeRetry;
    private stallReported;
    private stalled;
    private moved;
    private seeking;
    ended: number;
    constructor(config: HlsConfig, media: HTMLMediaElement, fragmentTracker: FragmentTracker, hls: Hls);
    destroy(): void;
    /**
     * Checks if the playhead is stuck within a gap, and if so, attempts to free it.
     * A gap is an unbuffered range between two buffered ranges (or the start and the first buffered range).
     *
     * @param lastCurrentTime - Previously read playhead position
     */
    poll(lastCurrentTime: number, activeFrag: Fragment | null, levelDetails: LevelDetails | undefined, state: string): void;
    /**
     * Detects and attempts to fix known buffer stalling issues.
     * @param bufferInfo - The properties of the current buffer.
     * @param stalledDurationMs - The amount of time Hls.js has been stalling for.
     * @private
     */
    private _tryFixBufferStall;
    /**
     * Triggers a BUFFER_STALLED_ERROR event, but only once per stall period.
     * @param bufferLen - The playhead distance from the end of the current buffer segment.
     * @private
     */
    private _reportStall;
    /**
     * Attempts to fix buffer stalls by jumping over known gaps caused by partial fragments
     * @param partial - The partial fragment found at the current time (where playback is stalling).
     * @private
     */
    private _trySkipBufferHole;
    /**
     * Attempts to fix buffer stalls by advancing the mediaElement's current time by a small amount.
     * @private
     */
    private _tryNudgeBuffer;
}
//# sourceMappingURL=gap-controller.d.ts.map