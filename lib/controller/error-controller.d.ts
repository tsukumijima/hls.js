import { Events } from '../events';
import { HdcpLevel } from '../types/level';
import { Logger } from '../utils/logger';
import type Hls from '../hls';
import type { RetryConfig } from '../config';
import type { NetworkComponentAPI } from '../types/component-api';
import type { ErrorData } from '../types/events';
export declare const enum NetworkErrorAction {
    DoNothing = 0,
    SendEndCallback = 1,// Reserved for future use
    SendAlternateToPenaltyBox = 2,
    RemoveAlternatePermanently = 3,// Reserved for future use
    InsertDiscontinuity = 4,// Reserved for future use
    RetryRequest = 5
}
export declare const enum ErrorActionFlags {
    None = 0,
    MoveAllAlternatesMatchingHost = 1,
    MoveAllAlternatesMatchingHDCP = 2,
    SwitchToSDR = 4
}
export type IErrorAction = {
    action: NetworkErrorAction;
    flags: ErrorActionFlags;
    retryCount?: number;
    retryConfig?: RetryConfig;
    hdcpLevel?: HdcpLevel;
    nextAutoLevel?: number;
    resolved?: boolean;
};
export default class ErrorController extends Logger implements NetworkComponentAPI {
    private readonly hls;
    private playlistError;
    private penalizedRenditions;
    constructor(hls: Hls);
    private registerListeners;
    private unregisterListeners;
    destroy(): void;
    startLoad(startPosition: number): void;
    stopLoad(): void;
    private getVariantLevelIndex;
    private onManifestLoading;
    private onLevelUpdated;
    private onError;
    private keySystemError;
    private getPlaylistRetryOrSwitchAction;
    private getFragRetryOrSwitchAction;
    private getLevelSwitchAction;
    onErrorOut(event: Events.ERROR, data: ErrorData): void;
    private sendAlternateToPenaltyBox;
    private switchLevel;
}
export declare function createDoNothingErrorAction(resolved?: boolean): IErrorAction;
//# sourceMappingURL=error-controller.d.ts.map