import {EvaluationInput} from "./evaluationInput";
import {ResultReturn} from "./types";
import {ConditionDetection, StateDetection} from "./deviationDetection";


export class AnalyzerService { // Orchestration functions

    operacionalDesviation(input: EvaluationInput): ResultReturn{

        //Creates the variables that will be sent to the functions
        const beforeStatus = input.before.status
        const afterStatus = input.after.status
        const beforePerformance = input.before.performance
        const afterPerformance = input.after.performance

        //sends the data to the functions
        const state = StateDetection(beforeStatus, afterStatus );
        const condition = ConditionDetection(afterPerformance,beforePerformance );

        return{
            processId: input.processId,
            stateChange: state,
            performanceChange: condition
        }

    }
}