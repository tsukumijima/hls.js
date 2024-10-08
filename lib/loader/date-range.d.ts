import { AttrList } from '../utils/attr-list';
import type { Fragment } from './fragment';
export type DateRangeCue = {
    pre: boolean;
    post: boolean;
    once: boolean;
};
export declare function isDateRangeCueAttribute(attrName: string): boolean;
export declare function isSCTE35Attribute(attrName: string): boolean;
export declare class DateRange {
    attr: AttrList;
    tagAnchor: Fragment | null;
    tagOrder: number;
    private _startDate;
    private _endDate?;
    private _dateAtEnd?;
    private _cue?;
    private _badValueForSameId?;
    constructor(dateRangeAttr: AttrList, dateRangeWithSameId?: DateRange | undefined, tagCount?: number);
    get id(): string;
    get class(): string;
    get cue(): DateRangeCue;
    get startTime(): number;
    get startDate(): Date;
    get endDate(): Date | null;
    get duration(): number | null;
    get plannedDuration(): number | null;
    get endOnNext(): boolean;
    get isInterstitial(): boolean;
    get isValid(): boolean;
}
//# sourceMappingURL=date-range.d.ts.map