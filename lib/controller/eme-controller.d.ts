import { Logger } from '../utils/logger';
import { KeySystemFormats, KeySystems } from '../utils/mediakeys-helper';
import { LevelKey } from '../loader/level-key';
import type Hls from '../hls';
import type { ComponentAPI } from '../types/component-api';
import type { KeyLoadedData } from '../types/events';
import type { Fragment } from '../loader/fragment';
export interface MediaKeySessionContext {
    keySystem: KeySystems;
    mediaKeys: MediaKeys;
    decryptdata: LevelKey;
    mediaKeysSession: MediaKeySession;
    keyStatus: MediaKeyStatus;
    licenseXhr?: XMLHttpRequest;
    _onmessage?: (this: MediaKeySession, ev: MediaKeyMessageEvent) => any;
    _onkeystatuseschange?: (this: MediaKeySession, ev: Event) => any;
}
/**
 * Controller to deal with encrypted media extensions (EME)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API
 *
 * @class
 * @constructor
 */
declare class EMEController extends Logger implements ComponentAPI {
    static CDMCleanupPromise: Promise<void> | void;
    private readonly hls;
    private readonly config;
    private media;
    private keyFormatPromise;
    private keySystemAccessPromises;
    private _requestLicenseFailureCount;
    private mediaKeySessions;
    private keyIdToKeySessionPromise;
    private setMediaKeysQueue;
    constructor(hls: Hls);
    destroy(): void;
    private registerListeners;
    private unregisterListeners;
    private getLicenseServerUrl;
    private getLicenseServerUrlOrThrow;
    private getServerCertificateUrl;
    private attemptKeySystemAccess;
    private requestMediaKeySystemAccess;
    private getMediaKeysPromise;
    private createMediaKeySessionContext;
    private renewKeySession;
    private getKeyIdString;
    private updateKeySession;
    selectKeySystemFormat(frag: Fragment): Promise<KeySystemFormats>;
    private getKeyFormatPromise;
    loadKey(data: KeyLoadedData): Promise<MediaKeySessionContext>;
    private throwIfDestroyed;
    private handleError;
    private getKeySystemForKeyPromise;
    private getKeySystemSelectionPromise;
    private onMediaEncrypted;
    private onWaitingForKey;
    private attemptSetMediaKeys;
    private generateRequestWithPreferredKeySession;
    private onKeyStatusChange;
    private fetchServerCertificate;
    private setMediaKeysServerCertificate;
    private renewLicense;
    private unpackPlayReadyKeyMessage;
    private setupLicenseXHR;
    private requestLicense;
    private onMediaAttached;
    private onMediaDetached;
    private onManifestLoading;
    private onManifestLoaded;
    private removeSession;
}
export default EMEController;
//# sourceMappingURL=eme-controller.d.ts.map