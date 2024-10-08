import type { HlsPerformanceTiming, HlsProgressivePerformanceTiming, LoaderStats } from '../types/loader';
export declare class LoadStats implements LoaderStats {
    aborted: boolean;
    loaded: number;
    retry: number;
    total: number;
    chunkCount: number;
    bwEstimate: number;
    loading: HlsProgressivePerformanceTiming;
    parsing: HlsPerformanceTiming;
    buffering: HlsProgressivePerformanceTiming;
}
//# sourceMappingURL=load-stats.d.ts.map