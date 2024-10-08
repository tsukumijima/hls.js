import type { TimelineController } from '../controller/timeline-controller';
import type { CaptionScreen } from './cea-608-parser';
export default class OutputFilter {
    private timelineController;
    private cueRanges;
    private trackName;
    private startTime;
    private endTime;
    private screen;
    constructor(timelineController: TimelineController, trackName: string);
    dispatchCue(): void;
    newCue(startTime: number, endTime: number, screen: CaptionScreen): void;
    reset(): void;
}
//# sourceMappingURL=output-filter.d.ts.map