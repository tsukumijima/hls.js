export interface ILogFunction {
    (message?: any, ...optionalParams: any[]): void;
}
export interface ILogger {
    trace: ILogFunction;
    debug: ILogFunction;
    log: ILogFunction;
    warn: ILogFunction;
    info: ILogFunction;
    error: ILogFunction;
}
export declare class Logger implements ILogger {
    trace: ILogFunction;
    debug: ILogFunction;
    log: ILogFunction;
    warn: ILogFunction;
    info: ILogFunction;
    error: ILogFunction;
    constructor(label: string, logger: ILogger);
}
export declare function enableLogs(debugConfig: boolean | ILogger, context: string, id?: string | undefined): ILogger;
export declare const logger: ILogger;
//# sourceMappingURL=logger.d.ts.map