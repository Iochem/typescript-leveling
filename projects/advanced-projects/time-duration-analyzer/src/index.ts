import {IntegrityService} from "./IntegrityService";
import {Snapshot} from "./snapshot";


const service = new IntegrityService();

// Testing
const snapshotsShort: Snapshot[] = [
    { status: "ON", processId: "proc-1", timestamp: Date.now() },
    { status: "OFF", processId: "proc-1", timestamp: Date.now() + 2 * 60_000 }, // 2 min depois
    { status: "ON", processId: "proc-1", timestamp: Date.now() + 10 * 60_000 }, // 10 min
]; //HEALTHY

const snapshotsLong: Snapshot[] = [
    { status: "ON", processId: "proc-2", timestamp: Date.now() },
    { status: "OFF", processId: "proc-2", timestamp: Date.now() + 40 * 60_000 }, // 40 min
    { status: "ON", processId: "proc-2", timestamp: Date.now() + 50 * 60_000 }, // 50 min
]; // CRITICAL

service.analyserHealth(snapshotsShort);
service.analyserHealth(snapshotsLong);

console.log("Health Status:", service.integrityResult);
