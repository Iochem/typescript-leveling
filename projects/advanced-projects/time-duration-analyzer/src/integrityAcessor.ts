import {Snapshot} from "./snapshot";
import {SystemEvent} from "./systemEvent";
import {HealthStatus} from "./types";
import { intervalToDuration, formatDuration } from "date-fns";
import { enUS } from "date-fns/locale";

/**
 * Detects the first state transition inside a snapshot sequence.
 * The function is responsible only for identifying the transition.
 * It does NOT store or persist anything.
 */
export function activityDetection( snapshot: Snapshot []): SystemEvent | null{
    for (let i = 0; i < snapshot.length - 1; i++) {
        const current = snapshot[i];
        const next = snapshot[i + 1];

        // Just consider as stop time: OFF --> ON
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
 * Converts time in hours and minutes.
 * But this transform in string
 */
export function formatStopTime(ms: number): string {
    const duration = intervalToDuration({ start: 0, end: ms });
    return formatDuration(duration, {
        format: ["hours", "minutes"], // Ex:'40 minutes'
        locale: enUS,
    });
}

/**
 * This function assumes the event is already identified.
 */
export function severityAnalyze(stopTime: number): HealthStatus {
    const MINUTE = 60_000;
    // Threshold definitions
    const HEALTHY_LIMIT = 15 * MINUTE;
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





