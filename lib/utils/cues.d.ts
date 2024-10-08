import type { CaptionScreen } from './cea-608-parser';
export interface CuesInterface {
    newCue(track: TextTrack | null, startTime: number, endTime: number, captionScreen: CaptionScreen): VTTCue[];
}
declare const Cues: CuesInterface;
export default Cues;
//# sourceMappingURL=cues.d.ts.map