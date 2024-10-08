import type { AttrList } from './attr-list';
import type { ParsedMultivariantPlaylist } from '../loader/m3u8-parser';
import type { LevelDetails } from '../loader/level-details';
import type { VariableMap } from '../types/level';
export declare function hasVariableReferences(str: string): boolean;
export declare function substituteVariables(parsed: Pick<ParsedMultivariantPlaylist | LevelDetails, 'variableList' | 'hasVariableRefs' | 'playlistParsingError'>, value: string): string;
export declare function addVariableDefinition(parsed: Pick<ParsedMultivariantPlaylist | LevelDetails, 'variableList' | 'playlistParsingError'>, attr: AttrList, parentUrl: string): void;
export declare function importVariableDefinition(parsed: Pick<ParsedMultivariantPlaylist | LevelDetails, 'variableList' | 'playlistParsingError'>, attr: AttrList, sourceVariableList: VariableMap | null): void;
//# sourceMappingURL=variable-substitution.d.ts.map