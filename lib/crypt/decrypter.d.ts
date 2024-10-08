import { DecrypterAesMode } from './decrypter-aes-mode';
import type { HlsConfig } from '../config';
export default class Decrypter {
    private logEnabled;
    private removePKCS7Padding;
    private subtle;
    private softwareDecrypter;
    private key;
    private fastAesKey;
    private remainderData;
    private currentIV;
    private currentResult;
    private useSoftware;
    private enableSoftwareAES;
    constructor(config: HlsConfig, { removePKCS7Padding }?: {
        removePKCS7Padding?: boolean | undefined;
    });
    destroy(): void;
    isSync(): boolean;
    flush(): Uint8Array | null;
    reset(): void;
    decrypt(data: Uint8Array | ArrayBuffer, key: ArrayBuffer, iv: ArrayBuffer, aesMode: DecrypterAesMode): Promise<ArrayBuffer>;
    softwareDecrypt(data: Uint8Array, key: ArrayBuffer, iv: ArrayBuffer, aesMode: DecrypterAesMode): ArrayBuffer | null;
    webCryptoDecrypt(data: Uint8Array, key: ArrayBuffer, iv: ArrayBuffer, aesMode: DecrypterAesMode): Promise<ArrayBuffer>;
    private onWebCryptoError;
    private getValidChunk;
    private logOnce;
}
//# sourceMappingURL=decrypter.d.ts.map