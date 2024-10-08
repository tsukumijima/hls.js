import type { MediaFragment } from '../loader/fragment';
import type { LevelDetails } from '../loader/level-details';
/**
 * Returns first fragment whose endPdt value exceeds the given PDT, or null.
 * @param fragments - The array of candidate fragments
 * @param PDTValue - The PDT value which must be exceeded
 * @param maxFragLookUpTolerance - The amount of time that a fragment's start/end can be within in order to be considered contiguous
 */
export declare function findFragmentByPDT(fragments: MediaFragment[], PDTValue: number | null, maxFragLookUpTolerance: number): MediaFragment | null;
/**
 * Finds a fragment based on the SN of the previous fragment; or based on the needs of the current buffer.
 * This method compensates for small buffer gaps by applying a tolerance to the start of any candidate fragment, thus
 * breaking any traps which would cause the same fragment to be continuously selected within a small range.
 * @param fragPrevious - The last frag successfully appended
 * @param fragments - The array of candidate fragments
 * @param bufferEnd - The end of the contiguous buffered range the playhead is currently within
 * @param maxFragLookUpTolerance - The amount of time that a fragment's start/end can be within in order to be considered contiguous
 * @returns a matching fragment or null
 */
export declare function findFragmentByPTS(fragPrevious: MediaFragment | null, fragments: MediaFragment[], bufferEnd?: number, maxFragLookUpTolerance?: number, nextFragLookupTolerance?: number): MediaFragment | null;
/**
 * The test function used by the findFragmentBySn's BinarySearch to look for the best match to the current buffer conditions.
 * @param candidate - The fragment to test
 * @param bufferEnd - The end of the current buffered range the playhead is currently within
 * @param maxFragLookUpTolerance - The amount of time that a fragment's start can be within in order to be considered contiguous
 * @returns 0 if it matches, 1 if too low, -1 if too high
 */
export declare function fragmentWithinToleranceTest(bufferEnd: number | undefined, maxFragLookUpTolerance: number | undefined, candidate: MediaFragment): 0 | 1 | -1;
/**
 * The test function used by the findFragmentByPdt's BinarySearch to look for the best match to the current buffer conditions.
 * This function tests the candidate's program date time values, as represented in Unix time
 * @param candidate - The fragment to test
 * @param pdtBufferEnd - The Unix time representing the end of the current buffered range
 * @param maxFragLookUpTolerance - The amount of time that a fragment's start can be within in order to be considered contiguous
 * @returns true if contiguous, false otherwise
 */
export declare function pdtWithinToleranceTest(pdtBufferEnd: number, maxFragLookUpTolerance: number, candidate: MediaFragment): boolean;
export declare function findFragWithCC(fragments: MediaFragment[], cc: number): MediaFragment | null;
export declare function findNearestWithCC(details: LevelDetails | undefined, cc: number, fragment: MediaFragment): MediaFragment | null;
//# sourceMappingURL=fragment-finders.d.ts.map