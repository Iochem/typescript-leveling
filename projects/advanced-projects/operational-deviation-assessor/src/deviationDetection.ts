import {PerformanceChange, ProcessStatus, StateChange} from "./types";


// Functions domain

export function StateDetection(beforeStatus: ProcessStatus, afterStatus: ProcessStatus ):StateChange{
    if(beforeStatus === "RUNNING" && afterStatus === "STOPPED"){
        return "UNEXPECTED_STOP";

    } else if(beforeStatus === "STOPPED" && afterStatus === "RUNNING"){
        return "RECOVERY";
    } else{
        return "NO_CHANGE";
    }

}

export function ConditionDetection(afterPerformance: number,beforePerformance: number):PerformanceChange{
    if(afterPerformance >  beforePerformance){
        return "PERFORMANCE_IMPROVED";
    } else if(afterPerformance ===  beforePerformance){
        return "NO_CHANGE";
    }  else if(afterPerformance <  beforePerformance){
        return "PERFORMANCE_DROP";
    }
}
