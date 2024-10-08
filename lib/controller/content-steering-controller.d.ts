import { Level } from '../types/level';
import { Logger } from '../utils/logger';
import type Hls from '../hls';
import type { NetworkComponentAPI } from '../types/component-api';
export type SteeringManifest = {
    VERSION: 1;
    TTL: number;
    'RELOAD-URI'?: string;
    'PATHWAY-PRIORITY': string[];
    'PATHWAY-CLONES'?: PathwayClone[];
};
export type PathwayClone = {
    'BASE-ID': string;
    ID: string;
    'URI-REPLACEMENT': UriReplacement;
};
export type UriReplacement = {
    HOST?: string;
    PARAMS?: {
        [queryParameter: string]: string;
    };
    'PER-VARIANT-URIS'?: {
        [stableVariantId: string]: string;
    };
    'PER-RENDITION-URIS'?: {
        [stableRenditionId: string]: string;
    };
};
export default class ContentSteeringController extends Logger implements NetworkComponentAPI {
    private readonly hls;
    private loader;
    private uri;
    private pathwayId;
    private _pathwayPriority;
    private timeToLoad;
    private reloadTimer;
    private updated;
    private started;
    private enabled;
    private levels;
    private audioTracks;
    private subtitleTracks;
    private penalizedPathways;
    constructor(hls: Hls);
    private registerListeners;
    private unregisterListeners;
    pathways(): string[];
    get pathwayPriority(): string[] | null;
    set pathwayPriority(pathwayPriority: string[]);
    startLoad(): void;
    stopLoad(): void;
    clearTimeout(): void;
    destroy(): void;
    removeLevel(levelToRemove: Level): void;
    private onManifestLoading;
    private onManifestLoaded;
    private onManifestParsed;
    private onError;
    filterParsedLevels(levels: Level[]): Level[];
    private getLevelsForPathway;
    private updatePathwayPriority;
    private getPathwayForGroupId;
    private clonePathways;
    private loadSteeringManifest;
    private scheduleRefresh;
}
//# sourceMappingURL=content-steering-controller.d.ts.map