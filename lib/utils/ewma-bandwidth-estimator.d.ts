declare class EwmaBandWidthEstimator {
    private defaultEstimate_;
    private minWeight_;
    private minDelayMs_;
    private slow_;
    private fast_;
    private defaultTTFB_;
    private ttfb_;
    constructor(slow: number, fast: number, defaultEstimate: number, defaultTTFB?: number);
    update(slow: number, fast: number): void;
    sample(durationMs: number, numBytes: number): void;
    sampleTTFB(ttfb: number): void;
    canEstimate(): boolean;
    getEstimate(): number;
    getEstimateTTFB(): number;
    get defaultEstimate(): number;
    destroy(): void;
}
export default EwmaBandWidthEstimator;
//# sourceMappingURL=ewma-bandwidth-estimator.d.ts.map