/**
 * SAMPLE-AES decrypter
 */
import { HlsConfig } from '../config';
import { HlsEventEmitter } from '../events';
import type { AudioSample, VideoSample, VideoSampleUnit, DemuxedVideoTrackBase, KeyData } from '../types/demuxer';
declare class SampleAesDecrypter {
    private keyData;
    private decrypter;
    constructor(observer: HlsEventEmitter, config: HlsConfig, keyData: KeyData);
    decryptBuffer(encryptedData: Uint8Array | ArrayBuffer): Promise<ArrayBuffer>;
    private decryptAacSample;
    decryptAacSamples(samples: AudioSample[], sampleIndex: number, callback: () => void): void;
    getAvcEncryptedData(decodedData: Uint8Array): Int8Array;
    getAvcDecryptedUnit(decodedData: Uint8Array, decryptedData: ArrayLike<number> | ArrayBuffer | SharedArrayBuffer): Uint8Array;
    decryptAvcSample(samples: VideoSample[], sampleIndex: number, unitIndex: number, callback: () => void, curUnit: VideoSampleUnit): void;
    decryptAvcSamples(samples: DemuxedVideoTrackBase['samples'], sampleIndex: number, unitIndex: number, callback: () => void): void;
}
export default SampleAesDecrypter;
//# sourceMappingURL=sample-aes.d.ts.map