import {Snapshot} from "./snapshot";
import {SystemEvent} from "./systemEvent";
import {HealthStatus} from "./types";

/**
 * Detects the first state transition inside a snapshot sequence.
 * The function is responsible only for identifying the transition.
 * It does NOT store or persist anything.
 */
export function activityDetection( snapshot: Snapshot []): SystemEvent | null{
    for (let i = 0; i < snapshot.length - 1; i++) {
        const current = snapshot[i];
        const next = snapshot[i + 1];

        if(current.status === "ON" && next.status === "OFF"){
            return {
                initialActivity: current,
                finalActivity: next,
            };
        }

        if(current.status === "OFF" && next.status === "ON"){
            return {
                initialActivity: current,
                finalActivity: next,
            };
        }
    }
    return null;
}

/**
 * Calculate absolute duration between snapshots.
 */
export function timeDetection(event: SystemEvent): number {
    return Math.abs(event.finalActivity.timestamp - event.initialActivity.timestamp);
}

/**
 * This function assumes the event is already identified.
 */
export function severityAnalyze(stopTime: number): HealthStatus {
    const MINUTE = 60_000;
    // Threshold definitions
    const HEALTHY_LIMIT = 5 * MINUTE;
    const DEGRADED_LIMIT = 30 * MINUTE;

    let worstStatus: HealthStatus = "HEALTHY";

    // Determine severity level based on duration thresholds
    if (stopTime < HEALTHY_LIMIT) {
        worstStatus = "HEALTHY";
    } else if (stopTime < DEGRADED_LIMIT) {
        worstStatus = "DEGRADED";
    } else {
        worstStatus = "CRITICAL";
    }

    return worstStatus;
}


