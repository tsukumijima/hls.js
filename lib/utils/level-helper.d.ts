/**
 * Provides methods dealing with playlist sliding and drift
 */
import type { Fragment, MediaFragment, Part } from '../loader/fragment';
import type { LevelDetails } from '../loader/level-details';
import type { Level } from '../types/level';
type FragmentIntersection = (oldFrag: Fragment, newFrag: Fragment) => void;
type PartIntersection = (oldPart: Part, newPart: Part) => void;
export declare function updatePTS(fragments: MediaFragment[], fromIdx: number, toIdx: number): void;
export declare function updateFragPTSDTS(details: LevelDetails | undefined, frag: MediaFragment, startPTS: number, endPTS: number, startDTS: number, endDTS: number): number;
export declare function mergeDetails(oldDetails: LevelDetails, newDetails: LevelDetails): void;
export declare function mapPartIntersection(oldParts: Part[] | null, newParts: Part[] | null, intersectionFn: PartIntersection): void;
export declare function mapFragmentIntersection(oldDetails: LevelDetails, newDetails: LevelDetails, intersectionFn: FragmentIntersection): void;
export declare function adjustSliding(oldDetails: LevelDetails, newDetails: LevelDetails, matchingStableVariantOrRendition?: boolean): void;
export declare function addSliding(details: LevelDetails, start: number): void;
export declare function computeReloadInterval(newDetails: LevelDetails, distanceToLiveEdgeMs?: number): number;
export declare function getFragmentWithSN(details: LevelDetails | undefined, sn: number, fragCurrent: Fragment | null): MediaFragment | null;
export declare function getPartWith(details: LevelDetails | undefined, sn: number, partIndex: number): Part | null;
export declare function findPart(partList: Part[] | null | undefined, sn: number, partIndex: number): Part | null;
export declare function reassignFragmentLevelIndexes(levels: Level[]): void;
export {};
//# sourceMappingURL=level-helper.d.ts.map