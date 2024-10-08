declare class EWMA {
    readonly halfLife: number;
    private alpha_;
    private estimate_;
    private totalWeight_;
    constructor(halfLife: number, estimate?: number, weight?: number);
    sample(weight: number, value: number): void;
    getTotalWeight(): number;
    getEstimate(): number;
}
export default EWMA;
//# sourceMappingURL=ewma.d.ts.map