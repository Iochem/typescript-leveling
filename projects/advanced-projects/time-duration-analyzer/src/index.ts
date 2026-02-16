import {IntegrityService} from "./IntegrityService";
import {Snapshot} from "./snapshot";


const service = new IntegrityService();

// Testing
const snapshotsShort: Snapshot[] = [
    { status: "ON", processId: "proc-3", timestamp: new Date(2026, 1, 13, 10, 0).getTime() },   // 10h00
    { status: "OFF", processId: "proc-3", timestamp: new Date(2026, 1, 13, 10, 50).getTime() }, // 10h50
    { status: "ON", processId: "proc-3", timestamp: new Date(2026, 1, 13, 11, 0).getTime() },   // 11h00
]; //HEALTHY

const snapshotsLong: Snapshot[] = [
    { status: "ON", processId: "proc-3", timestamp: new Date(2026, 1, 13, 12, 0).getTime() },   // 12h00
    { status: "OFF", processId: "proc-3", timestamp: new Date(2026, 1, 13, 13, 40).getTime() }, // 13h40
    { status: "ON", processId: "proc-3", timestamp: new Date(2026, 1, 13, 15, 25).getTime() },   // 15h25
]; // CRITICAL

service.analyserHealth(snapshotsShort);
service.analyserHealth(snapshotsLong);

console.log("Health Status:", service.integrityResult);
