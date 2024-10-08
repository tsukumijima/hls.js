import type { HlsEventEmitter } from '../events';
import type { HlsConfig } from '../config';
import type { Remuxer, RemuxerResult } from '../types/remuxer';
import type { DemuxedAudioTrack, DemuxedMetadataTrack, DemuxedUserdataTrack, PassthroughTrack } from '../types/demuxer';
import type { DecryptData } from '../loader/level-key';
import type { TypeSupported } from '../utils/codecs';
import { type ILogger } from '../utils/logger';
import type { RationalTimestamp } from '../utils/timescale-conversion';
declare class PassThroughRemuxer implements Remuxer {
    private readonly logger;
    private emitInitSegment;
    private audioCodec?;
    private videoCodec?;
    private initData?;
    private initPTS;
    private initTracks?;
    private lastEndTime;
    constructor(observer: HlsEventEmitter, config: HlsConfig, typeSupported: TypeSupported, logger: ILogger);
    destroy(): void;
    resetTimeStamp(defaultInitPTS: RationalTimestamp | null): void;
    resetNextTimestamp(): void;
    resetInitSegment(initSegment: Uint8Array | undefined, audioCodec: string | undefined, videoCodec: string | undefined, decryptdata: DecryptData | null): void;
    private generateInitSegment;
    remux(audioTrack: DemuxedAudioTrack, videoTrack: PassthroughTrack, id3Track: DemuxedMetadataTrack, textTrack: DemuxedUserdataTrack, timeOffset: number, accurateTimeOffset: boolean): RemuxerResult;
}
export default PassThroughRemuxer;
//# sourceMappingURL=passthrough-remuxer.d.ts.map