export type RationalTimestamp = {
    baseTime: number;
    timescale: number;
};
export declare function toTimescaleFromBase(baseTime: number, destScale: number, srcBase?: number, round?: boolean): number;
export declare function toTimescaleFromScale(baseTime: number, destScale: number, srcScale?: number, round?: boolean): number;
export declare function toMsFromMpegTsClock(baseTime: number, round?: boolean): number;
export declare function toMpegTsClockFromTimescale(baseTime: number, srcScale?: number): number;
//# sourceMappingURL=timescale-conversion.d.ts.map