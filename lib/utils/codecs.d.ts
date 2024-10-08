export declare const sampleEntryCodesISO: {
    readonly audio: {
        readonly a3ds: 1;
        readonly 'ac-3': 0.95;
        readonly 'ac-4': 1;
        readonly alac: 0.9;
        readonly alaw: 1;
        readonly dra1: 1;
        readonly 'dts+': 1;
        readonly 'dts-': 1;
        readonly dtsc: 1;
        readonly dtse: 1;
        readonly dtsh: 1;
        readonly 'ec-3': 0.9;
        readonly enca: 1;
        readonly fLaC: 0.9;
        readonly flac: 0.9;
        readonly FLAC: 0.9;
        readonly g719: 1;
        readonly g726: 1;
        readonly m4ae: 1;
        readonly mha1: 1;
        readonly mha2: 1;
        readonly mhm1: 1;
        readonly mhm2: 1;
        readonly mlpa: 1;
        readonly mp4a: 1;
        readonly 'raw ': 1;
        readonly Opus: 1;
        readonly opus: 1;
        readonly samr: 1;
        readonly sawb: 1;
        readonly sawp: 1;
        readonly sevc: 1;
        readonly sqcp: 1;
        readonly ssmv: 1;
        readonly twos: 1;
        readonly ulaw: 1;
    };
    readonly video: {
        readonly avc1: 1;
        readonly avc2: 1;
        readonly avc3: 1;
        readonly avc4: 1;
        readonly avcp: 1;
        readonly av01: 0.8;
        readonly drac: 1;
        readonly dva1: 1;
        readonly dvav: 1;
        readonly dvh1: 0.7;
        readonly dvhe: 0.7;
        readonly encv: 1;
        readonly hev1: 0.75;
        readonly hvc1: 0.75;
        readonly mjp2: 1;
        readonly mp4v: 1;
        readonly mvc1: 1;
        readonly mvc2: 1;
        readonly mvc3: 1;
        readonly mvc4: 1;
        readonly resv: 1;
        readonly rv60: 1;
        readonly s263: 1;
        readonly svc1: 1;
        readonly svc2: 1;
        readonly 'vc-1': 1;
        readonly vp08: 1;
        readonly vp09: 0.9;
    };
    readonly text: {
        readonly stpp: 1;
        readonly wvtt: 1;
    };
};
export type CodecType = 'audio' | 'video';
export declare function isCodecType(codec: string, type: CodecType): boolean;
export declare function areCodecsMediaSourceSupported(codecs: string, type: CodecType, preferManagedMediaSource?: boolean): boolean;
export declare function mimeTypeForCodec(codec: string, type: CodecType): string;
export declare function videoCodecPreferenceValue(videoCodec: string | undefined): number;
export declare function codecsSetSelectionPreferenceValue(codecSet: string): number;
export declare function getCodecCompatibleName(codec: string, preferManagedMediaSource?: boolean): string;
export declare function pickMostCompleteCodecName(parsedCodec: string | undefined, levelCodec: string | undefined): string | undefined;
export declare function convertAVC1ToAVCOTI(videoCodecs: string): string;
export declare function fillInMissingAV01Params(videoCodec: string): string;
export interface TypeSupported {
    mpeg: boolean;
    mp3: boolean;
    ac3: boolean;
}
export declare function getM2TSSupportedAudioTypes(preferManagedMediaSource: boolean): TypeSupported;
//# sourceMappingURL=codecs.d.ts.map