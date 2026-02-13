import {SystemEvent} from "./systemEvent";
import {Snapshot} from "./snapshot";
import {IntegrityResult} from "./types";
import {activityDetection, formatStopTime, severityAnalyze, timeDetection} from "./integrityAcessor";


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
        const formattedStopTime = formatStopTime(stopTime);

        this.integrityResult.push({
            processId:activity.initialActivity.processId,
            severity: severity,
            stopTime: stopTime,
            formattedTime: formattedStopTime,
        });

        return  this.integrityResult;
    }
}