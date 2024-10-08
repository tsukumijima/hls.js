import { DecrypterAesMode } from './decrypter-aes-mode';
export default class AESCrypto {
    private subtle;
    private aesIV;
    private aesMode;
    constructor(subtle: SubtleCrypto, iv: Uint8Array, aesMode: DecrypterAesMode);
    decrypt(data: ArrayBuffer, key: CryptoKey): Promise<ArrayBuffer>;
}
//# sourceMappingURL=aes-crypto.d.ts.map