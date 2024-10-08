import { RationalTimestamp } from './timescale-conversion';
export declare const IMSC1_CODEC = "stpp.ttml.im1t";
export declare function parseIMSC1(payload: ArrayBuffer, initPTS: RationalTimestamp, callBack: (cues: Array<VTTCue>) => any, errorCallBack: (error: Error) => any): void;
//# sourceMappingURL=imsc1-ttml-parser.d.ts.map