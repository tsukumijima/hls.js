import type { BaseTrackSet } from '../types/buffer';
export declare function getMediaSource(preferManagedMediaSource?: boolean): typeof MediaSource | undefined;
export declare function isManagedMediaSource(source: typeof MediaSource | undefined): boolean;
export declare function isCompatibleTrackChange(currentTracks: BaseTrackSet, requiredTracks: BaseTrackSet): boolean;
//# sourceMappingURL=mediasource-helper.d.ts.map