

// Explicit domain
export type ProcessStatus = "RUNNING" | "STOPPED";

export type StateChange = "UNEXPECTED_STOP" | "RECOVERY" | "NO_CHANGE";

export type PerformanceChange = "PERFORMANCE_DROP" | "PERFORMANCE_IMPROVED" | "NO_CHANGE";

export type ResultReturn = {
    processId: string;
    stateChange: StateChange;
    performanceChange: PerformanceChange;
}