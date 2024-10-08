import { type VideoRange } from '../types/level';
import type { VideoSelectionOption } from '../types/media-playlist';
/**
 * @returns Whether we can detect and validate HDR capability within the window context
 */
export declare function isHdrSupported(): boolean;
/**
 * Sanitizes inputs to return the active video selection options for HDR/SDR.
 * When both inputs are null:
 *
 *    `{ preferHDR: false, allowedVideoRanges: [] }`
 *
 * When `currentVideoRange` non-null, maintain the active range:
 *
 *    `{ preferHDR: currentVideoRange !== 'SDR', allowedVideoRanges: [currentVideoRange] }`
 *
 * When VideoSelectionOption non-null:
 *
 *  - Allow all video ranges if `allowedVideoRanges` unspecified.
 *  - If `preferHDR` is non-null use the value to filter `allowedVideoRanges`.
 *  - Else check window for HDR support and set `preferHDR` to the result.
 *
 * @param currentVideoRange
 * @param videoPreference
 */
export declare function getVideoSelectionOptions(currentVideoRange: VideoRange | undefined, videoPreference: VideoSelectionOption | undefined): {
    preferHDR: boolean;
    allowedVideoRanges: ("SDR" | "PQ" | "HLG")[];
};
//# sourceMappingURL=hdr.d.ts.map