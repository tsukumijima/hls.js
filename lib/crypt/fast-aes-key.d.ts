import { DecrypterAesMode } from './decrypter-aes-mode';
export default class FastAESKey {
    private subtle;
    private key;
    private aesMode;
    constructor(subtle: SubtleCrypto, key: ArrayBuffer, aesMode: DecrypterAesMode);
    expandKey(): Promise<CryptoKey>;
}
//# sourceMappingURL=fast-aes-key.d.ts.map