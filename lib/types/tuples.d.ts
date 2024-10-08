export type Tail<T extends any[]> = ((...t: T) => any) extends (_: any, ...tail: infer U) => any ? U : [];
//# sourceMappingURL=tuples.d.ts.map