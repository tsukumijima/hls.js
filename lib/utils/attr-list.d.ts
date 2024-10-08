import type { LevelDetails } from '../loader/level-details';
import type { ParsedMultivariantPlaylist } from '../loader/m3u8-parser';
export declare class AttrList {
    [key: string]: any;
    constructor(attrs: string | Record<string, any>, parsed?: Pick<ParsedMultivariantPlaylist | LevelDetails, 'variableList' | 'hasVariableRefs' | 'playlistParsingError'>);
    get clientAttrs(): string[];
    decimalInteger(attrName: string): number;
    hexadecimalInteger(attrName: string): Uint8Array | null;
    hexadecimalIntegerAsNumber(attrName: string): number;
    decimalFloatingPoint(attrName: string): number;
    optionalFloat(attrName: string, defaultValue: number): number;
    enumeratedString(attrName: string): string | undefined;
    enumeratedStringList<T extends {
        [key: string]: boolean;
    }>(attrName: string, dict: T): {
        [key in keyof T]: boolean;
    };
    bool(attrName: string): boolean;
    decimalResolution(attrName: string): {
        width: number;
        height: number;
    } | undefined;
    static parseAttrList(input: string, parsed?: Pick<ParsedMultivariantPlaylist | LevelDetails, 'variableList' | 'hasVariableRefs' | 'playlistParsingError'>): Record<string, string>;
}
//# sourceMappingURL=attr-list.d.ts.map