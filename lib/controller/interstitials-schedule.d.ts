import { type InterstitialId, InterstitialEvent } from '../loader/interstitial-event';
import type { MediaSelection } from '../types/media-playlist';
export type InterstitialScheduleEventItem = {
    event: InterstitialEvent;
    start: number;
    end: number;
    playout: {
        start: number;
        end: number;
    };
    integrated: {
        start: number;
        end: number;
    };
};
export type InterstitialSchedulePrimaryItem = {
    nextEvent: InterstitialEvent | null;
    previousEvent: InterstitialEvent | null;
    event?: undefined;
    start: number;
    end: number;
    playout: {
        start: number;
        end: number;
    };
    integrated: {
        start: number;
        end: number;
    };
};
export type InterstitialScheduleItem = InterstitialScheduleEventItem | InterstitialSchedulePrimaryItem;
export type InterstitialScheduleDurations = {
    primary: number;
    playout: number;
    integrated: number;
};
export type TimelineType = 'primary' | 'playout' | 'integrated';
type ScheduleUpdateCallback = (removed: InterstitialEvent[], previousItems: InterstitialScheduleItem[] | null) => void;
export declare class InterstitialsSchedule {
    private onScheduleUpdate;
    private eventMap;
    events: InterstitialEvent[] | null;
    items: InterstitialScheduleItem[] | null;
    durations: InterstitialScheduleDurations;
    constructor(onScheduleUpdate: ScheduleUpdateCallback);
    destroy(): void;
    reset(): void;
    get duration(): number;
    get length(): number;
    getEvent(identifier: InterstitialId | undefined): InterstitialEvent | null;
    hasEvent(identifier: InterstitialId): boolean;
    findItemIndex(item: InterstitialScheduleItem, time?: number): number;
    findItemIndexAtTime(timelinePos: number, timelineType?: TimelineType): number;
    findJumpRestrictedIndex(startIndex: number, endIndex: number): number;
    findEventIndex(identifier: InterstitialId): number;
    findAssetIndex(event: InterstitialEvent, timelinePos: number): number;
    get assetIdAtEnd(): string | null;
    parseInterstitialDateRanges(mediaSelection: MediaSelection): void;
    updateSchedule(mediaSelection: MediaSelection, removedInterstitials?: InterstitialEvent[]): void;
    private parseDateRanges;
    private parseSchedule;
    private setDurations;
    private resolveOffsets;
    private primaryCanResumeInPlaceAt;
    private updateAssetDurations;
    private removeEvent;
}
export declare function segmentToString(segment: InterstitialScheduleItem): string;
export {};
//# sourceMappingURL=interstitials-schedule.d.ts.map