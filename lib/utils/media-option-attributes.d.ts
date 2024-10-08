import type { Level } from '../types/level';
import type { MediaAttributes, MediaPlaylist } from '../types/media-playlist';
export declare function subtitleOptionsIdentical(trackList1: MediaPlaylist[] | Level[], trackList2: MediaPlaylist[]): boolean;
export declare function mediaAttributesIdentical(attrs1: MediaAttributes, attrs2: MediaAttributes, customAttributes?: string[]): boolean;
export declare function subtitleTrackMatchesTextTrack(subtitleTrack: Pick<MediaPlaylist, 'name' | 'lang' | 'attrs'>, textTrack: TextTrack): boolean;
//# sourceMappingURL=media-option-attributes.d.ts.map