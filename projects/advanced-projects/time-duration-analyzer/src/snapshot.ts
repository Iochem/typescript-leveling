import {SystemStatus} from "./types";

export interface Snapshot {
    status: SystemStatus;
    processId: string;
    timestamp: number;
}