import './transmuxer-worker';
export declare function hasUMDWorker(): boolean;
export type WorkerContext = {
    worker: Worker;
    objectURL?: string;
    scriptURL?: string;
    clientCount: number;
};
export declare function injectWorker(): WorkerContext;
export declare function loadWorker(path: string): WorkerContext;
export declare function removeWorkerFromStore(path?: string | null): void;
//# sourceMappingURL=inject-worker.d.ts.map