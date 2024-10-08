export declare function parseTimeStamp(input: string): number | null;
export declare function fixLineBreaks(input: string): string;
export declare class VTTParser {
    private state;
    private buffer;
    private decoder;
    private regionList;
    private cue;
    oncue?: (cue: VTTCue) => void;
    onparsingerror?: (error: Error) => void;
    onflush?: () => void;
    parse(data?: string): VTTParser;
    flush(): VTTParser;
}
//# sourceMappingURL=vttparser.d.ts.map