import OutputFilter from './output-filter';
declare const enum VerboseLevel {
    ERROR = 0,
    TEXT = 1,
    WARNING = 2,
    INFO = 2,
    DEBUG = 3,
    DATA = 3
}
declare class CaptionsLogger {
    time: number | null;
    verboseLevel: VerboseLevel;
    log(severity: VerboseLevel, msg: string | (() => string)): void;
}
type PenStyles = {
    foreground: string | null;
    underline: boolean;
    italics: boolean;
    background: string;
    flash: boolean;
};
declare class PenState {
    foreground: string;
    underline: boolean;
    italics: boolean;
    background: string;
    flash: boolean;
    reset(): void;
    setStyles(styles: Partial<PenStyles>): void;
    isDefault(): boolean;
    equals(other: PenState): boolean;
    copy(newPenState: PenState): void;
    toString(): string;
}
/**
 * Unicode character with styling and background.
 * @constructor
 */
declare class StyledUnicodeChar {
    uchar: string;
    penState: PenState;
    reset(): void;
    setChar(uchar: string, newPenState: PenState): void;
    setPenState(newPenState: PenState): void;
    equals(other: StyledUnicodeChar): boolean;
    copy(newChar: StyledUnicodeChar): void;
    isEmpty(): boolean;
}
/**
 * CEA-608 row consisting of NR_COLS instances of StyledUnicodeChar.
 * @constructor
 */
export declare class Row {
    chars: StyledUnicodeChar[];
    pos: number;
    currPenState: PenState;
    cueStartTime: number | null;
    private logger;
    constructor(logger: CaptionsLogger);
    equals(other: Row): boolean;
    copy(other: Row): void;
    isEmpty(): boolean;
    /**
     *  Set the cursor to a valid column.
     */
    setCursor(absPos: number): void;
    /**
     * Move the cursor relative to current position.
     */
    moveCursor(relPos: number): void;
    /**
     * Backspace, move one step back and clear character.
     */
    backSpace(): void;
    insertChar(byte: number): void;
    clearFromPos(startPos: number): void;
    clear(): void;
    clearToEndOfRow(): void;
    getTextString(): string;
    setPenStyles(styles: Partial<PenStyles>): void;
}
/**
 * Keep a CEA-608 screen of 32x15 styled characters
 * @constructor
 */
export declare class CaptionScreen {
    rows: Row[];
    currRow: number;
    nrRollUpRows: number | null;
    lastOutputScreen: CaptionScreen | null;
    logger: CaptionsLogger;
    constructor(logger: CaptionsLogger);
    reset(): void;
    equals(other: CaptionScreen): boolean;
    copy(other: CaptionScreen): void;
    isEmpty(): boolean;
    backSpace(): void;
    clearToEndOfRow(): void;
    /**
     * Insert a character (without styling) in the current row.
     */
    insertChar(char: number): void;
    setPen(styles: Partial<PenStyles>): void;
    moveCursor(relPos: number): void;
    setCursor(absPos: number): void;
    setPAC(pacData: PACData): void;
    /**
     * Set background/extra foreground, but first do back_space, and then insert space (backwards compatibility).
     */
    setBkgData(bkgData: Partial<PenStyles>): void;
    setRollUpRows(nrRows: number | null): void;
    rollUp(): void;
    /**
     * Get all non-empty rows with as unicode text.
     */
    getDisplayText(asOneRow?: boolean): string;
    getTextAndFormat(): Row[];
}
type CaptionModes = 'MODE_ROLL-UP' | 'MODE_POP-ON' | 'MODE_PAINT-ON' | 'MODE_TEXT' | null;
declare class Cea608Channel {
    chNr: number;
    outputFilter: OutputFilter;
    mode: CaptionModes;
    verbose: number;
    displayedMemory: CaptionScreen;
    nonDisplayedMemory: CaptionScreen;
    lastOutputScreen: CaptionScreen;
    currRollUpRow: Row;
    writeScreen: CaptionScreen;
    cueStartTime: number | null;
    logger: CaptionsLogger;
    constructor(channelNumber: number, outputFilter: OutputFilter, logger: CaptionsLogger);
    reset(): void;
    getHandler(): OutputFilter;
    setHandler(newHandler: OutputFilter): void;
    setPAC(pacData: PACData): void;
    setBkgData(bkgData: Partial<PenStyles>): void;
    setMode(newMode: CaptionModes): void;
    insertChars(chars: number[]): void;
    ccRCL(): void;
    ccBS(): void;
    ccAOF(): void;
    ccAON(): void;
    ccDER(): void;
    ccRU(nrRows: number | null): void;
    ccFON(): void;
    ccRDC(): void;
    ccTR(): void;
    ccRTD(): void;
    ccEDM(): void;
    ccCR(): void;
    ccENM(): void;
    ccEOC(): void;
    ccTO(nrCols: number): void;
    ccMIDROW(secondByte: number): void;
    outputDataUpdate(dispatch?: boolean): void;
    cueSplitAtTime(t: number): void;
}
interface PACData {
    row: number;
    indent: number | null;
    color: string | null;
    underline: boolean;
    italics: boolean;
}
type SupportedField = 1 | 3;
type Channels = 0 | 1 | 2;
type CmdHistory = {
    a: number | null;
    b: number | null;
};
declare class Cea608Parser {
    channels: Array<Cea608Channel | null>;
    currentChannel: Channels;
    cmdHistory: CmdHistory;
    logger: CaptionsLogger;
    constructor(field: SupportedField, out1: OutputFilter, out2: OutputFilter);
    getHandler(channel: number): OutputFilter;
    setHandler(channel: number, newHandler: OutputFilter): void;
    /**
     * Add data for time t in forms of list of bytes (unsigned ints). The bytes are treated as pairs.
     */
    addData(time: number | null, byteList: number[]): void;
    /**
     * Parse Command.
     * @returns True if a command was found
     */
    parseCmd(a: number, b: number): boolean;
    /**
     * Parse midrow styling command
     */
    parseMidrow(a: number, b: number): boolean;
    /**
     * Parse Preable Access Codes (Table 53).
     * @returns {Boolean} Tells if PAC found
     */
    parsePAC(a: number, b: number): boolean;
    /**
     * Interpret the second byte of the pac, and return the information.
     * @returns pacData with style parameters
     */
    interpretPAC(row: number, byte: number): PACData;
    /**
     * Parse characters.
     * @returns An array with 1 to 2 codes corresponding to chars, if found. null otherwise.
     */
    parseChars(a: number, b: number): number[] | null;
    /**
     * Parse extended background attributes as well as new foreground color black.
     * @returns True if background attributes are found
     */
    parseBackgroundAttributes(a: number, b: number): boolean;
    /**
     * Reset state of parser and its channels.
     */
    reset(): void;
    /**
     * Trigger the generation of a cue, and the start of a new one if displayScreens are not empty.
     */
    cueSplitAtTime(t: number): void;
}
export default Cea608Parser;
//# sourceMappingURL=cea-608-parser.d.ts.map