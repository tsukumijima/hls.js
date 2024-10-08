import { type ILogger, Logger } from './utils/logger';
/**
 * @ignore
 * Sub-class specialization of EventHandler base class.
 *
 * TaskLoop allows to schedule a task function being called (optionnaly repeatedly) on the main loop,
 * scheduled asynchroneously, avoiding recursive calls in the same tick.
 *
 * The task itself is implemented in `doTick`. It can be requested and called for single execution
 * using the `tick` method.
 *
 * It will be assured that the task execution method (`tick`) only gets called once per main loop "tick",
 * no matter how often it gets requested for execution. Execution in further ticks will be scheduled accordingly.
 *
 * If further execution requests have already been scheduled on the next tick, it can be checked with `hasNextTick`,
 * and cancelled with `clearNextTick`.
 *
 * The task can be scheduled as an interval repeatedly with a period as parameter (see `setInterval`, `clearInterval`).
 *
 * Sub-classes need to implement the `doTick` method which will effectively have the task execution routine.
 *
 * Further explanations:
 *
 * The baseclass has a `tick` method that will schedule the doTick call. It may be called synchroneously
 * only for a stack-depth of one. On re-entrant calls, sub-sequent calls are scheduled for next main loop ticks.
 *
 * When the task execution (`tick` method) is called in re-entrant way this is detected and
 * we are limiting the task execution per call stack to exactly one, but scheduling/post-poning further
 * task processing on the next main loop iteration (also known as "next tick" in the Node/JS runtime lingo).
 */
export default class TaskLoop extends Logger {
    private readonly _boundTick;
    private _tickTimer;
    private _tickInterval;
    private _tickCallCount;
    constructor(label: string, logger: ILogger);
    destroy(): void;
    protected onHandlerDestroying(): void;
    protected onHandlerDestroyed(): void;
    hasInterval(): boolean;
    hasNextTick(): boolean;
    /**
     * @param millis - Interval time (ms)
     * @eturns True when interval has been scheduled, false when already scheduled (no effect)
     */
    setInterval(millis: number): boolean;
    /**
     * @returns True when interval was cleared, false when none was set (no effect)
     */
    clearInterval(): boolean;
    /**
     * @returns True when timeout was cleared, false when none was set (no effect)
     */
    clearNextTick(): boolean;
    /**
     * Will call the subclass doTick implementation in this main loop tick
     * or in the next one (via setTimeout(,0)) in case it has already been called
     * in this tick (in case this is a re-entrant call).
     */
    tick(): void;
    tickImmediate(): void;
    /**
     * For subclass to implement task logic
     * @abstract
     */
    protected doTick(): void;
}
//# sourceMappingURL=task-loop.d.ts.map