import {SystemEvent} from "./systemEvent";
import {Snapshot} from "./snapshot";
import {IntegrityResult} from "./types";
import {activityDetection, severityAnalyze, timeDetection} from "./integrityAcessor";


export class IntegrityService {
    systemEvent: SystemEvent[] = [];
    snapshot: Snapshot[] = [];
    integrityResult: IntegrityResult[] = [];

    analyserHealth(snapshot: Snapshot []) {
        const activity = activityDetection(snapshot);
        if (!activity) return null;
        this.systemEvent.push(activity);

        const stopTime = timeDetection(activity);
        const severity = severityAnalyze(stopTime);

        this.integrityResult.push({
            processId:activity.initialActivity.processId,
            severity: severity,
            stopTime: stopTime,
        });

        return  this.integrityResult;
    }
}