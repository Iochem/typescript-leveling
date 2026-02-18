import {PerformanceChange, ProcessStatus, StateChange} from "./types";
import {Snapshot} from "./Snapshot";


// Functions domain

export function stateDetection(before: Snapshot, after: Snapshot):StateChange {
    if (before.status === "RUNNING" && after.status === "STOPPED") {
        return "UNEXPECTED_STOP";
    }

    if (before.status === "STOPPED" && after.status === "RUNNING") {
        return "RECOVERY";
    }
    return "NO_CHANGE";
}

export function conditionDetection(before: Snapshot, after: Snapshot): PerformanceChange {
    if (after.performance > before.performance) {
        return "PERFORMANCE_IMPROVED";
    }

    if (after.performance < before.performance) {
        return "PERFORMANCE_DROP";
    }
    return "NO_CHANGE";
}
