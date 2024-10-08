import type { HlsConfig } from '../config';
import type { Fragment, Part } from './fragment';
import type { ErrorData, FragLoadedData, PartsLoadedData } from '../types/events';
export default class FragmentLoader {
    private readonly config;
    private loader;
    private partLoadTimeout;
    constructor(config: HlsConfig);
    destroy(): void;
    abort(): void;
    load(frag: Fragment, onProgress?: FragmentLoadProgressCallback): Promise<FragLoadedData>;
    loadPart(frag: Fragment, part: Part, onProgress: FragmentLoadProgressCallback): Promise<FragLoadedData>;
    private updateStatsFromPart;
    private resetLoader;
}
export declare class LoadError extends Error {
    readonly data: FragLoadFailResult;
    constructor(data: FragLoadFailResult);
}
export interface FragLoadFailResult extends ErrorData {
    frag: Fragment;
    part?: Part;
    response?: {
        data: any;
        code: number;
        text: string;
        url: string;
    };
    networkDetails: any;
}
export type FragmentLoadProgressCallback = (result: FragLoadedData | PartsLoadedData) => void;
//# sourceMappingURL=fragment-loader.d.ts.map