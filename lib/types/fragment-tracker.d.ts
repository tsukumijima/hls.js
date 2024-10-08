import type { MediaFragment } from '../loader/fragment';
import type { SourceBufferName } from './buffer';
import type { FragLoadedData } from './events';
export interface FragmentEntity {
    body: MediaFragment;
    appendedPTS: number | null;
    loaded: FragLoadedData | null;
    buffered: boolean;
    range: {
        [key in SourceBufferName]: FragmentBufferedRange;
    };
}
export interface FragmentTimeRange {
    startPTS: number;
    endPTS: number;
}
export interface FragmentBufferedRange {
    time: Array<FragmentTimeRange>;
    partial: boolean;
}
//# sourceMappingURL=fragment-tracker.d.ts.map