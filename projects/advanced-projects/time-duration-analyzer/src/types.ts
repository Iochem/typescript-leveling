
// Domain Types
export type SystemStatus = "ON" | "OFF";
export type HealthStatus = "HEALTHY" | "DEGRADED" | "CRITICAL";

export type IntegrityResult = {
    processId: string;
    severity: HealthStatus;
    stopTime: number;
}