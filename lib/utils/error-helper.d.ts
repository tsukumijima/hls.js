import type { LoadPolicy, LoaderConfig, RetryConfig } from '../config';
import type { ErrorData } from '../types/events';
import type { LoaderResponse } from '../types/loader';
export declare function isTimeoutError(error: ErrorData): boolean;
export declare function getRetryConfig(loadPolicy: LoadPolicy, error: ErrorData): RetryConfig | null;
export declare function getRetryDelay(retryConfig: RetryConfig, retryCount: number): number;
export declare function getLoaderConfigWithoutReties(loderConfig: LoaderConfig): LoaderConfig;
export declare function shouldRetry(retryConfig: RetryConfig | null | undefined, retryCount: number, isTimeout: boolean, loaderResponse?: LoaderResponse | undefined): retryConfig is RetryConfig & boolean;
export declare function retryForHttpStatus(httpStatus: number | undefined): boolean;
//# sourceMappingURL=error-helper.d.ts.map