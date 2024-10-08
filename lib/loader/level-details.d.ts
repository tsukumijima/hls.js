import type { Fragment, MediaFragment, Part } from './fragment';
import type { DateRange } from './date-range';
import type { AttrList } from '../utils/attr-list';
import type { VariableMap } from '../types/level';
/**
 * Object representing parsed data from an HLS Media Playlist. Found in {@link hls.js#Level.details}.
 */
export declare class LevelDetails {
    PTSKnown: boolean;
    alignedSliding: boolean;
    averagetargetduration?: number;
    endCC: number;
    endSN: number;
    fragments: MediaFragment[];
    fragmentHint?: MediaFragment;
    partList: Part[] | null;
    dateRanges: Record<string, DateRange>;
    dateRangeTagCount: number;
    live: boolean;
    ageHeader: number;
    advancedDateTime?: number;
    updated: boolean;
    advanced: boolean;
    availabilityDelay?: number;
    misses: number;
    startCC: number;
    startSN: number;
    startTimeOffset: number | null;
    targetduration: number;
    totalduration: number;
    type: string | null;
    url: string;
    m3u8: string;
    version: number | null;
    canBlockReload: boolean;
    canSkipUntil: number;
    canSkipDateRanges: boolean;
    skippedSegments: number;
    recentlyRemovedDateranges?: string[];
    partHoldBack: number;
    holdBack: number;
    partTarget: number;
    preloadHint?: AttrList;
    renditionReports?: AttrList[];
    tuneInGoal: number;
    deltaUpdateFailed?: boolean;
    driftStartTime: number;
    driftEndTime: number;
    driftStart: number;
    driftEnd: number;
    encryptedFragments: Fragment[];
    playlistParsingError: Error | null;
    variableList: VariableMap | null;
    hasVariableRefs: boolean;
    appliedTimelineOffset?: number;
    constructor(baseUrl: string);
    reloaded(previous: LevelDetails | undefined): void;
    get hasProgramDateTime(): boolean;
    get levelTargetDuration(): number;
    get drift(): number;
    get edge(): number;
    get partEnd(): number;
    get fragmentEnd(): number;
    get fragmentStart(): number;
    get age(): number;
    get lastPartIndex(): number;
    get lastPartSn(): number;
}
//# sourceMappingURL=level-details.d.ts.map